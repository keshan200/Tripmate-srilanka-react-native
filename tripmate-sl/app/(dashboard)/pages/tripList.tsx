import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TextInput,
  ActivityIndicator
} from "react-native"
import React, { useEffect, useState } from "react"
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router"
import { getAllTrip } from "@/services/tripService"

// Trip interface based on your provided type
interface Trip {
  id?: string
  uid: string
  title: string
  startDate: Date
  endDate: Date
  destinations: string[]
  totalBudget?: number
  createdAt: Date
}

const TripList = () => {
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

  const getCompletedTrips = () => trips.filter(trip => new Date(trip.endDate) < new Date()).length
  const getOngoingTrips = () => trips.filter(trip => 
    new Date(trip.startDate) <= new Date() && new Date(trip.endDate) >= new Date()
  ).length
  const getPlannedTrips = () => trips.filter(trip => new Date(trip.startDate) > new Date()).length

  const getTripStatus = (trip: Trip) => {
    const now = new Date()
    const start = new Date(trip.startDate)
    const end = new Date(trip.endDate)
    
    if (end < now) return "completed"
    if (start <= now && end >= now) return "ongoing"
    return "planned"
  }

  const getTripProgress = (trip: Trip) => {
    const now = new Date()
    const start = new Date(trip.startDate)
    const end = new Date(trip.endDate)
    const total = end.getTime() - start.getTime()
    const elapsed = now.getTime() - start.getTime()
    return Math.max(0, Math.min(100, Math.round((elapsed / total) * 100)))
  }

  const getDayInfo = (trip: Trip) => {
    const now = new Date()
    const start = new Date(trip.startDate)
    const end = new Date(trip.endDate)
    const totalDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
    const currentDay = Math.ceil((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
    return { currentDay: Math.max(1, currentDay), totalDays }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const calculateDuration = (startDate: Date, endDate: Date) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1
    return diffDays
  }

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
            <TouchableOpacity 
              onPress={() => router.back()}
              className="w-10 h-10 bg-gray-50 rounded-xl items-center justify-center border border-gray-200"
            >
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
                <Text className="text-2xl font-bold text-orange-600">{trips.length}</Text>
                <Text className="text-gray-600 text-sm">Total Trips</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-green-600">{getCompletedTrips()}</Text>
                <Text className="text-gray-600 text-sm">Completed</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-blue-600">{getOngoingTrips()}</Text>
                <Text className="text-gray-600 text-sm">Ongoing</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-purple-600">{getPlannedTrips()}</Text>
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
          <TouchableOpacity 
            onPress={() => router.push("/(dashboard)/pages/trip")}
            className="bg-orange-600 rounded-2xl p-4 shadow-xl flex-row items-center"
          >
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
          
          {loading ? (
            <View className="items-center py-8">
              <ActivityIndicator size="large" color="#EA580C" />
              <Text className="text-gray-600 mt-3">Loading trips...</Text>
            </View>
          ) : trips.length === 0 ? (
            <View className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 items-center">
              <Text className="text-6xl mb-4">🎒</Text>
              <Text className="text-gray-800 text-xl font-bold mb-2">No Trips Yet</Text>
              <Text className="text-gray-600 text-center mb-4">
                Start planning your Sri Lankan adventure!
              </Text>
              <TouchableOpacity 
                onPress={() => router.push("/(dashboard)/pages/trip")}
                className="bg-orange-500 px-6 py-3 rounded-xl"
              >
                <Text className="text-white font-semibold">Create Your First Trip</Text>
              </TouchableOpacity>
            </View>
          ) : (
            trips.map((trip, index) => {
              const status = getTripStatus(trip)
              const progress = getTripProgress(trip)
              const dayInfo = getDayInfo(trip)
              
              let headerColor = "bg-blue-500"
              let statusColor = "bg-green-500"
              let statusText = "text-white"
              let progressBgColor = "bg-blue-50"
              let progressTextColor = "text-blue-800"
              let progressBarColor = "bg-blue-500"
              
              if (status === "completed") {
                headerColor = index % 2 === 0 ? "bg-green-500" : "bg-teal-500"
                statusColor = "bg-green-200"
                statusText = "text-green-800"
                progressBgColor = index % 2 === 0 ? "bg-green-50" : "bg-teal-50"
                progressTextColor = index % 2 === 0 ? "text-green-800" : "text-teal-800"
              } else if (status === "planned") {
                headerColor = "bg-purple-500"
                statusColor = "bg-purple-200"
                statusText = "text-purple-800"
                progressBgColor = "bg-purple-50"
                progressTextColor = "text-purple-800"
              } else if (status === "ongoing") {
                headerColor = index % 2 === 0 ? "bg-blue-500" : "bg-orange-500"
                statusColor = "bg-green-500"
                statusText = "text-white"
                progressBgColor = index % 2 === 0 ? "bg-blue-50" : "bg-orange-50"
                progressTextColor = index % 2 === 0 ? "text-blue-800" : "text-orange-800"
                progressBarColor = index % 2 === 0 ? "bg-blue-500" : "bg-orange-500"
              }

              return (
                <TouchableOpacity 
                  key={trip.id} 
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-4"
                >
                  <View className={`${headerColor} h-24 items-end justify-end p-4`}>
                    <View className={`${statusColor} px-3 py-1 rounded-full`}>
                      <Text className={`${statusText} text-xs font-bold`}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </Text>
                    </View>
                  </View>
                  
                  <View className="p-5">
                    <View className="flex-row items-center justify-between mb-2">
                      <Text className="text-gray-800 text-xl font-bold">{trip.title}</Text>
                      <TouchableOpacity>
                        <Ionicons 
                          name={index % 3 === 0 ? "heart" : "heart-outline"} 
                          size={20} 
                          color="#EA580C" 
                        />
                      </TouchableOpacity>
                    </View>
                    
                    <Text className="text-gray-600 text-sm mb-3">
                      {formatDate(trip.startDate)} - {formatDate(trip.endDate)} • {calculateDuration(trip.startDate, trip.endDate)} days
                    </Text>
                    
                    <View className="flex-row items-center mb-3">
                      <Ionicons name="location-outline" size={16} color="#9CA3AF" />
                      <Text className="text-gray-700 text-sm ml-1" numberOfLines={1}>
                        {trip.destinations.join(" • ")}
                      </Text>
                    </View>
                    
                    <View className="flex-row items-center justify-between mb-4">
                      <View className="flex-row items-center">
                        <Ionicons name="cash-outline" size={16} color="#9CA3AF" />
                        <Text className="text-gray-700 text-sm ml-1">
                          ₨{trip.totalBudget?.toLocaleString() || "N/A"}
                        </Text>
                      </View>
                      <View className="flex-row items-center">
                        <Ionicons name="people-outline" size={16} color="#9CA3AF" />
                        <Text className="text-gray-700 text-sm ml-1">2 travelers</Text>
                      </View>
                    </View>
                    
                    {/* Status-specific bottom section */}
                    {status === "ongoing" && (
                      <View className={`${progressBgColor} rounded-xl p-3`}>
                        <View className="flex-row items-center justify-between mb-2">
                          <Text className={`${progressTextColor} text-sm font-medium`}>
                            Day {dayInfo.currentDay} of {dayInfo.totalDays}
                          </Text>
                          <Text className={`${progressTextColor.replace('800', '600')} text-xs`}>
                            {progress}% Complete
                          </Text>
                        </View>
                        <View className={`${progressBgColor.replace('50', '200')} h-2 rounded-full overflow-hidden`}>
                          <View 
                            className={`${progressBarColor} h-full`} 
                            style={{ width: `${progress}%` }} 
                          />
                        </View>
                      </View>
                    )}
                    
                    {status === "planned" && (
                      <View className={`${progressBgColor} rounded-xl p-3`}>
                        <Text className={`${progressTextColor} text-sm font-medium mb-1`}>Planning Phase</Text>
                        <Text className={`${progressTextColor.replace('800', '600')} text-xs`}>
                          Starts in {Math.ceil((new Date(trip.startDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                        </Text>
                      </View>
                    )}
                    
                    {status === "completed" && (
                      <View className={`${progressBgColor} rounded-xl p-3 flex-row items-center justify-between`}>
                        <View className="flex-row items-center">
                          <Ionicons name="star" size={16} color="#F59E0B" />
                          <Text className={`${progressTextColor} text-sm font-medium ml-2`}>
                            Trip completed successfully!
                          </Text>
                        </View>
                        <Text className={`${progressTextColor.replace('800', '600')} text-xs`}>
                          View memories
                        </Text>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              )
            })
          )}
        </View>

        {/* Load More */}
        {!loading && trips.length > 0 && (
          <View className="px-4 mb-6">
            <TouchableOpacity className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 items-center">
              <Text className="text-gray-600 font-semibold">Load More Trips</Text>
              <Text className="text-gray-500 text-sm mt-1">Showing {trips.length} of {trips.length} trips</Text>
            </TouchableOpacity>
          </View>
        )}

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
            Create unforgettable memories in Sri Lanka!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TripList