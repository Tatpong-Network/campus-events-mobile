import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSession } from '../store/SessionProvider';

export default function LoginScreen() {
  const { signIn } = useSession();
  const router = useRouter();

  const handleLogin = () => {
    signIn('mock-access-token');
    router.replace('/(tabs)/events');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Events</Text>
      <Text style={styles.subtitle}>กรุณาเข้าสู่ระบบเพื่อใช้งานแอปพลิเคชัน</Text>
      <View style={{ width: '100%', marginTop: 20 }}>
        <Button title="เข้าสู่ระบบ (Login)" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 10, color: '#007BFF' },
  subtitle: { fontSize: 16, color: 'gray', textAlign: 'center' },
});