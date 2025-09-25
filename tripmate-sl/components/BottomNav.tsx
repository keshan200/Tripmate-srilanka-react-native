import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";



{/**<Ionicons name="home-outline" size={24} color="#EA580C" />
          <Text className="text-xs text-orange-500">Home</Text> */}

const BottomNav = () => {
  return (
    <View className="mx-4 mb-8">
      <View className="flex-row justify-around items-center bg-orange-500 h-16 rounded-2xl shadow-lg border border-gray-200">
        <TouchableOpacity onPress={() => router.push("/(dashboard)/pages/tripDetail")} className="items-center">
          <Ionicons name="home-outline" size={24} color="white" />
          <Text className="text-xs text-white">Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(dashboard)/pages/tripDetail")} className="items-center">
          <Ionicons name="receipt-outline" size={24} color="white" />
          <Text className="text-xs text-white">Trips</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(dashboard)/pages/tripDetail")} className="items-center">
          <Ionicons name="checkmark-circle-outline" size={24} color="white" />
          <Text className="text-xs text-white">Packing</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(dashboard)/pages/trip")} className="items-center">
          <Ionicons name="add-circle-outline" size={24} color="white" />
          <Text className="text-xs text-white">New</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNav;