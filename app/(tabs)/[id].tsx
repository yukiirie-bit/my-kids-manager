import React from 'react';
import { View, Text, TouchableOpacity, Alert, Share } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { useAppStore } from '../../lib/store';

export default function ActivityDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { activities, deleteActivity } = useAppStore();
  const activity = activities.find(a => a.id === id);

  if (!activity) return <Text>Not Found</Text>;

  const handleDelete = () => {
    Alert.alert('削除', '本当に削除しますか？', [
      { text: 'キャンセル', style: 'cancel' },
      { text: '削除', style: 'destructive', onPress: () => { deleteActivity(activity.id); router.back(); } }
    ]);
  };

  return (
    <View className="flex-1 bg-white p-6">
      <Stack.Screen options={{ title: activity.name }} />
      <Text className="text-3xl font-bold mb-4">{activity.name}</Text>
      <View className="bg-gray-50 p-4 rounded-xl mb-6">
        <Text className="text-gray-600">月謝: ¥{activity.cost.toLocaleString()}</Text>
        <Text className="text-gray-600">引き落とし日: 毎月{activity.paymentDate}日</Text>
      </View>
      <TouchableOpacity onPress={handleDelete} className="bg-red-50 p-4 rounded-lg items-center">
        <Text className="text-red-500 font-bold">この習い事を削除する</Text>
      </TouchableOpacity>
    </View>
  );
}
