import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui } from "tamagui";

const tamaguiConfig = createTamagui({
  ...defaultConfig,
  settings: {
    ...defaultConfig.settings,
    styleCompat: "react-native",
  },
} as any) as any;

export type AppTamaguiConfig = typeof tamaguiConfig;
export default tamaguiConfig;
