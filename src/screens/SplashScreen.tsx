import { Button, Text, XStack, YStack } from "tamagui";
import { Image } from "expo-image";
import { splashBackground } from "../data/homeData";

type SplashScreenProps = {
  onStart: () => void;
};

export function SplashScreen({ onStart }: SplashScreenProps) {
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
