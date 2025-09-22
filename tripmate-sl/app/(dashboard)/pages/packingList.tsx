import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TextInput
} from "react-native"
import React from "react"
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router"

const TripList = () => {
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
            <TouchableOpacity className="w-10 h-10 bg-gray-50 rounded-xl items-center justify-center border border-gray-200">
              <Ionicons name="arrow-back" size={20} color="#EA580C" />
            </TouchableOpacity>
            <View className="items-center">
              <Text className="text-gray-800 text-xl font-bold">My Trips</Text>
              <Text className="text-orange-600 text-sm font-semibold">Sri Lanka Adventures</Text>
            </View>
            <TouchableOpacity className="w-10 h-10 bg-gray-50 rounded-xl items-center justify-center border border-gray-200">
              <Ionicons name="filter-outline" size={20} color="#EA580C" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Trip Stats */}
        <View className="px-4 py-4">
          <View className="bg-white rounded-2xl p-5 shadow-lg border border-orange-100">
            <Text className="text-gray-800 text-lg font-bold mb-3">Trip Overview</Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-2xl font-bold text-orange-600">12</Text>
                <Text className="text-gray-600 text-sm">Total Trips</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-green-600">8</Text>
                <Text className="text-gray-600 text-sm">Completed</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-blue-600">2</Text>
                <Text className="text-gray-600 text-sm">Ongoing</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-purple-600">2</Text>
                <Text className="text-gray-600 text-sm">Planned</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Search Bar */}
        <View className="px-4 mb-4">
          <View className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
            <View className="flex-row items-center space-x-3">
              <View className="flex-1 flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                <Ionicons name="search-outline" size={20} color="#9CA3AF" />
                <TextInput
                  placeholder="Search trips..."
                  className="flex-1 ml-3 text-gray-800"
                  editable={false}
                />
              </View>
              <TouchableOpacity className="bg-orange-500 w-12 h-12 rounded-xl items-center justify-center shadow-lg">
                <Ionicons name="options-outline" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Filter Tabs */}
        <View className="px-4 mb-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            <TouchableOpacity className="mr-3 px-4 py-2 rounded-xl bg-orange-500 shadow-lg">
              <Text className="font-semibold text-white">All Trips</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mr-3 px-4 py-2 rounded-xl bg-white border border-gray-200">
              <Text className="font-semibold text-gray-600">Ongoing</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mr-3 px-4 py-2 rounded-xl bg-white border border-gray-200">
              <Text className="font-semibold text-gray-600">Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mr-3 px-4 py-2 rounded-xl bg-white border border-gray-200">
              <Text className="font-semibold text-gray-600">Planned</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2 rounded-xl bg-white border border-gray-200">
              <Text className="font-semibold text-gray-600">Favorites</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

           

        {/* Add New Trip Button */}
        <View className="px-4 mb-6">
          <TouchableOpacity className="bg-orange-500 rounded-2xl p-4 shadow-xl flex-row items-center">
            <View className="w-12 h-12 bg-orange-100 rounded-xl items-center justify-center mr-4">
              <Ionicons name="add-circle" size={24} color="#EA580C" />
            </View>
            <View className="flex-1">
              <Text className="text-white text-lg font-bold">Plan New Adventure</Text>
              <Text className="text-orange-100 text-sm">Discover amazing places in Sri Lanka</Text>
            </View>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Trip Cards */}
        <View className="px-4 mb-6">
          <Text className="text-gray-800 text-lg font-bold mb-4">Recent Trips</Text>
          
          {/* Ongoing Trip 1 */}
          <TouchableOpacity className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-4">
            <View className="bg-blue-500 h-24 items-end justify-end p-4">
              <View className="bg-green-500 px-3 py-1 rounded-full">
                <Text className="text-white text-xs font-bold">Ongoing</Text>
              </View>
            </View>
            <View className="p-5">
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-gray-800 text-xl font-bold">Cultural Heritage Tour</Text>
                <TouchableOpacity>
                  <Ionicons name="heart-outline" size={20} color="#EA580C" />
                </TouchableOpacity>
              </View>
              <Text className="text-gray-600 text-sm mb-3">Dec 15, 2024 - Dec 22, 2024 • 8 days</Text>
              
              <View className="flex-row items-center mb-3">
                <Ionicons name="location-outline" size={16} color="#9CA3AF" />
                <Text className="text-gray-700 text-sm ml-1">Kandy • Sigiriya • Polonnaruwa • Anuradhapura</Text>
              </View>
              
              <View className="flex-row items-center justify-between mb-4">
                <View className="flex-row items-center">
                  <Ionicons name="cash-outline" size={16} color="#9CA3AF" />
                  <Text className="text-gray-700 text-sm ml-1">₨75,000</Text>
                </View>
                <View className="flex-row items-center">
                  <Ionicons name="people-outline" size={16} color="#9CA3AF" />
                  <Text className="text-gray-700 text-sm ml-1">2 travelers</Text>
                </View>
              </View>
              
              <View className="bg-blue-50 rounded-xl p-3">
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-blue-800 text-sm font-medium">Day 4 of 8</Text>
                  <Text className="text-blue-600 text-xs">50% Complete</Text>
                </View>
                <View className="bg-blue-200 h-2 rounded-full overflow-hidden">
                  <View className="bg-blue-500 h-full w-1/2" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* Planned Trip */}
          <TouchableOpacity className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-4">
            <View className="bg-purple-500 h-24 items-end justify-end p-4">
              <View className="bg-purple-200 px-3 py-1 rounded-full">
                <Text className="text-purple-800 text-xs font-bold">Planned</Text>
              </View>
            </View>
            <View className="p-5">
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-gray-800 text-xl font-bold">Beach & Wildlife Safari</Text>
                <TouchableOpacity>
                  <Ionicons name="heart" size={20} color="#EA580C" />
                </TouchableOpacity>
              </View>
              <Text className="text-gray-600 text-sm mb-3">Jan 10, 2025 - Jan 18, 2025 • 9 days</Text>
              
              <View className="flex-row items-center mb-3">
                <Ionicons name="location-outline" size={16} color="#9CA3AF" />
                <Text className="text-gray-700 text-sm ml-1">Yala • Mirissa • Galle • Bentota</Text>
              </View>
              
              <View className="flex-row items-center justify-between mb-4">
                <View className="flex-row items-center">
                  <Ionicons name="cash-outline" size={16} color="#9CA3AF" />
                  <Text className="text-gray-700 text-sm ml-1">₨95,000</Text>
                </View>
                <View className="flex-row items-center">
                  <Ionicons name="people-outline" size={16} color="#9CA3AF" />
                  <Text className="text-gray-700 text-sm ml-1">4 travelers</Text>
                </View>
              </View>
              
              <View className="bg-purple-50 rounded-xl p-3">
                <Text className="text-purple-800 text-sm font-medium mb-1">Planning Phase</Text>
                <Text className="text-purple-600 text-xs">Starts in 19 days</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Completed Trip */}
          <TouchableOpacity className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-4">
            <View className="bg-green-500 h-24 items-end justify-end p-4">
              <View className="bg-green-200 px-3 py-1 rounded-full">
                <Text className="text-green-800 text-xs font-bold">Completed</Text>
              </View>
            </View>
            <View className="p-5">
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-gray-800 text-xl font-bold">Hill Country Adventure</Text>
                <TouchableOpacity>
                  <Ionicons name="heart" size={20} color="#EA580C" />
                </TouchableOpacity>
              </View>
              <Text className="text-gray-600 text-sm mb-3">Nov 5, 2024 - Nov 12, 2024 • 8 days</Text>
              
              <View className="flex-row items-center mb-3">
                <Ionicons name="location-outline" size={16} color="#9CA3AF" />
                <Text className="text-gray-700 text-sm ml-1">Nuwara Eliya • Ella • Badulla • Haputale</Text>
              </View>
              
              <View className="flex-row items-center justify-between mb-4">
                <View className="flex-row items-center">
                  <Ionicons name="cash-outline" size={16} color="#9CA3AF" />
                  <Text className="text-gray-700 text-sm ml-1">₨68,500</Text>
                </View>
                <View className="flex-row items-center">
                  <Ionicons name="people-outline" size={16} color="#9CA3AF" />
                  <Text className="text-gray-700 text-sm ml-1">3 travelers</Text>
                </View>
              </View>
              
              <View className="bg-green-50 rounded-xl p-3 flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Ionicons name="star" size={16} color="#F59E0B" />
                  <Text className="text-green-800 text-sm font-medium ml-1">Trip completed successfully!</Text>
                </View>
                <Text className="text-green-600 text-xs">View memories</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Ongoing Trip 2 */}
          <TouchableOpacity className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-4">
            <View className="bg-orange-500 h-24 items-end justify-end p-4">
              <View className="bg-green-500 px-3 py-1 rounded-full">
                <Text className="text-white text-xs font-bold">Ongoing</Text>
              </View>
            </View>
            <View className="p-5">
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-gray-800 text-xl font-bold">Weekend Getaway</Text>
                <TouchableOpacity>
                  <Ionicons name="heart-outline" size={20} color="#EA580C" />
                </TouchableOpacity>
              </View>
              <Text className="text-gray-600 text-sm mb-3">Dec 20, 2024 - Dec 22, 2024 • 3 days</Text>
              
              <View className="flex-row items-center mb-3">
                <Ionicons name="location-outline" size={16} color="#9CA3AF" />
                <Text className="text-gray-700 text-sm ml-1">Negombo • Colombo</Text>
              </View>
              
              <View className="flex-row items-center justify-between mb-4">
                <View className="flex-row items-center">
                  <Ionicons name="cash-outline" size={16} color="#9CA3AF" />
                  <Text className="text-gray-700 text-sm ml-1">₨25,000</Text>
                </View>
                <View className="flex-row items-center">
                  <Ionicons name="people-outline" size={16} color="#9CA3AF" />
                  <Text className="text-gray-700 text-sm ml-1">2 travelers</Text>
                </View>
              </View>
              
              <View className="bg-orange-50 rounded-xl p-3">
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-orange-800 text-sm font-medium">Day 1 of 3</Text>
                  <Text className="text-orange-600 text-xs">33% Complete</Text>
                </View>
                <View className="bg-orange-200 h-2 rounded-full overflow-hidden">
                  <View className="bg-orange-500 h-full w-1/3" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* Completed Trip 2 */}
          <TouchableOpacity className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-4">
            <View className="bg-teal-500 h-24 items-end justify-end p-4">
              <View className="bg-green-200 px-3 py-1 rounded-full">
                <Text className="text-green-800 text-xs font-bold">Completed</Text>
              </View>
            </View>
            <View className="p-5">
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-gray-800 text-xl font-bold">Ancient Kingdoms Tour</Text>
                <TouchableOpacity>
                  <Ionicons name="heart" size={20} color="#EA580C" />
                </TouchableOpacity>
              </View>
              <Text className="text-gray-600 text-sm mb-3">Oct 15, 2024 - Oct 25, 2024 • 11 days</Text>
              
              <View className="flex-row items-center mb-3">
                <Ionicons name="location-outline" size={16} color="#9CA3AF" />
                <Text className="text-gray-700 text-sm ml-1">Anuradhapura • Polonnaruwa • Dambulla • Sigiriya</Text>
              </View>
              
              <View className="flex-row items-center justify-between mb-4">
                <View className="flex-row items-center">
                  <Ionicons name="cash-outline" size={16} color="#9CA3AF" />
                  <Text className="text-gray-700 text-sm ml-1">₨125,000</Text>
                </View>
                <View className="flex-row items-center">
                  <Ionicons name="people-outline" size={16} color="#9CA3AF" />
                  <Text className="text-gray-700 text-sm ml-1">6 travelers</Text>
                </View>
              </View>
              
              <View className="bg-teal-50 rounded-xl p-3 flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View className="flex-row">
                    <Ionicons name="star" size={14} color="#F59E0B" />
                    <Ionicons name="star" size={14} color="#F59E0B" />
                    <Ionicons name="star" size={14} color="#F59E0B" />
                    <Ionicons name="star" size={14} color="#F59E0B" />
                    <Ionicons name="star" size={14} color="#F59E0B" />
                  </View>
                  <Text className="text-teal-800 text-sm font-medium ml-2">Amazing trip!</Text>
                </View>
                <Text className="text-teal-600 text-xs">View photos</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Load More */}
        <View className="px-4 mb-6">
          <TouchableOpacity className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 items-center">
            <Text className="text-gray-600 font-semibold">Load More Trips</Text>
            <Text className="text-gray-500 text-sm mt-1">Showing 6 of 12 trips</Text>
          </TouchableOpacity>
        </View>

        {/* Cultural Footer */}
        <View className="items-center mb-8">
          <View className="flex-row items-center space-x-2 mb-2">
            <Text className="text-lg">🗺️</Text>
            <Text className="text-xs text-gray-600">Explore</Text>
            <Text className="text-lg">🌅</Text>
            <Text className="text-xs text-gray-600">Adventure</Text>
            <Text className="text-lg">📸</Text>
          </View>
          <Text className="text-xs text-gray-500 text-center px-8 leading-4">
            Every journey tells a story.{"\n"}
            Create unforgettable memories in Sri Lanka! 🇱🇰
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TripList