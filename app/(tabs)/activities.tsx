import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useAppStore } from '../../lib/store';
import { FontAwesome } from '@expo/vector-icons';

export default function ActivitiesScreen() {
  const { children, activities } = useAppStore();
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100">
      <View className="p-4 bg-white border-b border-gray-200 flex-row justify-between items-center">
        <Text className="text-2xl font-bold text-gray-800">習い事・サブスク</Text>
        <TouchableOpacity onPress={() => router.push('/activity/edit')} className="bg-blue-500 w-10 h-10 rounded-full items-center justify-center">
          <FontAwesome name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView className="flex-1 p-4">
        {children.map(child => (
          <View key={child.id} className="mb-6">
            <Text className="text-xl font-bold mb-3" style={{ color: child.color }}>{child.name}</Text>
            {activities.filter(a => a.childId === child.id).map(activity => (
              <Link key={activity.id} href={`/activity/${activity.id}`} asChild>
                <TouchableOpacity className="bg-white p-4 rounded-lg shadow-sm mb-2 flex-row justify-between items-center">
                  <View>
                    <Text className="text-lg font-bold">{activity.name}</Text>
                    <Text className="text-gray-500">¥{activity.activity.cost.toLocaleString()} / 毎月{activity.paymentDate}日</Text>
                  </View>
                  <FontAwesome name="chevron-right" size={14} color="#ccc" />
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
