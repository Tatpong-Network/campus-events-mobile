import { useLocalSearchParams } from 'expo-router';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

// โหลด react-native-maps เฉพาะเมื่ออยู่บนมือถือ Android/iOS
let MapView: any = null;
let Marker: any = null;
if (Platform.OS !== 'web') {
  const Maps = require('react-native-maps');
  MapView = Maps.default;
  Marker = Maps.Marker;
}

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams();
  const mockLocation = { latitude: 16.4322, longitude: 102.8236 }; // พิกัด มข.

  return (
    <View style={{ flex: 1 }}>
      {Platform.OS === 'web' ? (
        <View style={styles.webMapFallback}>
          <Text style={{ fontSize: 16, color: '#555' }}>
            🗺️ แผนที่แบบ Interactive รองรับบน Android / iOS (Mobile)
          </Text>
        </View>
      ) : (
        MapView && (
          <MapView
            style={{ height: 250, width: '100%' }}
            initialRegion={{ ...mockLocation, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
          >
            {Marker && <Marker coordinate={mockLocation} title="สถานที่จัดกิจกรรม" />}
          </MapView>
        )
      )}

      <View style={styles.body}>
        <Text style={styles.title}>รายละเอียดกิจกรรม (ID: {id})</Text>
        <Text style={{ marginTop: 10, lineHeight: 24 }}>
          กิจกรรมนี้เป็นส่วนหนึ่งของวิชา Mobile App Development สัปดาห์ที่ 1-11 ครอบคลุมการใช้ UI, Navigation, State, Maps และ Auth
        </Text>

        <View style={{ marginTop: 30 }}>
          <Button
            title="ตั้งการแจ้งเตือน (Week 11)"
            onPress={() => alert('ตั้งการแจ้งเตือนสำเร็จ!')}
            color="#28A745"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
  webMapFallback: {
    height: 200,
    backgroundColor: '#e9ecef',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});