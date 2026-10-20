import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
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
});