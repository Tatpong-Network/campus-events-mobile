import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSession } from '../../store/SessionProvider';

export default function ProfileScreen() {
  const { signOut } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>โปรไฟล์นักศึกษา</Text>
        <Text style={styles.info}>ชื่อ: ทัตพงศ์ พงศ์สุวากร</Text>
        <Text style={styles.info}>รหัส: 663450039-7</Text>
      </View>
      <Button title="ออกจากระบบ (LOGOUT)" color="#DC3545" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 20, elevation: 2 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  info: { fontSize: 16, marginBottom: 8 },
});