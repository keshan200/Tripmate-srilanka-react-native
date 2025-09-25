import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
  ActivityIndicator
} from "react-native"
import React, { useState } from "react"
import { useRouter } from "expo-router"
import { login } from "@/services/authService"
import { Ionicons } from '@expo/vector-icons'

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleLogin = async () => {
    if (isLoading) return
    setIsLoading(true)
    await login(email, password)
      .then((res) => {
        console.log(res)
        router.push("/home")

      })
      .catch((err) => {
        console.error(err)
        Alert.alert("Login failed", "Something went wrong")
      })
      .finally(() => {
        setIsLoading(false)
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
        <View className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-orange-400 via-red-400 to-emerald-400 opacity-20" />
        <View className="absolute top-20 right-10 w-16 h-16 bg-orange-300 rounded-full opacity-30" />
        <View className="absolute top-40 left-8 w-12 h-12 bg-emerald-300 rounded-full opacity-40" />
        <View className="absolute top-60 right-20 w-8 h-8 bg-red-300 rounded-full opacity-50" />

        <View className="flex-1 justify-center px-6 py-8 relative z-10">
          {/* Header Section */}
          <View className="items-center mb-12">
            <View className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl items-center justify-center mb-6 shadow-2xl transform rotate-3">
              <View className="w-20 h-20 bg-white rounded-xl items-center justify-center">
                <Text className="text-2xl">🏝️</Text>
              </View>
            </View>
            <Text className="text-4xl font-bold text-gray-800 mb-3">
              TripMate
            </Text>
            <Text className="text-xl font-semibold text-orange-600 mb-2">
              Sri Lanka
            </Text>
            <Text className="text-base text-gray-600 text-center px-4">
              Discover the Pearl of the Indian Ocean
            </Text>
            <Text className="text-sm text-gray-500 text-center mt-1">
              Welcome back, Explorer!
            </Text>
          </View>

          {/* Login Form */}
          <View className="bg-white/80 backdrop-blur-sm rounded-3xl px-6 py-8 shadow-xl border border-white/50">
            {/* Email Input */}
            <View className="mb-6">
              <Text className="text-sm font-semibold text-gray-700 mb-3 ml-1">
                Email Address
              </Text>
              <View className="relative">
                <View className="absolute left-4 top-4 z-10">
                  <Ionicons name="mail" size={20} color="#EA580C" />
                </View>
                <TextInput
                  placeholder="your.email@gmail.com"
                  className="bg-white border-2 border-orange-200 rounded-2xl px-12 py-4 text-gray-900 shadow-sm focus:border-orange-400"
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
                  <Ionicons name="lock-closed" size={20} color="#EA580C" />
                </View>
                <TextInput
                  placeholder="Enter your password"
                  className="bg-white border-2 border-orange-200 rounded-2xl px-12 py-4 pr-12 text-gray-900 shadow-sm focus:border-orange-400"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  autoComplete="password"
                />
                <TouchableOpacity
                  className="absolute right-4 top-4"
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons 
                    name={showPassword ? "eye" : "eye-off"} 
                    size={20} 
                    color="#EA580C" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password */}
            <View className="items-end mb-6">
              <Pressable >
                <Text className="text-orange-600 font-semibold">
                  Forgot Password?
                </Text>
              </Pressable>
            </View>

            {/* Login Button */}
            <TouchableOpacity
  className={`rounded-2xl py-4 shadow-lg mb-6 ${isLoading ? "bg-orange-300" : "bg-orange-500"}`}
  onPress={handleLogin}
  disabled={isLoading}
>
  {isLoading ? (
    <View className="flex-row justify-center items-center">
      <ActivityIndicator size="small" color="#fff" />
      <Text className="text-center text-white font-bold text-lg ml-2">
        Logging in...
      </Text>
    </View>
  ) : (
    <Text className="text-center text-white font-bold text-lg">
      🚀 Start Your Journey
    </Text>
  )}
</TouchableOpacity>


            {/* Divider */}
            <View className="flex-row items-center mb-6">
              <View className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
              <Text className="text-gray-500 px-4 bg-white rounded-full text-xs">
                Or explore with
              </Text>
              <View className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
            </View>

            {/* Social Login Buttons */}
            <View className="flex-row space-x-6 mb-4">
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

          {/* Register Link */}
          <View className="items-center mt-8">
            <View className="flex-row bg-white/60 px-6 py-3 rounded-full">
              <Text className="text-gray-700">New to Sri Lanka? </Text>
               <Pressable onPress={() => router.push("/(auth)/register")}>
                   <Text className="text-orange-600 font-bold">Join Adventure</Text>
               </Pressable>
            </View>
          </View>

          {/* Sri Lankan Cultural Elements */}
          <View className="items-center mt-6">
            <View className="flex-row items-center space-x-2">
              <Text className="text-lg">🌺</Text>
              <Text className="text-xs text-gray-500">Ayubowan</Text>
              <Text className="text-lg">🐘</Text>
              <Text className="text-xs text-gray-500">Welcome</Text>
              <Text className="text-lg">🥥</Text>
            </View>
          </View>

          {/* Footer */}
          <View className="items-center mt-6">
            <Text className="text-xs text-gray-500 text-center px-8 leading-4">
              Explore ancient temples, pristine beaches, and lush tea gardens.{"\n"}
              Your Sri Lankan adventure awaits! 🇱🇰
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login