import { useCallback, useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Separator, TamaguiProvider, Text, XStack, YStack } from "tamagui";
import tamaguiConfig from "./tamagui.config";

type RootTabParamList = {
  Home: undefined;
  Explore: undefined;
  Map: undefined;
  AI: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const splashBackground =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80";

const exploreCards = [
  {
    title: "Cầu Rồng",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Điểm Mỹ Khê",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80",
  },
];

const featuredStays = [
  {
    name: "Son Tra Azure Boutique Resort",
    price: "2.450.000đ",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "The Ocean Suite Mỹ Khê",
    price: "1.800.000đ",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Han River Urban Loft",
    price: "1.250.000đ",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
  },
];

const recentSearches = [
  "Khách sạn 4 sao gần Chợ Hàn",
  "Villa nguyên căn sơn Mỹ Khê",
  "Căn hộ có bếp tại An Thượng",
];

function SplashScreen({ onStart }: { onStart: () => void }) {
  return (
    <YStack flex={1} backgroundColor="#0f172a">
      <Image source={splashBackground} contentFit="cover" style={{ width: "100%", height: "100%", position: "absolute" }} />
      <YStack flex={1} paddingHorizontal="$6" paddingTop="$12" paddingBottom="$7" justifyContent="space-between">
        <YStack alignItems="center" marginTop="$6">
          <Text color="white" fontSize={56} fontWeight="800" fontStyle="italic" letterSpacing={-2}>
            StayFinder
          </Text>
          <YStack width={52} height={6} borderRadius={999} backgroundColor="#f7a826" marginTop="$2" />
        </YStack>

        <YStack padding="$6" backgroundColor="rgba(255,255,255,0.82)" borderRadius="$8" borderWidth={1} borderColor="rgba(255,255,255,0.5)">
          <XStack
            alignItems="center"
            alignSelf="flex-start"
            paddingHorizontal="$4"
            paddingVertical="$2"
            borderRadius={999}
            backgroundColor="rgba(175,220,226,0.75)"
          >
            <Text color="#0f646c" fontWeight="700" fontSize={13}>
              AI CONCIERGE
            </Text>
          </XStack>
          <Text marginTop="$4" color="#0b0f14" fontWeight="800" fontSize={52} lineHeight={58} letterSpacing={-1.6}>
            Trợ lý AI tìm chỗ lưu trú tại Đà Nẵng
          </Text>
          <Text marginTop="$4" color="#4b5563" fontSize={29} lineHeight={42} textAlign="center">
            Khám phá những điểm dừng chân đẳng cấp và trải nghiệm bản địa được tinh tuyển riêng cho bạn.
          </Text>
        </YStack>

        <YStack gap="$3">
          <Button
            size="$6"
            backgroundColor="#f8a81f"
            borderRadius={999}
            onPress={onStart}
            pressStyle={{ backgroundColor: "#e79a17" }}
          >
            <Text color="white" fontWeight="800" fontSize={34}>
              Bắt đầu ngay →
            </Text>
          </Button>
          <Button
            size="$6"
            chromeless
            borderWidth={1}
            borderColor="rgba(255,255,255,0.6)"
            backgroundColor="rgba(255,255,255,0.1)"
            borderRadius={999}
            pressStyle={{ backgroundColor: "rgba(255,255,255,0.16)" }}
          >
            <Text color="white" fontSize={28}>
              Tìm hiểu thêm
            </Text>
          </Button>
        </YStack>
      </YStack>
    </YStack>
  );
}

function HomeScreen() {
  const insets = useSafeAreaInsets();
  const chips = useMemo(() => ["Đón sân bay", "Gần sân bay", "Khu yên tĩnh", "Phù hợp gia đình", "Phòng có bếp"], []);

  return (
    <YStack flex={1} backgroundColor="#f2f9f5">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        <YStack paddingTop={insets.top + 12} paddingHorizontal="$4" gap="$4">
          <XStack alignItems="center" justifyContent="space-between">
            <Text fontSize={33} fontWeight="800" color="#0f3d43">
              Chào bạn, hôm nay bạn muốn ở đâu?
            </Text>
            <Text fontSize={20}>🔔</Text>
          </XStack>

          <XStack backgroundColor="white" borderRadius={22} paddingHorizontal="$3" paddingVertical="$3" alignItems="center" gap="$2">
            <Text color="#5f7f80" fontSize={24} flex={1}>
              ✨  Nhập yêu cầu...
            </Text>
            <Button size="$3" backgroundColor="#0f7b83" borderRadius={999}>
              <Text color="white" fontWeight="700">
                Tìm kiếm
              </Text>
            </Button>
          </XStack>

          <XStack flexWrap="wrap" gap="$2">
            {chips.map((chip) => (
              <YStack key={chip} paddingHorizontal="$3" paddingVertical="$2" backgroundColor="#d8f0eb" borderRadius={999}>
                <Text color="#0d6d66" fontSize={15} fontWeight="600">
                  {chip}
                </Text>
              </YStack>
            ))}
          </XStack>

          <XStack justifyContent="space-between" alignItems="center">
            <Text fontSize={28} fontWeight="800" color="#0b3a3d">
              Khám phá Đà Nẵng
            </Text>
            <Text color="#4b5563" fontSize={14}>
              Xem tất cả
            </Text>
          </XStack>

          <XStack gap="$3">
            {exploreCards.map((item) => (
              <YStack key={item.title} flex={1} backgroundColor="white" borderRadius={18} overflow="hidden">
                <Image source={item.image} contentFit="cover" style={{ width: "100%", height: 130 }} />
                <Text padding="$2" color="#0f172a" fontWeight="700" fontSize={16}>
                  {item.title}
                </Text>
              </YStack>
            ))}
          </XStack>

          <XStack justifyContent="space-between" alignItems="center" marginTop="$2">
            <Text fontSize={28} fontWeight="800" color="#0b3a3d">
              Chỗ nghỉ nổi bật
            </Text>
            <Text color="#4b5563" fontSize={14}>
              1/3
            </Text>
          </XStack>

          {featuredStays.map((stay) => (
            <YStack key={stay.name} backgroundColor="white" borderRadius={20} padding="$2" gap="$2">
              <Image source={stay.image} contentFit="cover" style={{ width: "100%", height: 180, borderRadius: 14 }} />
              <XStack justifyContent="space-between" alignItems="center">
                <Text fontWeight="700" fontSize={16} color="#0f172a" flex={1}>
                  {stay.name}
                </Text>
                <Text color="#111827" fontWeight="800">
                  {stay.price}
                </Text>
              </XStack>
            </YStack>
          ))}

          <YStack backgroundColor="#e8f4ef" borderRadius={18} padding="$3" marginBottom="$4">
            <Text fontSize={19} fontWeight="800" color="#0b3a3d" marginBottom="$2">
              Tìm kiếm gần đây
            </Text>
            {recentSearches.map((item, idx) => (
              <YStack key={item}>
                <XStack paddingVertical="$2" alignItems="center" gap="$2">
                  <Text color="#0f7b83">⏲</Text>
                  <Text color="#374151" flex={1}>
                    {item}
                  </Text>
                </XStack>
                {idx < recentSearches.length - 1 ? <Separator /> : null}
              </YStack>
            ))}
          </YStack>
        </YStack>
      </ScrollView>
    </YStack>
  );
}

function PagePlaceholder({ title }: { title: string }) {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="#f2f9f5">
      <Text fontSize={26} fontWeight="700">
        {title}
      </Text>
    </YStack>
  );
}

function MainTabs() {
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

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const handleStart = useCallback(() => setShowSplash(false), []);

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <SafeAreaProvider>
        {showSplash ? (
          <>
            <StatusBar style="light" />
            <SplashScreen onStart={handleStart} />
          </>
        ) : (
          <NavigationContainer>
            <StatusBar style="dark" />
            <MainTabs />
          </NavigationContainer>
        )}
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
