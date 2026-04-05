import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TamaguiProvider, Text, YStack } from "tamagui";
import tamaguiConfig from "./tamagui.config";

type RootTabParamList = {
  Home: undefined;
  Explore: undefined;
  Map: undefined;
  "AI Chat": undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function PagePlaceholder({ title }: { title: string }) {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="white">
      <Text fontSize={24} fontWeight="600">
        {title}
      </Text>
    </YStack>
  );
}

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <Tab.Navigator
            screenOptions={{
              headerTitle: "Stay Finder",
              headerTitleAlign: "center",
              tabBarActiveTintColor: "#0f766e",
              tabBarInactiveTintColor: "#6b7280",
            }}
          >
            <Tab.Screen name="Home">{() => <PagePlaceholder title="Home" />}</Tab.Screen>
            <Tab.Screen name="Explore">{() => <PagePlaceholder title="Explore" />}</Tab.Screen>
            <Tab.Screen name="Map">{() => <PagePlaceholder title="Map" />}</Tab.Screen>
            <Tab.Screen name="AI Chat">{() => <PagePlaceholder title="AI Chat" />}</Tab.Screen>
            <Tab.Screen name="Profile">{() => <PagePlaceholder title="Profile" />}</Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
