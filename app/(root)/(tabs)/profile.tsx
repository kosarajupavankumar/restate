import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import icons from "@constants/icons";
import images from "@/constants/images";
import { settings } from "@/constants/data";
import { useGlobalContext } from "../../../lib/global-provider";
import { logout } from "@/lib/appwrite";

interface SettingItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row justify-between items-center py-4"
    >
      <View className="flex-row items-center">
        <Image source={icon} className="w-6 h-6 mr-4" />
        <Text
          className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}
        >
          {title}
        </Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className="w-4 h-4" />}
    </TouchableOpacity>
  );
};

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogOut = async () => {
    try {
      // Assuming logout() performs API call or token/session clearing
      const result = await logout();

      if (result) {
        Alert.alert("Success", "You have been logged out successfully.");
        refetch(); // Reset global user context
      } else {
        Alert.alert("Error", "An error occurred while logging out.");
      }
    } catch (error) {
      console.error("Logout Error:", error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };

  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 32, paddingHorizontal: 20 }}
        >
          {/* Header */}
          <View className="flex-row justify-between items-center mt-5">
            <Text className="text-xl font-rubik-bold">Profile</Text>
            <Image source={icons.bell} className="w-5 h-5" />
          </View>

          {/* Profile Avatar */}
          <View className="items-center mt-5">
            <View className="items-center relative">
              <Image
                source={{ uri: user?.avatar }}
                className="w-24 h-24 rounded-full"
              />
              <TouchableOpacity className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-sm">
                <Image source={icons.edit} className="w-6 h-6" />
              </TouchableOpacity>
              <Text className="text-2xl font-rubik-bold mt-2">
                {user?.name || "Guest"}
              </Text>
            </View>
          </View>

          {/* Settings */}
          <View className="mt-8">
            <SettingItem
              icon={icons.calendar}
              title="My Bookings"
              onPress={() => console.log("My Bookings pressed")}
            />
            <SettingItem
              icon={icons.wallet}
              title="Payments"
              onPress={() => console.log("Payments pressed")}
            />
          </View>

          {/* Additional Settings */}
          <View className="mt-5 border-t border-gray-200">
            {settings.slice(2).map((item, index) => (
              <SettingItem key={index} {...item} />
            ))}
          </View>

          {/* Log Out */}
          <View className="mt-5 border-t border-gray-200">
            <SettingItem
              icon={icons.logout}
              title="Log Out"
              textStyle="text-red-500"
              showArrow={false}
              onPress={handleLogOut}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Profile;
