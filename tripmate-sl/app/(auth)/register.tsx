import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert
} from "react-native"
import React, { useState } from "react"
import { useRouter } from "expo-router"
import { Ionicons } from '@expo/vector-icons'
import { register } from "@/services/authService"

const Register = () => {
  const router = useRouter()
  
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false)

  const [isLodingReg, setIsLoadingReg] = useState<boolean>(false)

  const handleRegister = async () => {
 
    if (isLodingReg) return
    setIsLoadingReg(true)
    await register(email, password)
      .then((res) => {
        console.log(res)
        router.back()
      })
      .catch((err) => {
        console.error(err)
        Alert.alert("Registration fail", "Somthing went wrong")
    
      })
      .finally(() => {
        setIsLoadingReg(false)
      })
  }
  




  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScrollView 
        className="flex-1 bg-gradient-to-br from-emerald-50 via-orange-50 to-red-50"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Decorative Header Background */}
        <View className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-emerald-400 via-orange-400 to-red-400 opacity-20" />
        <View className="absolute top-16 left-10 w-20 h-20 bg-emerald-300 rounded-full opacity-30" />
        <View className="absolute top-32 right-8 w-14 h-14 bg-orange-300 rounded-full opacity-40" />
        <View className="absolute top-52 left-16 w-10 h-10 bg-red-300 rounded-full opacity-50" />
        <View className="absolute top-64 right-24 w-6 h-6 bg-emerald-400 rounded-full opacity-60" />

        <View className="flex-1 justify-center px-6 py-8 relative z-10">
          {/* Header Section */}
          <View className="items-center mb-8">
            <View className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-orange-500 rounded-2xl items-center justify-center mb-6 shadow-2xl transform -rotate-3">
              <View className="w-20 h-20 bg-white rounded-xl items-center justify-center">
                <Text className="text-2xl">🏝️</Text>
              </View>
            </View>
            <Text className="text-4xl font-bold text-gray-800 mb-3">
              Join TripMate
            </Text>
            <Text className="text-xl font-semibold text-emerald-600 mb-2">
              Sri Lanka Adventure
            </Text>
            <Text className="text-base text-gray-600 text-center px-4">
              Begin your journey through paradise
            </Text>
            <Text className="text-sm text-gray-500 text-center mt-1">
              Create your explorer account
            </Text>
          </View>

          {/* Register Form */}
          <View className="bg-white/80 backdrop-blur-sm rounded-3xl px-6 py-8 shadow-xl border border-white/50">
            {/* Email Input */}
            <View className="mb-6">
              <Text   
              
              className="text-sm font-semibold text-gray-700 mb-3 ml-1">
                Email Address
              </Text>
              <View className="relative">
                <View className="absolute left-4 top-4 z-10">
                  <Ionicons name="mail" size={20} color="#059669" />
                </View>
                <TextInput
                  placeholder="your.email@gmail.com"
                  className="bg-white border-2 border-emerald-200 rounded-2xl px-12 py-4 text-gray-900 shadow-sm focus:border-emerald-400"
                  placeholderTextColor="#9CA3AF"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                />
              </View>
            </View>

            {/* Password Input */}
            <View className="mb-6">
              <Text className="text-sm font-semibold text-gray-700 mb-3 ml-1">
                Password
              </Text>
              <View className="relative">
                <View className="absolute left-4 top-4 z-10">
                  <Ionicons name="lock-closed" size={20} color="#059669" />
                </View>
                <TextInput
                  placeholder="Create a strong password"
                  className="bg-white border-2 border-emerald-200 rounded-2xl px-12 py-4 pr-12 text-gray-900 shadow-sm focus:border-emerald-400"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  autoComplete="new-password"
                />
                <TouchableOpacity
                  className="absolute right-4 top-4"
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons 
                    name={showPassword ? "eye" : "eye-off"} 
                    size={20} 
                    color="#059669" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Terms & Conditions */}
            <View className="flex-row items-start mb-6">
              <TouchableOpacity 
                className="mt-1 mr-3"
                onPress={() => setAgreeTerms(!agreeTerms)}
              >
                <View className={`w-5 h-5 rounded border-2 items-center justify-center ${
                  agreeTerms 
                    ? 'bg-emerald-500 border-emerald-500' 
                    : 'bg-white border-emerald-300'
                }`}>
                  {agreeTerms && (
                    <Ionicons name="checkmark" size={12} color="white" />
                  )}
                </View>
              </TouchableOpacity>
              <View className="flex-1">
                <Text className="text-sm text-gray-600 leading-5">
                  I agree to the{" "}
                  <Pressable>
                    <Text className="text-emerald-600 font-semibold">
                      Terms & Conditions
                    </Text>
                  </Pressable>
                  {" "}and{" "}
                  <Pressable>
                    <Text className="text-emerald-600 font-semibold">
                      Privacy Policy
                    </Text>
                  </Pressable>
                </Text>
              </View>
            </View>

            {/* Register Button */}
            <TouchableOpacity
  disabled={isLodingReg || !agreeTerms} // disable when loading or terms not agreed
  onPress={handleRegister}
  className={`rounded-2xl py-4 shadow-lg mb-6 ${
    isLodingReg || !agreeTerms
      ? "bg-gray-300"
      : "bg-gradient-to-r from-emerald-500 to-orange-500"
  }`}
>
  <Text className="text-center text-white font-bold text-lg">
    {isLodingReg ? "⏳ Registering..." : "🌟 Begin Adventure"}
  </Text>
</TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center mb-6">
              <View className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
              <Text className="text-gray-500 px-4 bg-white rounded-full text-xs">
                Or join with
              </Text>
              <View className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
            </View>

            {/* Social Register Buttons */}
            <View className="flex-row space-x-3 mb-4">
              <TouchableOpacity className="flex-1 bg-white border-2 border-red-200 rounded-xl py-3 flex-row items-center justify-center shadow-sm">
                <Ionicons name="logo-google" size={18} color="#EA4335" />
                <Text className="text-gray-700 font-semibold ml-2 text-sm">Google</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-white border-2 border-gray-200 rounded-xl py-3 flex-row items-center justify-center shadow-sm">
                <Ionicons name="logo-facebook" size={18} color="#1877F2" />
                <Text className="text-gray-700 font-semibold ml-2 text-sm">Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Link */}
          <View className="items-center mt-8">
            <View className="flex-row bg-white/60 px-6 py-3 rounded-full">
              <Text className="text-gray-700">Already exploring? </Text>
              <Pressable onPress={() => router.push("/login")}>
                <Text className="text-emerald-600 font-bold">Sign In</Text>
              </Pressable>
            </View>
          </View>

          {/* Sri Lankan Cultural Elements */}
          <View className="items-center mt-6">
            <View className="flex-row items-center space-x-2">
              <Text className="text-lg">🎭</Text>
              <Text className="text-xs text-gray-500">Kandyan</Text>
              <Text className="text-lg">🍃</Text>
              <Text className="text-xs text-gray-500">Tea</Text>
              <Text className="text-lg">🏛️</Text>
              <Text className="text-xs text-gray-500">Temple</Text>
              <Text className="text-lg">🌊</Text>
            </View>
          </View>

          {/* Footer */}  
          <View className="items-center mt-6">
            <Text className="text-xs text-gray-500 text-center px-8 leading-4">
              Join thousands of adventurers discovering hidden gems,{"\n"}
              cultural treasures, and unforgettable experiences! 🇱🇰
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Register