import { SafeAreaProvider } from "react-native-safe-area-context";
import { TamaguiProvider } from "tamagui";
import { RootNavigator } from "./src/navigation/RootNavigator";
import tamaguiConfig from "./tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
