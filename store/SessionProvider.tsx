import * as SecureStore from 'expo-secure-store';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Platform } from 'react-native';

type SessionState =
  | { status: 'loading' }
  | { status: 'anonymous' }
  | { status: 'authenticated'; accessToken: string };

const SessionContext = createContext<{
  session: SessionState;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
}>(null as any);

const TOKEN_KEY = 'session_access_token';

// ฟังก์ชันผู้ช่วย: ตรวจสอบและดึง Token ตาม Platform (Web vs Mobile)
async function getToken(): Promise<string | null> {
  try {
    if (Platform.OS === 'web') {
      return typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null;
    }
    return await SecureStore.getItemAsync(TOKEN_KEY);
  } catch {
    return null;
  }
}

async function saveToken(token: string): Promise<void> {
  try {
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined') localStorage.setItem(TOKEN_KEY, token);
      return;
    }
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  } catch {}
}

async function deleteToken(): Promise<void> {
  try {
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined') localStorage.removeItem(TOKEN_KEY);
      return;
    }
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch {}
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<SessionState>({ status: 'loading' });

  useEffect(() => {
    getToken().then(token => {
      if (token) setSession({ status: 'authenticated', accessToken: token });
      else setSession({ status: 'anonymous' });
    });
  }, []);

  const signIn = async (token: string) => {
    await saveToken(token);
    setSession({ status: 'authenticated', accessToken: token });
  };

  const signOut = async () => {
    await deleteToken();
    setSession({ status: 'anonymous' });
  };

  return (
    <SessionContext.Provider value={{ session, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => useContext(SessionContext);