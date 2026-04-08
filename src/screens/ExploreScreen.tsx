import { useCallback, useMemo } from "react";
import { FlashList } from "@shopify/flash-list";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, XStack, YStack } from "tamagui";
import { ExploreStayCard } from "../components/stays/ExploreStayCard";
import { exploreFilterChips, exploreStayItems } from "../data/exploreSearchData";
import { StayItem } from "../types/stay";

export function ExploreScreen() {
  const insets = useSafeAreaInsets();
  const stays = useMemo(() => exploreStayItems, []);

  const renderItem = useCallback(({ item }: { item: StayItem }) => <ExploreStayCard item={item} />, []);
  const keyExtractor = useCallback((item: StayItem) => item.id, []);

  return (
    <YStack flex={1} backgroundColor="#f2f9f5">
      <FlashList
        data={stays}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 110 }}
        ItemSeparatorComponent={() => <YStack height={16} />}
        ListHeaderComponent={
          <YStack paddingTop={insets.top + 8} paddingBottom="$4" gap="$3">
            <XStack justifyContent="space-between" alignItems="center">
              <Text width={24}>←</Text>
              <Text color="#0f172a" fontWeight="800" fontSize={24}>
                Khám phá Đà Nẵng
              </Text>
              <Text width={24}> </Text>
            </XStack>

            <XStack gap="$2">
              {exploreFilterChips.map((chip, idx) => (
                <YStack
                  key={chip}
                  backgroundColor={idx === 0 ? "#0f766e" : "#e2e8f0"}
                  borderRadius={999}
                  paddingHorizontal="$3.5"
                  paddingVertical={8}
                >
                  <Text color={idx === 0 ? "white" : "#334155"} fontSize={12} fontWeight="700">
                    {chip}
                  </Text>
                </YStack>
              ))}
            </XStack>

            <XStack justifyContent="space-between" alignItems="center">
              <Text color="#64748b" fontSize={12}>
                ☰  Sắp xếp: Phổ biến nhất
              </Text>
              <YStack backgroundColor="#f1f5f9" borderRadius={999} paddingHorizontal="$3" paddingVertical={7}>
                <Text color="#334155" fontSize={12}>
                  Lọc
                </Text>
              </YStack>
            </XStack>
          </YStack>
        }
      />
    </YStack>
  );
}
