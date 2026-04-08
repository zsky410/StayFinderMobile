import { useCallback, useMemo } from "react";
import { FlashList } from "@shopify/flash-list";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, XStack, YStack } from "tamagui";
import { StayResultCard } from "../components/stays/StayResultCard";
import { searchFilterChips, searchStayItems } from "../data/exploreSearchData";
import { StayItem } from "../types/stay";

const TAB_CHIP_ACTIVE = "#0f766e";
const TAB_CHIP_BG = "#d1fae5";

export function SearchScreen() {
  const insets = useSafeAreaInsets();
  const results = useMemo(() => searchStayItems, []);

  const renderItem = useCallback(({ item }: { item: StayItem }) => <StayResultCard item={item} />, []);
  const keyExtractor = useCallback((item: StayItem) => item.id, []);

  return (
    <YStack flex={1} backgroundColor="#f2f9f5">
      <FlashList
        data={results}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 110 }}
        ItemSeparatorComponent={() => <YStack height={14} />}
        ListHeaderComponent={
          <YStack paddingTop={insets.top + 10} gap="$3.5" paddingBottom="$4">
            <XStack justifyContent="space-between" alignItems="center">
              <Text color="#0f766e" fontWeight="800" fontSize={18}>
                StayFinder
              </Text>
              <XStack gap="$2" alignItems="center">
                <Text>🔔</Text>
                <YStack width={30} height={30} borderRadius={999} backgroundColor="#fcd34d" justifyContent="center" alignItems="center">
                  <Text>🙂</Text>
                </YStack>
              </XStack>
            </XStack>

            <XStack backgroundColor="white" borderRadius={16} paddingHorizontal="$3" paddingVertical="$3" justifyContent="space-between" alignItems="center">
              <Text color="#475569" fontSize={14}>
                🔎  Gần biển Mỹ Khê cho gia đình
              </Text>
              <YStack width={30} height={30} borderRadius={999} backgroundColor="#0f766e" justifyContent="center" alignItems="center">
                <Text color="white">⚙</Text>
              </YStack>
            </XStack>

            <XStack gap="$2">
              {searchFilterChips.map((chip, idx) => (
                <YStack
                  key={chip}
                  backgroundColor={idx === 0 ? TAB_CHIP_ACTIVE : TAB_CHIP_BG}
                  borderRadius={999}
                  paddingHorizontal="$3"
                  paddingVertical={7}
                >
                  <Text color={idx === 0 ? "white" : "#0f766e"} fontSize={12} fontWeight="700">
                    {chip} {idx !== 0 ? "⌄" : "⌄"}
                  </Text>
                </YStack>
              ))}
            </XStack>

            <XStack justifyContent="space-between" alignItems="center">
              <Text color="#475569" fontSize={13}>
                Tìm thấy {results.length} kết quả phù hợp
              </Text>
              <Text color="#0f766e" fontSize={12} fontWeight="700">
                Sắp xếp
              </Text>
            </XStack>
          </YStack>
        }
      />
    </YStack>
  );
}
