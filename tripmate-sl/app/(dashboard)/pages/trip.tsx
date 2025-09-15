import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform
} from "react-native"
import React from "react"
import { Ionicons } from '@expo/vector-icons'

const NewTrip = () => {
  const tripTemplates = [
    { 
      id: "cultural", 
      name: "Cultural Heritage", 
      emoji: "🏛️", 
      duration: "5-7 days",
      destinations: ["Anuradhapura", "Polonnaruwa", "Sigiriya", "Dambulla"]
    },
    { 
      id: "adventure", 
      name: "Hill Country Adventure", 
      emoji: "🏔️", 
      duration: "4-6 days",
      destinations: ["Kandy", "Ella", "Nuwara Eliya", "Horton Plains"]
    },
    { 
      id: "beach", 
      name: "Coastal Paradise", 
      emoji: "🏖️", 
      duration: "3-5 days",
      destinations: ["Galle", "Mirissa", "Unawatuna", "Hikkaduwa"]
    },
    { 
      id: "wildlife", 
      name: "Wildlife Safari", 
      emoji: "🐘", 
      duration: "4-5 days",
      destinations: ["Yala", "Udawalawe", "Minneriya", "Wilpattu"]
    },
    { 
      id: "custom", 
      name: "Custom Trip", 
      emoji: "✨", 
      duration: "Your choice",
      destinations: []
    }
  ]

  const popularDestinations = [
    { name: "Sigiriya", emoji: "🏰", region: "Cultural Triangle" },
    { name: "Ella", emoji: "🚂", region: "Hill Country" },
    { name: "Galle Fort", emoji: "🏰", region: "Southern Coast" },
    { name: "Kandy", emoji: "🌸", region: "Central Province" },
    { name: "Nuwara Eliya", emoji: "🍃", region: "Hill Country" },
    { name: "Yala National Park", emoji: "🐘", region: "Southern Province" },
    { name: "Anuradhapura", emoji: "🏛️", region: "Cultural Triangle" },
    { name: "Mirissa", emoji: "🐋", region: "Southern Coast" },
    { name: "Polonnaruwa", emoji: "🏛️", region: "Cultural Triangle" },
    { name: "Dambulla", emoji: "🗿", region: "Central Province" }
  ]

  const tripIcons = ["🏝️", "🏛️", "🏔️", "🏖️", "🐘", "🚂", "🌸", "✨", "🗿", "🐋"]

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        {/* Header */}
        <View className="bg-white mx-4 mt-4 rounded-3xl p-4 shadow-lg border border-gray-100">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <TouchableOpacity className="w-10 h-10 bg-orange-50 rounded-xl items-center justify-center mr-3">
                <Ionicons name="arrow-back" size={20} color="#EA580C" />
              </TouchableOpacity>
              <View>
                <Text className="text-gray-800 text-xl font-bold">Plan New Trip</Text>
                <Text className="text-orange-600 text-sm">Create your Sri Lankan adventure</Text>
              </View>
            </View>
            <View className="w-12 h-12 bg-orange-500 rounded-2xl items-center justify-center">
              <Text className="text-xl">✈️</Text>
            </View>
          </View>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Trip Templates */}
          <View className="px-4 py-6">
            <Text className="text-gray-800 text-lg font-bold mb-4">Choose Your Adventure</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-3">
              {tripTemplates.map((template, index) => (
                <TouchableOpacity
                  key={template.id}
                  className={`min-w-[280px] rounded-3xl shadow-lg border overflow-hidden mr-3 ${
                    index === 0 ? 'border-orange-300' : 'border-gray-100'
                  }`}
                >
                  <View className="bg-orange-500 p-5">
                    <View className="flex-row items-center justify-between mb-3">
                      <Text className="text-5xl">{template.emoji}</Text>
                      {index === 0 && (
                        <View className="bg-white/30 p-2 rounded-full">
                          <Ionicons name="checkmark-circle" size={20} color="white" />
                        </View>
                      )}
                    </View>
                    <Text className="text-white text-xl font-bold mb-1">{template.name}</Text>
                    <Text className="text-white/90 text-sm mb-3">{template.duration}</Text>
                  </View>
                  <View className="bg-white p-4">
                    {template.destinations.length > 0 ? (
                      <View>
                        <Text className="text-gray-700 text-sm font-semibold mb-2">Includes:</Text>
                        <Text className="text-gray-600 text-xs">
                          {template.destinations.join(" • ")}
                        </Text>
                      </View>
                    ) : (
                      <Text className="text-gray-600 text-xs">
                        Build your own unique Sri Lankan experience
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Trip Details Form */}
          <View className="bg-white mx-4 rounded-3xl p-6 shadow-lg border border-gray-100 mb-6">
            
            {/* Trip Name & Icon */}
            <View className="mb-6">
              <Text className="text-gray-800 text-sm font-bold mb-3">Trip Name & Icon</Text>
              <View className="flex-row items-center space-x-3 mb-3">
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-1">
                  <View className="flex-row space-x-2">
                    {tripIcons.map((icon, index) => (
                      <TouchableOpacity
                        key={icon}
                        className={`w-12 h-12 rounded-xl items-center justify-center border-2 ${
                          index === 0 
                            ? 'bg-orange-500 border-orange-500' 
                            : 'bg-white border-orange-200'
                        }`}
                      >
                        <Text className="text-xl">{icon}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
              <TextInput
                placeholder="My Amazing Sri Lankan Adventure"
                className="bg-gray-50 border-2 border-orange-200 rounded-2xl px-4 py-4 text-gray-900"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            {/* Date Selection */}
            <View className="mb-6">
              <Text className="text-gray-800 text-sm font-bold mb-3">Travel Dates</Text>
              <View className="flex-row space-x-3">
                <TouchableOpacity className="flex-1 bg-gray-50 border-2 border-orange-200 rounded-2xl px-4 py-4">
                  <View className="flex-row items-center">
                    <Ionicons name="calendar-outline" size={20} color="#EA580C" />
                    <Text className="text-gray-500 ml-3">Start Date</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 bg-gray-50 border-2 border-orange-200 rounded-2xl px-4 py-4">
                  <View className="flex-row items-center">
                    <Ionicons name="calendar-outline" size={20} color="#EA580C" />
                    <Text className="text-gray-500 ml-3">End Date</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Budget */}
            <View className="mb-6">
              <Text className="text-gray-800 text-sm font-bold mb-3">Estimated Budget</Text>
              <View className="relative">
                <View className="absolute left-4 top-4 z-10">
                  <Text className="text-orange-600 font-bold text-lg">₨</Text>
                </View>
                <TextInput
                  placeholder="50,000"
                  className="bg-gray-50 border-2 border-orange-200 rounded-2xl pl-12 pr-4 py-4 text-gray-900"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                />
              </View>
              <Text className="text-gray-500 text-xs mt-2">This helps you track expenses during your trip</Text>
            </View>
          </View>

          {/* Destination Selection */}
          <View className="px-4 mb-6">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-gray-800 text-lg font-bold">Add Destinations</Text>
              <View className="bg-orange-100 px-3 py-1 rounded-full">
                <Text className="text-orange-600 text-sm font-semibold">2 selected</Text>
              </View>
            </View>
            
            <View className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <Text className="text-gray-700 text-sm font-semibold mb-4">Popular Destinations</Text>
              <View className="flex-row flex-wrap justify-between">
                {popularDestinations.map((destination, index) => (
                  <TouchableOpacity
                    key={destination.name}
                    className={`w-[48%] mb-3 p-4 rounded-2xl border-2 ${
                      index < 2
                        ? 'bg-orange-500 border-orange-300' 
                        : 'bg-gray-50 border-orange-100'
                    }`}
                  >
                    <View className="items-center">
                      <Text className="text-2xl mb-2">{destination.emoji}</Text>
                      <Text className={`font-bold text-center text-sm ${
                        index < 2 ? 'text-white' : 'text-gray-800'
                      }`}>
                        {destination.name}
                      </Text>
                      <Text className={`text-xs text-center mt-1 ${
                        index < 2 ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {destination.region}
                      </Text>
                      {index < 2 && (
                        <View className="mt-2">
                          <Ionicons name="checkmark-circle" size={16} color="white" />
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
              
              <TouchableOpacity className="mt-4 p-3 bg-orange-50 rounded-xl border border-orange-100">
                <View className="flex-row items-center justify-center">
                  <Ionicons name="add-circle-outline" size={20} color="#EA580C" />
                  <Text className="text-orange-600 font-semibold ml-2">Add Custom Destination</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Trip Notes */}
          <View className="px-4 mb-6">
            <View className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <Text className="text-gray-800 text-sm font-bold mb-3">Trip Notes (Optional)</Text>
              <TextInput
                placeholder="Special requests, preferences, or things to remember..."
                className="bg-gray-50 border-2 border-orange-200 rounded-2xl px-4 py-4 text-gray-900"
                placeholderTextColor="#9CA3AF"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>

          {/* Trip Summary */}
          <View className="px-4 mb-6">
            <View className="bg-orange-50 rounded-3xl p-6 border border-orange-200">
              <View className="flex-row items-center mb-4">
                <Text className="text-2xl mr-3">🏝️</Text>
                <View>
                  <Text className="text-gray-800 text-lg font-bold">Trip Summary</Text>
                  <Text className="text-gray-600 text-sm">Your adventure preview</Text>
                </View>
              </View>
              
              <View className="mb-3">
                <Text className="text-gray-700 font-semibold">
                  📝 My Amazing Sri Lankan Adventure
                </Text>
              </View>
              
              <View className="mb-3">
                <Text className="text-gray-700 font-semibold mb-1">
                  📍 Destinations (2):
                </Text>
                <Text className="text-gray-600 text-sm">
                  Sigiriya → Ella
                </Text>
              </View>
              
              <View>
                <Text className="text-gray-700 font-semibold">
                  💰 Budget: ₨50,000
                </Text>
              </View>
            </View>
          </View>

          {/* Bottom Padding */}
          <View className="h-6" />
        </ScrollView>

        {/* Bottom Action Buttons */}
        <View className="bg-white border-t border-gray-100 p-4">
          <View className="flex-row space-x-3">
            <TouchableOpacity className="flex-1 bg-gray-100 py-4 rounded-2xl">
              <Text className="text-center text-gray-700 font-bold">Save as Draft</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-orange-500 py-4 rounded-2xl shadow-lg">
              <Text className="text-center text-white font-bold">Create Trip ✈️</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default NewTrip