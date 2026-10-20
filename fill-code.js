const fs = require('fs');
const path = require('path');

// --- รวมโค้ดที่จะยัดใส่ไฟล์ต่างๆ ไว้ที่นี่ ---
const fileContents = {
  "types/event.ts": `export type CampusEvent = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  imageUrl?: string;
  location: { name: string; latitude: number; longitude: number; };
};`,

  "components/EventCard.tsx": `import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { CampusEvent } from '../types/event';

export function EventCard({ event, isFavorite, onOpen, onToggleFavorite }: any) {
  return (
    <Pressable style={styles.card} onPress={() => onOpen(event.id)}>
      {event.imageUrl && <Image source={{ uri: event.imageUrl }} style={styles.image} />}
      <View style={styles.body}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={{ color: 'gray' }}>📍 {event.location.name}</Text>
        <Pressable onPress={() => onToggleFavorite(event.id)} style={styles.btn}>
          <Text style={{ color: isFavorite ? '#fff' : '#000' }}>
            {isFavorite ? '★ บันทึกแล้ว' : '☆ บันทึกกิจกรรม'}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', borderRadius: 12, marginBottom: 16, overflow: 'hidden', elevation: 3 },
  image: { width: '100%', height: 150 },
  body: { padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  btn: { marginTop: 12, padding: 10, backgroundColor: '#007BFF', borderRadius: 8, alignItems: 'center' }
});`,

  "app/(tabs)/events.tsx": `import { View, FlatList, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { EventCard } from '../../components/EventCard';
import { useFavorites } from '../../store/FavoritesProvider';

const MOCK_EVENTS = [
  { id: '1', title: 'Open House 2026', description: 'ยินดีต้อนรับน้องๆ', startsAt: '2026-11-01T09:00:00Z', location: { name: 'หอประชุมใหญ่', latitude: 16.4322, longitude: 102.8236 } },
  { id: '2', title: 'Mobile Dev Workshop', description: 'เรียนเขียนแอป', startsAt: '2026-11-15T13:00:00Z', location: { name: 'ตึกคอมพิวเตอร์', latitude: 16.4350, longitude: 102.8200 } }
];

export default function EventsScreen() {
  const router = useRouter();
  const { favoriteIds, toggleFavorite } = useFavorites();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>กิจกรรมมหาวิทยาลัย</Text>
      <FlatList
        data={MOCK_EVENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            isFavorite={favoriteIds.includes(item.id)}
            onOpen={(id) => router.push(\`/events/\${id}\`)}
            onToggleFavorite={toggleFavorite}
          />
        )}
      />
    </View>
  );
}`,

  "app/(tabs)/profile.tsx": `import { View, Text, Button, StyleSheet } from 'react-native';
import { useSession } from '../../store/SessionProvider';

export default function ProfileScreen() {
  const { signOut } = useSession();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>โปรไฟล์นักศึกษา</Text>
        <Text style={styles.info}>ชื่อ: ทัตพงศ์ พงศ์สุวากร</Text>
        <Text style={styles.info}>รหัส: 663450039-7</Text>
      </View>
      <Button title="ออกจากระบบ (Logout)" color="#DC3545" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 20, elevation: 2 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  info: { fontSize: 16, marginBottom: 8 }
});`,

  "app/(tabs)/favorites.tsx": `import { View, Text } from 'react-native';
import { useFavorites } from '../../store/FavoritesProvider';

export default function FavoritesScreen() {
  const { favoriteIds } = useFavorites();
  return (
    <View style={{ flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>รายการโปรด</Text>
      <Text style={{ marginTop: 16, fontSize: 18 }}>บันทึกไว้ทั้งหมด: {favoriteIds.length} รายการ</Text>
    </View>
  );
}`,

  "app/login.tsx": `import { View, Text, Button, StyleSheet } from 'react-native';
import { useSession } from '../store/SessionProvider';

export default function LoginScreen() {
  const { signIn } = useSession();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Events</Text>
      <Text style={styles.subtitle}>กรุณาเข้าสู่ระบบเพื่อใช้งานแอปพลิเคชัน</Text>
      <View style={{ width: '100%', marginTop: 20 }}>
        <Button title="เข้าสู่ระบบ (Login)" onPress={() => signIn('mock-access-token')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 10, color: '#007BFF' },
  subtitle: { fontSize: 16, color: 'gray', textAlign: 'center' }
});`,

  "app/events/[id].tsx": `import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams();
  const mockLocation = { latitude: 16.4322, longitude: 102.8236 }; // มข.

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ height: 250, width: '100%' }} initialRegion={{ ...mockLocation, latitudeDelta: 0.01, longitudeDelta: 0.01 }}>
        <Marker coordinate={mockLocation} title="สถานที่จัดกิจกรรม" />
      </MapView>
      
      <View style={styles.body}>
        <Text style={styles.title}>รายละเอียดกิจกรรม (ID: {id})</Text>
        <Text style={{ marginTop: 10, lineHeight: 24 }}>กิจกรรมนี้เป็นส่วนหนึ่งของวิชา Mobile App Development สัปดาห์ที่ 1-11 ครอบคลุมการใช้ UI, Navigation, State, Maps และ Auth</Text>
        
        <View style={{ marginTop: 30 }}>
          <Button title="ตั้งการแจ้งเตือน (Week 11)" onPress={() => alert('ตั้งแจ้งเตือนสำเร็จ!')} color="#28A745" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({ body: { padding: 20 }, title: { fontSize: 22, fontWeight: 'bold' } });`
};

// --- ฟังก์ชันเขียนไฟล์ ---
Object.keys(fileContents).forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  try {
    fs.writeFileSync(fullPath, fileContents[filePath]);
    console.log('✅ เติมโค้ดลงใน:', filePath);
  } catch (err) {
    console.log('❌ หาไฟล์ไม่พบ:', filePath);
  }
});
console.log('🎉 ร่ายมนต์เติมโค้ดเสร็จสิ้น! ลองกดรันแอปได้เลยครับ');