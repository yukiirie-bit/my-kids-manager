import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Child, Activity, Event } from './types';

interface AppState {
  children: Child[]; activities: Activity[]; events: Event[];
  addActivity: (a: Activity) => void;
  deleteActivity: (id: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      children: [
        { id: '1', name: '兄', color: '#3b82f6' },
        { id: '2', name: '妹', color: '#ec4899' }
      ],
      activities: [], events: [],
      addActivity: (a) => set((s) => ({ activities: [...s.activities, a] })),
      deleteActivity: (id) => set((s) => ({ activities: s.activities.filter(x => x.id !== id) })),
    }),
    { name: 'kids-storage', storage: createJSONStorage(() => AsyncStorage) }
  )
);
