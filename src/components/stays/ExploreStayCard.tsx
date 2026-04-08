import { memo } from "react";
import { Image } from "expo-image";
import { Text, XStack, YStack } from "tamagui";
import { StayItem } from "../../types/stay";

type ExploreStayCardProps = {
  item: StayItem;
};

function ExploreStayCardBase({ item }: ExploreStayCardProps) {
  return (
    <YStack backgroundColor="white" borderRadius={24} padding="$2.5" gap="$2.5">
      <YStack borderRadius={18} overflow="hidden" position="relative">
        <Image source={item.image} contentFit="cover" style={{ width: "100%", height: 200 }} />
        <XStack
          position="absolute"
          right={12}
          top={12}
          width={32}
          height={32}
          borderRadius={999}
          backgroundColor="rgba(255,255,255,0.92)"
          justifyContent="center"
          alignItems="center"
        >
          <Text>🤍</Text>
        </XStack>
      </YStack>

      <XStack justifyContent="space-between" alignItems="flex-start">
        <YStack flex={1} paddingRight="$2">
          <Text color="#0f172a" fontSize={32} lineHeight={35} fontWeight="800">
            {item.name}
          </Text>
          <Text color="#64748b" fontSize={13} marginTop="$1">
            📍 {item.location}
          </Text>
        </YStack>
        <YStack alignItems="flex-end">
          <Text color="#94a3b8" fontSize={10}>
            TỪ
          </Text>
          <Text color="#0f172a" fontWeight="800" fontSize={24}>
            {item.price}
          </Text>
        </YStack>
      </XStack>

      <YStack backgroundColor="#f1f5f9" borderRadius={14} padding="$2.5">
        <Text color="#334155" fontSize={12}>
          ✨ {item.tags[0]}
        </Text>
      </YStack>

      <XStack gap="$2" flexWrap="wrap">
        {item.highlights.map((highlight) => (
          <YStack key={highlight} backgroundColor="#dcfce7" borderRadius={999} paddingHorizontal="$3" paddingVertical={7}>
            <Text color="#166534" fontSize={11} fontWeight="600">
              ⚑ {highlight}
            </Text>
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
}

export const ExploreStayCard = memo(ExploreStayCardBase);
