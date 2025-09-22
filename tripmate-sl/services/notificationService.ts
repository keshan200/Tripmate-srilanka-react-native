// services/notificationService.ts
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

export const registerForPushNotifications = async () => {
  if (!Device.isDevice) return null;

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    console.warn("Push notification permission denied");
    return null;
  }

  const token = (await Notifications.getExpoPushTokenAsync()).data;
  return token;
};



export const scheduleTripNotification = async (title: string, tripStartDate: Date) => {
  try {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Trip Reminder ✈️",
            body: `Your trip "${title}" starts today!`,
        },
        trigger: null
    });
    console.log("Notification sent successfully!");
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};
