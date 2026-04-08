import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { PagePlaceholder } from "../screens/PagePlaceholder";
import { RootTabParamList } from "../types/navigation";

const Tab = createBottomTabNavigator<RootTabParamList>();

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0f7b83",
        tabBarInactiveTintColor: "#94a3b8",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "Home" }} />
      <Tab.Screen name="Explore">{() => <PagePlaceholder title="Khám phá" />}</Tab.Screen>
      <Tab.Screen name="Map">{() => <PagePlaceholder title="Bản đồ" />}</Tab.Screen>
      <Tab.Screen name="AI">{() => <PagePlaceholder title="AI Concierge" />}</Tab.Screen>
      <Tab.Screen name="Profile">{() => <PagePlaceholder title="Hồ sơ" />}</Tab.Screen>
    </Tab.Navigator>
  );
}
