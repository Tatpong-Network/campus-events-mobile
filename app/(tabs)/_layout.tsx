import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="events" options={{ title: 'กิจกรรม' }} />
      <Tabs.Screen name="favorites" options={{ title: 'รายการโปรด' }} />
      <Tabs.Screen name="profile" options={{ title: 'โปรไฟล์' }} />
    </Tabs>
  );
}