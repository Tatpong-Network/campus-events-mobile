import { View, Text } from 'react-native';
import { useFavorites } from '../../store/FavoritesProvider';

export default function FavoritesScreen() {
  const { favoriteIds } = useFavorites();
  return (
    <View style={{ flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>รายการโปรด</Text>
      <Text style={{ marginTop: 16, fontSize: 18 }}>บันทึกไว้ทั้งหมด: {favoriteIds.length} รายการ</Text>
    </View>
  );
}