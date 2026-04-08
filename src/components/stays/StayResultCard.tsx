import { memo } from "react";
import { Image } from "expo-image";
import { Button, Text, XStack, YStack } from "tamagui";
import { StayItem } from "../../types/stay";

type StayResultCardProps = {
  item: StayItem;
};

function StayResultCardBase({ item }: StayResultCardProps) {
  return (
    <YStack backgroundColor="white" borderRadius={24} padding="$2.5" gap="$2.5">
      <YStack borderRadius={18} overflow="hidden" position="relative">
        <Image source={item.image} contentFit="cover" style={{ width: "100%", height: 185 }} />
        <XStack position="absolute" left={10} top={10} backgroundColor="rgba(253,230,138,0.95)" borderRadius={999} paddingHorizontal="$2.5" paddingVertical={6}>
          <Text fontSize={12} fontWeight="700" color="#9a3412">
            {item.tags[0]}
          </Text>
        </XStack>
      </YStack>

      <XStack justifyContent="space-between" alignItems="flex-start">
        <YStack flex={1} paddingRight="$2">
          <Text color="#94a3b8" fontSize={11} letterSpacing={1}>
            {item.type}
          </Text>
          <Text color="#0f172a" fontSize={30} lineHeight={34} fontWeight="800">
            {item.name}
          </Text>
          <Text color="#64748b" fontSize={13} marginTop="$1">
            📍 {item.location}
          </Text>
        </YStack>
        <YStack backgroundColor="#ecfeff" borderRadius={999} paddingHorizontal="$2.5" paddingVertical={5}>
          <Text color="#0f766e" fontWeight="700" fontSize={12}>
            ★ {item.rating}
          </Text>
        </YStack>
      </XStack>

      <YStack backgroundColor="#ecfeff" borderRadius={999} paddingHorizontal="$3" paddingVertical="$2" alignSelf="flex-start">
        <Text color="#0f766e" fontSize={12} fontWeight="600">
          ✨ {item.highlights[0]}
        </Text>
      </YStack>

      <XStack justifyContent="space-between" alignItems="center">
        <YStack>
          <Text color="#94a3b8" fontSize={10}>
            GIÁ MỖI ĐÊM
          </Text>
          <Text color="#0f172a" fontWeight="900" fontSize={34}>
            {item.price}
          </Text>
        </YStack>
        <Button size="$3" backgroundColor="#0f766e" borderRadius={999} minWidth={96}>
          <Text color="white" fontWeight="700">
            Xem ngay
          </Text>
        </Button>
      </XStack>
    </YStack>
  );
}

export const StayResultCard = memo(StayResultCardBase);
