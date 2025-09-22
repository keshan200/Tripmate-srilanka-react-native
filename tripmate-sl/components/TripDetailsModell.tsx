import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  StyleSheet,
  Dimensions
} from "react-native"
import React, { useState, useEffect } from "react"
import { Ionicons } from '@expo/vector-icons'

const { height: screenHeight } = Dimensions.get('window')

// Trip interface
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

interface TripModalProps {
  visible: boolean
  trip: Trip | null
  onClose: () => void
  onSave: (trip: Trip) => void
  initialEditMode?: boolean
}

const TripModal: React.FC<TripModalProps> = ({
  visible,
  trip,
  onClose,
  onSave,
  initialEditMode = false
}) => {
  const [editMode, setEditMode] = useState(initialEditMode)
  const [editedTrip, setEditedTrip] = useState<Trip | null>(null)

  useEffect(() => {
    if (trip) {
      setEditedTrip({ ...trip })
      setEditMode(initialEditMode)
    }
  }, [trip, initialEditMode])

  if (!trip) return null

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

  const handleSave = () => {
    if (editedTrip) {
      onSave(editedTrip)
      setEditMode(false)
    }
  }

  const handleCancel = () => {
    if (trip) {
      setEditedTrip({ ...trip })
      setEditMode(false)
    }
  }

  const handleClose = () => {
    handleCancel()
    onClose()
  }

  const enterEditMode = () => {
    setEditMode(true)
  }

  const status = getTripStatus(trip)
  const progress = getTripProgress(trip)
  const dayInfo = getDayInfo(trip)

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
      presentationStyle="overFullScreen" // Add this for better mobile support
    >
      {/* Use StyleSheet instead of className for modal container */}
      <View style={styles.modalContainer}>
        {/* Backdrop */}
        <TouchableOpacity 
          style={styles.backdrop}
          activeOpacity={1}
          onPress={handleClose}
        />
        
        {/* Modal Content */}
        <View style={styles.modalContent}>
          {/* Modal Header */}
          <View className="flex-row items-center justify-between p-6 border-b border-gray-100">
            <Text className="text-xl font-bold text-gray-800">
              {editMode ? 'Edit Trip' : 'Trip Details'}
            </Text>
            <View className="flex-row space-x-3">
              {!editMode && (
                <TouchableOpacity
                  onPress={enterEditMode}
                  className="w-10 h-10 bg-orange-500 rounded-full items-center justify-center"
                >
                  <Ionicons name="pencil" size={18} color="white" />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={handleClose}
                className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center"
              >
                <Ionicons name="close" size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView 
            className="flex-1" 
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
          >
            {/* Trip Image Placeholder */}
            <View className="h-48 bg-gradient-to-r from-orange-400 to-orange-600 items-center justify-center">
              <Ionicons name="camera-outline" size={48} color="white" />
              <Text className="text-white mt-2 font-medium">Add Trip Photo</Text>
            </View>

            <View className="p-6">
              {/* Trip Title */}
              <View className="mb-6">
                <Text className="text-gray-700 text-sm font-medium mb-2">Trip Title</Text>
                {editMode ? (
                  <TextInput
                    value={editedTrip?.title}
                    onChangeText={(text) => setEditedTrip(prev => prev ? {...prev, title: text} : null)}
                    className="bg-gray-50 rounded-xl p-4 text-gray-800 font-semibold text-lg border border-gray-200"
                    placeholder="Enter trip title"
                  />
                ) : (
                  <Text className="text-gray-800 text-2xl font-bold">{trip.title}</Text>
                )}
              </View>

              {/* Status Badge */}
              <View className="mb-6">
                <View className={`self-start px-4 py-2 rounded-full ${
                  status === 'completed' ? 'bg-green-100' :
                  status === 'ongoing' ? 'bg-blue-100' : 'bg-purple-100'
                }`}>
                  <Text className={`font-semibold text-sm ${
                    status === 'completed' ? 'text-green-800' :
                    status === 'ongoing' ? 'text-blue-800' : 'text-purple-800'
                  }`}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </Text>
                </View>
              </View>

              {/* Dates */}
              <View className="mb-6">
                <Text className="text-gray-700 text-sm font-medium mb-3">Duration</Text>
                <View className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <View className="flex-row items-center justify-between">
                    <View>
                      <Text className="text-gray-600 text-xs">Start Date</Text>
                      <Text className="text-gray-800 font-semibold">{formatDate(trip.startDate)}</Text>
                    </View>
                    <Ionicons name="arrow-forward" size={16} color="#6B7280" />
                    <View>
                      <Text className="text-gray-600 text-xs">End Date</Text>
                      <Text className="text-gray-800 font-semibold">{formatDate(trip.endDate)}</Text>
                    </View>
                  </View>
                  <View className="mt-3 pt-3 border-t border-gray-200">
                    <Text className="text-orange-600 font-semibold text-center">
                      {calculateDuration(trip.startDate, trip.endDate)} Days
                    </Text>
                  </View>
                </View>
              </View>

              {/* Destinations */}
              <View className="mb-6">
                <Text className="text-gray-700 text-sm font-medium mb-3">Destinations</Text>
                {editMode ? (
                  <TextInput
                    value={editedTrip?.destinations.join(', ')}
                    onChangeText={(text) => setEditedTrip(prev => prev ? {...prev, destinations: text.split(', ').filter(d => d.trim())} : null)}
                    className="bg-gray-50 rounded-xl p-4 text-gray-800 border border-gray-200"
                    placeholder="Enter destinations separated by commas"
                    multiline
                  />
                ) : (
                  <View className="flex-row flex-wrap">
                    {trip.destinations.map((destination, index) => (
                      <View key={index} className="bg-orange-100 rounded-full px-3 py-1 mr-2 mb-2">
                        <Text className="text-orange-800 text-sm font-medium">{destination}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>

              {/* Budget */}
              <View className="mb-6">
                <Text className="text-gray-700 text-sm font-medium mb-2">Total Budget</Text>
                {editMode ? (
                  <TextInput
                    value={editedTrip?.totalBudget?.toString()}
                    onChangeText={(text) => setEditedTrip(prev => prev ? {...prev, totalBudget: parseInt(text) || 0} : null)}
                    className="bg-gray-50 rounded-xl p-4 text-gray-800 font-semibold border border-gray-200"
                    placeholder="Enter budget amount"
                    keyboardType="numeric"
                  />
                ) : (
                  <View className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <Text className="text-gray-800 text-xl font-bold">
                      ₨{trip.totalBudget?.toLocaleString() || "N/A"}
                    </Text>
                    <Text className="text-gray-600 text-sm">Sri Lankan Rupees</Text>
                  </View>
                )}
              </View>

              {/* Progress Section for Ongoing Trips */}
              {status === 'ongoing' && !editMode && (
                <View className="mb-6">
                  <Text className="text-gray-700 text-sm font-medium mb-3">Trip Progress</Text>
                  <View className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <View className="flex-row justify-between items-center mb-3">
                      <Text className="text-blue-800 font-semibold">
                        Day {dayInfo.currentDay} of {dayInfo.totalDays}
                      </Text>
                      <Text className="text-blue-600 text-sm">{progress}% Complete</Text>
                    </View>
                    <View className="bg-blue-200 h-3 rounded-full overflow-hidden">
                      <View 
                        className="bg-blue-500 h-full rounded-full" 
                        style={{ width: `${progress}%` }} 
                      />
                    </View>
                  </View>
                </View>
              )}

              {/* Additional Information */}
              <View className="mb-6">
                <Text className="text-gray-700 text-sm font-medium mb-3">Additional Information</Text>
                <View className="bg-gray-50 rounded-xl p-4 space-y-3 border border-gray-200">
                  <View className="flex-row items-center">
                    <Ionicons name="calendar-outline" size={16} color="#6B7280" />
                    <Text className="text-gray-700 ml-2">Created {formatDate(trip.createdAt)}</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons name="person-outline" size={16} color="#6B7280" />
                    <Text className="text-gray-700 ml-2">Trip ID: {trip.id}</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons name="people-outline" size={16} color="#6B7280" />
                    <Text className="text-gray-700 ml-2">2 travelers</Text>
                  </View>
                </View>
              </View>

              {/* Trip Statistics */}
              {!editMode && (
                <View className="mb-6">
                  <Text className="text-gray-700 text-sm font-medium mb-3">Trip Statistics</Text>
                  <View className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <View className="flex-row justify-between items-center mb-2">
                      <Text className="text-gray-600 text-sm">Average per day</Text>
                      <Text className="text-gray-800 font-semibold">
                        ₨{trip.totalBudget ? Math.round(trip.totalBudget / calculateDuration(trip.startDate, trip.endDate)).toLocaleString() : "N/A"}
                      </Text>
                    </View>
                    <View className="flex-row justify-between items-center">
                      <Text className="text-gray-600 text-sm">Destinations count</Text>
                      <Text className="text-gray-800 font-semibold">{trip.destinations.length}</Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </ScrollView>

          {/* Action Buttons */}
          {editMode && (
            <View className="p-6 border-t border-gray-100">
              <View className="flex-row space-x-3">
                <TouchableOpacity
                  onPress={handleCancel}
                  className="flex-1 bg-gray-100 rounded-xl p-4 items-center"
                >
                  <Text className="text-gray-700 font-semibold">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSave}
                  className="flex-1 bg-orange-500 rounded-xl p-4 items-center"
                >
                  <Text className="text-white font-semibold">Save Changes</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backdrop: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: screenHeight * 0.9, // 90% of screen height
    minHeight: screenHeight * 0.5,  // Minimum 50% of screen height
  },
  scrollView: {
    flex: 1,
  },
})

export default TripModal