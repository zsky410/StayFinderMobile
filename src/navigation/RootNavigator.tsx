import { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { MainTabs } from "./MainTabs";
import { SplashScreen } from "../screens/SplashScreen";

export function RootNavigator() {
  const [showSplash, setShowSplash] = useState(true);
  const handleStart = useCallback(() => setShowSplash(false), []);

  if (showSplash) {
    return (
      <>
        <StatusBar style="light" />
        <SplashScreen onStart={handleStart} />
      </>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <MainTabs />
    </NavigationContainer>
  );
}
