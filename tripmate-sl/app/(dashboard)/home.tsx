import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar
} from "react-native"
import React, { useState } from "react"
import { Ionicons } from '@expo/vector-icons'

const Dashboard = () => {
  const [activeTrip, setActiveTrip] = useState("current")

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-emerald-50 via-orange-50 to-red-50">
      <StatusBar barStyle="dark-content" backgroundColor="#FEFCE8" />
      
      {/* Decorative Background Elements */}
      <View className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-orange-200 via-red-200 to-emerald-200 opacity-30" />
      <View className="absolute top-20 right-10 w-16 h-16 bg-orange-300 rounded-full opacity-30" />
      <View className="absolute top-40 left-8 w-12 h-12 bg-emerald-300 rounded-full opacity-40" />
      <View className="absolute top-60 right-20 w-8 h-8 bg-red-300 rounded-full opacity-50" />
      
      <ScrollView className="flex-1 relative z-10" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="bg-white/80 backdrop-blur-sm mx-4 mt-4 rounded-3xl p-4 shadow-xl border border-white/50">
          <View className="flex-row items-center justify-between mb-3">
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl items-center justify-center mr-3 transform rotate-3">
                <Text className="text-xl">🏝️</Text>
              </View>
              <View>
                <Text className="text-gray-800 text-xl font-bold">TripMate</Text>
                <Text className="text-orange-600 text-sm font-semibold">Sri Lanka</Text>
              </View>
            </View>
            <View className="flex-row items-center space-x-3">
              <TouchableOpacity className="w-10 h-10 bg-white/70 rounded-xl items-center justify-center shadow-sm">
                <Ionicons name="search-outline" size={20} color="#EA580C" />
              </TouchableOpacity>
              <TouchableOpacity className="w-10 h-10 bg-white/70 rounded-xl items-center justify-center shadow-sm">
                <Ionicons name="notifications-outline" size={20} color="#EA580C" />
              </TouchableOpacity>
              <TouchableOpacity className="w-10 h-10 bg-white/70 rounded-xl items-center justify-center shadow-sm">
                <Ionicons name="person-outline" size={20} color="#EA580C" />
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Offline Status */}
          <View className="flex-row items-center bg-emerald-100 px-3 py-2 rounded-xl">
            <View className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />
            <Text className="text-emerald-700 text-sm font-medium">📱 Offline Mode - All data stored locally</Text>
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
            <View className="flex-1 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-orange-100">
              <View className="flex-row items-center justify-between mb-2">
                <Ionicons name="map-outline" size={20} color="#EA580C" />
                <Text className="text-2xl">✈️</Text>
              </View>
              <Text className="text-gray-800 text-2xl font-bold">3</Text>
              <Text className="text-gray-600 text-sm">Active Trips</Text>
            </View>
            <View className="flex-1 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-orange-100">
              <View className="flex-row items-center justify-between mb-2">
                <Ionicons name="location-outline" size={20} color="#EA580C" />
                <Text className="text-2xl">🏛️</Text>
              </View>
              <Text className="text-gray-800 text-2xl font-bold">12</Text>
              <Text className="text-gray-600 text-sm">Destinations</Text>
            </View>
            <View className="flex-1 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-orange-100">
              <View className="flex-row items-center justify-between mb-2">
                <Ionicons name="cash-outline" size={20} color="#EA580C" />
                <Text className="text-2xl">💰</Text>
              </View>
              <Text className="text-gray-800 text-2xl font-bold">₹45k</Text>
              <Text className="text-gray-600 text-sm">Total Budget</Text>
            </View>
          </View>
        </View>

        {/* Current Trip */}
        <View className="px-4 mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-gray-800 text-lg font-bold">Current Adventure</Text>
            <TouchableOpacity className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full shadow-lg">
              <Text className="text-white text-sm font-semibold">View All</Text>
            </TouchableOpacity>
          </View>
          
          <View className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden">
            <View className="bg-gradient-to-r from-orange-400 via-red-400 to-emerald-400 p-5">
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-white text-xl font-bold mb-1 shadow-sm">Cultural Triangle Tour</Text>
                  <Text className="text-white/90 text-sm">Anuradhapura → Polonnaruwa → Sigiriya</Text>
                </View>
                <Text className="text-5xl">🏛️</Text>
              </View>
            </View>
            <View className="p-5">
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center">
                  <Ionicons name="calendar-outline" size={16} color="#EA580C" />
                  <Text className="text-gray-700 text-sm ml-2 font-medium">Dec 15-20, 2024</Text>
                </View>
                <View className="bg-emerald-100 px-3 py-1 rounded-full">
                  <Text className="text-emerald-700 text-xs font-bold">Day 2 of 6</Text>
                </View>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-gray-600 text-sm">Next: Polonnaruwa Ancient City</Text>
                <TouchableOpacity className="bg-orange-100 p-2 rounded-full">
                  <Ionicons name="arrow-forward" size={18} color="#EA580C" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="px-4 mb-6">
          <Text className="text-gray-800 text-lg font-bold mb-4">Quick Actions</Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity className="w-[48%] bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-orange-100 mb-3">
              <View className="items-center">
                <View className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl items-center justify-center mb-3 shadow-lg">
                  <Ionicons name="add-circle-outline" size={24} color="white" />
                </View>
                <Text className="text-gray-800 font-bold text-center">New Trip</Text>
                <Text className="text-gray-600 text-xs text-center mt-1">Plan your journey</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="w-[48%] bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-orange-100 mb-3">
              <View className="items-center">
                <View className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl items-center justify-center mb-3 shadow-lg">
                  <Ionicons name="compass-outline" size={24} color="white" />
                </View>
                <Text className="text-gray-800 font-bold text-center">Explore Places</Text>
                <Text className="text-gray-600 text-xs text-center mt-1">Discover destinations</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="w-[48%] bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-orange-100 mb-3">
              <View className="items-center">
                <View className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl items-center justify-center mb-3 shadow-lg">
                  <Ionicons name="checkmark-circle-outline" size={24} color="white" />
                </View>
                <Text className="text-gray-800 font-bold text-center">Packing List</Text>
                <Text className="text-gray-600 text-xs text-center mt-1">What to pack</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="w-[48%] bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-orange-100 mb-3">
              <View className="items-center">
                <View className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl items-center justify-center mb-3 shadow-lg">
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
            <TouchableOpacity className="w-64 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden mr-3">
              <View className="bg-gradient-to-br from-orange-400 to-red-500 h-32 items-center justify-center">
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

            <TouchableOpacity className="w-64 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden mr-3">
              <View className="bg-gradient-to-br from-emerald-400 to-teal-500 h-32 items-center justify-center">
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
                  <View className="bg-emerald-100 px-3 py-1 rounded-full">
                    <Text className="text-emerald-700 text-xs font-bold">Scenic</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="w-64 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden mr-3">
              <View className="bg-gradient-to-br from-blue-400 to-indigo-500 h-32 items-center justify-center">
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
          <View className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-5">
            <View className="flex-row items-center mb-4">
              <View className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl items-center justify-center mr-3">
                <Ionicons name="camera-outline" size={20} color="white" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 font-semibold">Added 5 photos to Kandy trip</Text>
                <Text className="text-gray-600 text-sm">2 hours ago</Text>
              </View>
            </View>
            <View className="flex-row items-center mb-4">
              <View className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl items-center justify-center mr-3">
                <Ionicons name="checkmark-circle-outline" size={20} color="white" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 font-semibold">Completed packing checklist</Text>
                <Text className="text-gray-600 text-sm">1 day ago</Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl items-center justify-center mr-3">
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