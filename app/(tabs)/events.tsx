import { useRouter } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
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
            onOpen={(id: string) => router.push(`/events/${id}`)}
            onToggleFavorite={toggleFavorite}
          />
        )}
      />
    </View>
  );
}