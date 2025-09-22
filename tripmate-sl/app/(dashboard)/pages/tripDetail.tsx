import Notifications from "@/components/Notification";
import React from "react";
import { View, Text } from "react-native";


const TripDetailsScreen = () => {
  const tripTitle = "Colombo to Kandy";
  const tripStartDate = new Date("2025-09-25T09:00:00"); // Example date

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>{tripTitle}</Text>

      {/* Notification automatically scheduled */}
      
     <Notifications tripTitle={tripTitle} tripStartDate={tripStartDate} />
      </View>
  );
};

export default TripDetailsScreen;
