import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ActivityIndicator
} from "react-native"
import React, { useEffect, useState } from "react"
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router"
import { Trip } from "@/types/Trip"
import { getAllTrip } from "@/services/tripService"

const Dashboard = () => {
  const [activeTrip, setActiveTrip] = useState("current")

 
  const [trips, setTrips] = useState<Trip[]>([])
  const [loading, setLoading] = useState(true)


useEffect(() => {
  const fetchTrips = async () => {
    try {
      const allTrips = await getAllTrip() 
      setTrips(allTrips)                  
    } catch (error) {
      console.error("Error fetching trips:", error)
    } finally {
      setLoading(false) 
    }
  }

  fetchTrips()
}, [])



  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Decorative Background Elements */}
      <View className="absolute top-0 left-0 right-0 h-80 bg-orange-50" />
      <View className="absolute top-20 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-20" />
      <View className="absolute top-40 left-8 w-12 h-12 bg-orange-100 rounded-full opacity-30" />
      <View className="absolute top-60 right-20 w-8 h-8 bg-orange-300 rounded-full opacity-20" />
      
      <ScrollView className="flex-1 relative z-10" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="bg-white mx-4 mt-4 rounded-3xl p-4 shadow-lg border border-gray-100">
          <View className="flex-row items-center justify-between mb-3">
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-orange-500 rounded-2xl items-center justify-center mr-3">
                <Text className="text-xl">🏝️</Text>
              </View>
              <View>
                <Text className="text-gray-800 text-xl font-bold">TripMate</Text>
                <Text className="text-orange-600 text-sm font-semibold">Sri Lanka</Text>
              </View>
            </View>
            <View className="flex-row items-center space-x-3">
              <TouchableOpacity className="w-10 h-10 bg-gray-50 rounded-xl items-center justify-center border border-gray-200">
                <Ionicons name="search-outline" size={20} color="#EA580C" />
              </TouchableOpacity>
              <TouchableOpacity className="w-10 h-10 bg-gray-50 rounded-xl items-center justify-center border border-gray-200">
                <Ionicons name="notifications-outline" size={20} color="#EA580C" />
              </TouchableOpacity>
              <TouchableOpacity className="w-10 h-10 bg-gray-50 rounded-xl items-center justify-center border border-gray-200">
                <Ionicons name="person-outline" size={20} color="#EA580C" />
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Offline Status */}
          <View className="flex-row items-center bg-green-50 px-3 py-2 rounded-xl border border-green-200">
            <View className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            <Text className="text-green-700 text-sm font-medium">📱 Offline Mode - All data stored locally</Text>
          </View>
        </View>

        {/* Welcome Message */}
        <View className="px-4 py-4">
          <Text className="text-2xl font-bold text-gray-800 mb-1">Good Morning! 🌅</Text>
          <Text className="text-gray-600">Ready for your Sri Lankan adventure?</Text>
        </View>

        {/* Quick Stats */}
        <View className="px-4 mb-6">
          <View className="flex-row space-x-3">
            <View className="flex-1 bg-white p-4 rounded-2xl shadow-lg border border-orange-100">
              <View className="flex-row items-center justify-between mb-2">
                <Ionicons name="map-outline" size={20} color="#EA580C" />
                <Text className="text-2xl">✈️</Text>
              </View>
              <Text className="text-gray-800 text-2xl font-bold">3</Text>
              <Text className="text-gray-600 text-sm">Active Trips</Text>
            </View>
            <View className="flex-1 bg-white p-4 rounded-2xl shadow-lg border border-orange-100">
              <View className="flex-row items-center justify-between mb-2">
                <Ionicons name="location-outline" size={20} color="#EA580C" />
                <Text className="text-2xl">🏛️</Text>
              </View>
              <Text className="text-gray-800 text-2xl font-bold">12</Text>
              <Text className="text-gray-600 text-sm">Destinations</Text>
            </View>
            <View className="flex-1 bg-white p-4 rounded-2xl shadow-lg border border-orange-100">
              <View className="flex-row items-center justify-between mb-2">
                <Ionicons name="cash-outline" size={20} color="#EA580C" />
                <Text className="text-2xl">💰</Text>
              </View>
              <Text className="text-gray-800 text-2xl font-bold">₨45k</Text>
              <Text className="text-gray-600 text-sm">Total Budget</Text>
            </View>
          </View>
        </View>

         {/* Current Trips */}
        <View className="px-4 mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-gray-800 text-lg font-bold">Current Adventure</Text>
            <TouchableOpacity className="bg-orange-500 px-4 py-2 rounded-full shadow-lg">
              <Text className="text-white text-sm font-semibold">View All</Text>
            </TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#EA580C" />
          ) : trips.length === 0 ? (
            <Text className="text-black-500">No trips found. Create a new trip!</Text>
          ) : (
            trips.map(trip => (
              
              <View key={trip.id} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-4">
               <View 
    key={trip.id} 
    className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-4 p-4"
  >
    <Text className="text-lg font-bold text-gray-800">{trip.title}</Text>
    <Text className="text-gray-600 text-sm">
      {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
    </Text>
    <Text className="text-gray-700 text-sm mt-2">
      Destinations: {trip.destinations?.join(", ")}
    </Text>
  </View>
              </View>
            ))
          )}
        </View>

        {/* Quick Actions */}
        <View className="px-4 mb-6">
          <Text className="text-gray-800 text-lg font-bold mb-4">Quick Actions</Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity 
              onPress={() => router.push("/(dashboard)/pages/trip")}
              className="w-[48%] bg-white p-5 rounded-2xl shadow-lg border border-orange-100 mb-3"
            >
              <View className="items-center">
                <View className="w-12 h-12 bg-orange-500 rounded-2xl items-center justify-center mb-3">
                  <Ionicons name="add-circle-outline" size={24} color="white" />
                </View>
                <Text className="text-gray-800 font-bold text-center">New Trip</Text>
                <Text className="text-gray-600 text-xs text-center mt-1">Plan your journey</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="w-[48%] bg-white p-5 rounded-2xl shadow-lg border border-orange-100 mb-3">
              <View className="items-center">
                <View className="w-12 h-12 bg-green-500 rounded-2xl items-center justify-center mb-3">
                  <Ionicons name="compass-outline" size={24} color="white" />
                </View>
                <Text className="text-gray-800 font-bold text-center">Explore Places</Text>
                <Text className="text-gray-600 text-xs text-center mt-1">Discover destinations</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={() => router.push("/(dashboard)/pages/packingList")} className="w-[48%] bg-white p-5 rounded-2xl shadow-lg border border-orange-100 mb-3">
              <View className="items-center">
                <View className="w-12 h-12 bg-blue-500 rounded-2xl items-center justify-center mb-3">
                  <Ionicons name="checkmark-circle-outline" size={24} color="white" />
                </View>
                <Text className="text-gray-800 font-bold text-center">Packing List</Text>
                <Text className="text-gray-600 text-xs text-center mt-1">What to pack</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={() => router.push("/(dashboard)/pages/tripList")} className="w-[48%] bg-white p-5 rounded-2xl shadow-lg border border-orange-100 mb-3">
              <View className="items-center">
                <View className="w-12 h-12 bg-purple-500 rounded-2xl items-center justify-center mb-3">
                  <Ionicons name="receipt-outline" size={24} color="white" />
                </View>
                <Text className="text-gray-800 font-bold text-center">Expenses</Text>
                <Text className="text-gray-600 text-xs text-center mt-1">Track spending</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Popular Destinations */}
        <View className="px-4 mb-6">
          <Text className="text-gray-800 text-lg font-bold mb-4">Popular Destinations</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-3">
            <TouchableOpacity className="w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mr-3">
              <View className="bg-orange-500 h-32 items-center justify-center">
                <Text className="text-6xl">🏰</Text>
              </View>
              <View className="p-4">
                <Text className="text-gray-800 font-bold mb-1">Sigiriya Rock Fortress</Text>
                <Text className="text-gray-600 text-sm mb-2">Ancient rock citadel & frescoes</Text>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Ionicons name="star" size={14} color="#F59E0B" />
                    <Text className="text-gray-700 text-sm ml-1 font-medium">4.8</Text>
                  </View>
                  <View className="bg-orange-100 px-3 py-1 rounded-full">
                    <Text className="text-orange-700 text-xs font-bold">Must Visit</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mr-3">
              <View className="bg-green-500 h-32 items-center justify-center">
                <Text className="text-6xl">🚂</Text>
              </View>
              <View className="p-4">
                <Text className="text-gray-800 font-bold mb-1">Ella Train Journey</Text>
                <Text className="text-gray-600 text-sm mb-2">Scenic hill country railway</Text>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Ionicons name="star" size={14} color="#F59E0B" />
                    <Text className="text-gray-700 text-sm ml-1 font-medium">4.9</Text>
                  </View>
                  <View className="bg-green-100 px-3 py-1 rounded-full">
                    <Text className="text-green-700 text-xs font-bold">Scenic</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mr-3">
              <View className="bg-blue-500 h-32 items-center justify-center">
                <Text className="text-6xl">🏖️</Text>
              </View>
              <View className="p-4">
                <Text className="text-gray-800 font-bold mb-1">Galle Fort</Text>
                <Text className="text-gray-600 text-sm mb-2">Historic Dutch colonial fort</Text>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Ionicons name="star" size={14} color="#F59E0B" />
                    <Text className="text-gray-700 text-sm ml-1 font-medium">4.7</Text>
                  </View>
                  <View className="bg-blue-100 px-3 py-1 rounded-full">
                    <Text className="text-blue-700 text-xs font-bold">Historic</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Recent Activity */}
        <View className="px-4 mb-6">
          <Text className="text-gray-800 text-lg font-bold mb-4">Recent Activity</Text>
          <View className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
            <View className="flex-row items-center mb-4">
              <View className="w-10 h-10 bg-orange-500 rounded-xl items-center justify-center mr-3">
                <Ionicons name="camera-outline" size={20} color="white" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 font-semibold">Added 5 photos to Kandy trip</Text>
                <Text className="text-gray-600 text-sm">2 hours ago</Text>
              </View>
            </View>
            <View className="flex-row items-center mb-4">
              <View className="w-10 h-10 bg-green-500 rounded-xl items-center justify-center mr-3">
                <Ionicons name="checkmark-circle-outline" size={20} color="white" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 font-semibold">Completed packing checklist</Text>
                <Text className="text-gray-600 text-sm">1 day ago</Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-purple-500 rounded-xl items-center justify-center mr-3">
                <Ionicons name="receipt-outline" size={20} color="white" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 font-semibold">Logged expense: Hotel booking</Text>
                <Text className="text-gray-600 text-sm">2 days ago</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Sri Lankan Cultural Footer */}
        <View className="items-center mb-8">
          <View className="flex-row items-center space-x-2 mb-2">
            <Text className="text-lg">🌺</Text>
            <Text className="text-xs text-gray-600">Ayubowan</Text>
            <Text className="text-lg">🐘</Text>
            <Text className="text-xs text-gray-600">Welcome</Text>
            <Text className="text-lg">🥥</Text>
          </View>
          <Text className="text-xs text-gray-500 text-center px-8 leading-4">
            Explore ancient temples, pristine beaches, and lush tea gardens.{"\n"}
            Your Sri Lankan adventure awaits! 🇱🇰
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Dashboard