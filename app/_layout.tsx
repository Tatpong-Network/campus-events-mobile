import { Stack } from 'expo-router';
import { FavoritesProvider } from '../store/FavoritesProvider';
import { SessionProvider } from '../store/SessionProvider';

export default function RootLayout() {
  return (
    <SessionProvider>
      <FavoritesProvider>
        <Stack screenOptions={{ headerShown: false, headerBackTitle: 'กลับ' }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" options={{ title: 'เข้าสู่ระบบ', headerShown: true }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="events/[id]" options={{ title: 'รายละเอียดกิจกรรม', headerShown: true }} />
          <Stack.Screen name="events/create" options={{ title: 'สร้างกิจกรรม', headerShown: true }} />
        </Stack>
      </FavoritesProvider>
    </SessionProvider>
  );
}