import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../lib/store';

export default function EditActivity() {
  const router = useRouter();
  const { children, addActivity } = useAppStore();
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [childId, setChildId] = useState(children[0].id);

  const handleSave = () => {
    addActivity({
      id: Math.random().toString(36).substr(2, 9),
      childId, name, cost: parseInt(cost), paymentDate, type: 'lesson'
    });
    router.back();
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="font-bold mb-2">習い事名</Text>
      <TextInput className="border border-gray-200 p-3 rounded-lg mb-4" value={name} onChangeText={setName} />
      <Text className="font-bold mb-2">月謝</Text>
      <TextInput className="border border-gray-200 p-3 rounded-lg mb-4" value={cost} onChangeText={setCost} keyboardType="numeric" />
      <Text className="font-bold mb-2">引き落とし日</Text>
      <TextInput className="border border-gray-200 p-3 rounded-lg mb-4" value={paymentDate} onChangeText={setPaymentDate} keyboardType="numeric" />
      <TouchableOpacity onPress={handleSave} className="bg-blue-500 p-4 rounded-lg items-center">
        <Text className="text-white font-bold">保存する</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
