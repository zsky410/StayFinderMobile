import { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { MainTabs } from "./MainTabs";
import { SplashScreen } from "../screens/SplashScreen";
import { AuthScreen } from "../screens/AuthScreen";

export function RootNavigator() {
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleStart = useCallback(() => setShowSplash(false), []);
  const handleLoginSuccess = useCallback(() => setIsAuthenticated(true), []);

  if (showSplash) {
    return (
      <>
        <StatusBar style="light" />
        <SplashScreen onStart={handleStart} />
      </>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <StatusBar style="light" />
        <AuthScreen onLoginSuccess={handleLoginSuccess} />
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
