import { View, Text, ScrollView } from 'react-native';
import { useAppStore } from '../../lib/store';

export default function Home() {
  const { activities } = useAppStore();
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold mb-4">マイダッシュボード</Text>
      {activities.length === 0 ? (
        <Text className="text-gray-400">習い事を登録しましょう</Text>
      ) : (
        activities.map(a => (
          <View key={a.id} className="bg-white p-4 rounded-lg mb-2 shadow-sm">
            <Text className="font-bold">{a.name}</Text>
            <Text>¥{a.cost.toLocaleString()}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

