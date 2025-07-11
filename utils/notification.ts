import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  Alert.alert(authStatus)
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    const token = await messaging().getToken();
    Alert.alert(token)
    console.log('🔥 FCM Token:', token);
  }
}

export function notificationListener() {
  messaging().onMessage(async remoteMessage => {
    Alert.alert('📩 New Notification', JSON.stringify(remoteMessage.notification));
  });
}
