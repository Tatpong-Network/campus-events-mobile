import { Redirect } from 'expo-router';
import { useSession } from '../store/SessionProvider';

export default function IndexScreen() {
  const { session } = useSession();

  if (session.status === 'loading') return null;

  if (session.status === 'authenticated') {
    return <Redirect href="/(tabs)/events" />;
  }

  return <Redirect href="/login" />;
}