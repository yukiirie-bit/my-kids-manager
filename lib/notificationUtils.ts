import * as Notifications from 'expo-notifications';

export async function registerForPushNotificationsAsync() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('通知許可が必要です');
    return;
  }
}

export async function scheduleNotification(title: string, body: string, day: number) {
  await Notifications.scheduleNotificationAsync({
    content: { title, body },
    trigger: { day, hour: 9, minute: 0, repeats: true },
  });
}
