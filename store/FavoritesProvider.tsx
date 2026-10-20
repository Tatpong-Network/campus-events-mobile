import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const FAVORITES_KEY = 'campus-events/favorite-ids/v1';

const FavoritesContext = createContext<{
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
}>(null as any);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  // โหลดข้อมูลเก่าจากเครื่องเมื่อเปิดแอป
  useEffect(() => {
    AsyncStorage.getItem(FAVORITES_KEY).then(raw => {
      if (raw) {
        try {
          const ids = JSON.parse(raw);
          if (Array.isArray(ids)) setFavoriteIds(ids);
        } catch {}
      }
    });
  }, []);

  // บันทึกการกดหัวใจ
  const toggleFavorite = async (id: string) => {
    const newIds = favoriteIds.includes(id)
      ? favoriteIds.filter(fId => fId !== id)
      : [...favoriteIds, id];
    
    setFavoriteIds(newIds);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newIds));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);