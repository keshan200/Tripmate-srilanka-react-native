import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { registerForPushNotifications, scheduleTripNotification } from "../services/notificationService";

interface NotificationProps {
  tripTitle?: string; 
  tripStartDate: Date;// Optional: title of the trip to send notification
}

const Notifications: React.FC<NotificationProps> = ({ tripTitle ,tripStartDate}) => {
  const [expoToken, setExpoToken] = useState<string | null>(null);

  // Request permission and get token
  useEffect(() => {
    const initNotifications = async () => {
      const token = await registerForPushNotifications();
      setExpoToken(token);
      if (!token) Alert.alert("Notifications permission denied!");
    };
    initNotifications();
  }, []);

  // Function to send notification
  const handleSendNotification = async () => {
    if (!tripTitle) {
      Alert.alert("No trip title provided");
      return;
    }
    await scheduleTripNotification(tripTitle ,tripStartDate);
    Alert.alert(`Notification scheduled for "${tripTitle}"`);
  };

  

  return (
    <View style={{ margin: 10, padding: 10, borderWidth: 1, borderRadius: 10 }}>
      <Text style={{ marginBottom: 10 }}>
        {expoToken ? `Expo Push Token: ${expoToken}` : "Fetching notification token..."}
      </Text>
      <Button title="Send Trip Notification" onPress={handleSendNotification} />
    </View>
  );
};

export default Notifications;
