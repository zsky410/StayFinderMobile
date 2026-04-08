import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { ExploreScreen } from "../screens/ExploreScreen";
import { PagePlaceholder } from "../screens/PagePlaceholder";
import { SearchScreen } from "../screens/SearchScreen";
import { RootTabParamList } from "../types/navigation";

const Tab = createBottomTabNavigator<RootTabParamList>();

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0f7b83",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarStyle: { height: 70, paddingTop: 8, paddingBottom: 8 },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "Home" }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarLabel: "Search" }} />
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ tabBarLabel: "Explore" }} />
      <Tab.Screen name="AI">{() => <PagePlaceholder title="AI Concierge" />}</Tab.Screen>
      <Tab.Screen name="Profile">{() => <PagePlaceholder title="Hồ sơ" />}</Tab.Screen>
    </Tab.Navigator>
  );
}
