import { useMemo } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Button, Separator, Text, XStack, YStack } from "tamagui";
import { exploreCards, featuredStays, filterChips, recentSearches } from "../data/homeData";
import { RootTabParamList } from "../types/navigation";

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const chips = useMemo(() => filterChips, []);
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

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
            <Button size="$3" backgroundColor="#0f7b83" borderRadius={999} onPress={() => navigation.navigate("Search")}>
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
