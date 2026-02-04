import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useAppStore } from '../../lib/store';
import { format, startOfWeek, addDays, eachDayOfInterval } from 'date-fns';
import { ja } from 'date-fns/locale';

export default function CalendarScreen() {
  const { activities, children } = useAppStore();
  const today = new Date();
  const start = startOfWeek(today, { weekStartsOn: 0 });
  const weekDays = eachDayOfInterval({ start, end: addDays(start, 6) });

  return (
    <View className="flex-1 bg-gray-100">
      <View className="p-4 bg-white border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">カレンダー</Text>
      </View>
      <View className="flex-row justify-around bg-white py-2 border-b border-gray-200">
        {weekDays.map(day => (
          <View key={day.toString()} className="items-center">
            <Text className="text-xs text-gray-500">{format(day, 'E', { locale: ja })}</Text>
            <Text className="text-lg font-semibold">{format(day, 'd')}</Text>
          </View>
        ))}
      </View>
      <ScrollView className="flex-1 p-2">
        <Text className="text-center text-gray-400 mt-10">今週の予定がここに表示されます</Text>
      </ScrollView>
    </View>
  );
}
