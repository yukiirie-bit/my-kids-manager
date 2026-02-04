import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="activity/[id]" options={{ title: '詳細' }} />
      <Stack.Screen name="activity/edit" options={{ title: '登録', presentation: 'modal' }} />
    </Stack>
  );
}
