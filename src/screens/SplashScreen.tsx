import { useWindowDimensions } from "react-native";
import { Button, Text, XStack, YStack } from "tamagui";
import { Image } from "expo-image";
import { splashBackground } from "../data/homeData";

type SplashScreenProps = {
  onStart: () => void;
};

export function SplashScreen({ onStart }: SplashScreenProps) {
  const { width, height } = useWindowDimensions();
  const isCompact = height < 780;
  const cardWidth = Math.min(width * 0.86, 360);
  const logoFontSize = width < 360 ? 30 : 34;
  const headingFontSize = width < 360 ? 28 : 32;
  const headingLineHeight = width < 360 ? 36 : 40;
  const bodyFontSize = width < 360 ? 14 : 16;
  const bodyLineHeight = width < 360 ? 22 : 26;

  return (
    <YStack flex={1} backgroundColor="#0f172a">
      <Image source={splashBackground} contentFit="cover" style={{ width: "100%", height: "100%", position: "absolute" }} />
      <YStack
        flex={1}
        paddingHorizontal="$5"
        paddingTop={isCompact ? "$8" : "$10"}
        paddingBottom={isCompact ? "$5" : "$7"}
        justifyContent="space-between"
      >
        <YStack alignItems="center" marginTop={isCompact ? "$2" : "$4"}>
          <Text allowFontScaling={false} color="white" fontSize={logoFontSize} fontWeight="800" fontStyle="italic" letterSpacing={-1}>
            StayFinder
          </Text>
          <YStack width={52} height={6} borderRadius={999} backgroundColor="#f7a826" marginTop="$1.5" />
        </YStack>

        <YStack
          alignSelf="center"
          width={cardWidth}
          paddingHorizontal="$5"
          paddingVertical={isCompact ? "$4.5" : "$5"}
          backgroundColor="rgba(244,247,247,0.84)"
          borderRadius={32}
          borderWidth={1}
          borderColor="rgba(255,255,255,0.58)"
        >
          <XStack
            alignItems="center"
            alignSelf="flex-start"
            paddingHorizontal="$3.5"
            paddingVertical="$1.5"
            borderRadius={999}
            backgroundColor="rgba(175,220,226,0.75)"
          >
            <Text allowFontScaling={false} color="#0f646c" fontWeight="700" fontSize={11} letterSpacing={0.3}>
              AI CONCIERGE
            </Text>
          </XStack>
          <Text
            allowFontScaling={false}
            marginTop="$3.5"
            color="#0b0f14"
            fontWeight="800"
            fontSize={headingFontSize}
            lineHeight={headingLineHeight}
            letterSpacing={-1.8}
          >
            Trợ lý AI tìm chỗ lưu trú tại Đà Nẵng
          </Text>
          <Text allowFontScaling={false} marginTop="$3.5" color="#5f6771" fontSize={bodyFontSize} lineHeight={bodyLineHeight} textAlign="center">
            Khám phá những điểm dừng chân đẳng cấp và trải nghiệm bản địa được tinh tuyển riêng cho bạn.
          </Text>
        </YStack>

        <YStack gap="$3" paddingHorizontal="$1">
          <Button
            height={72}
            backgroundColor="#f8a81f"
            borderRadius={999}
            onPress={onStart}
            pressStyle={{ backgroundColor: "#e79a17" }}
          >
            <Text allowFontScaling={false} color="white" fontWeight="800" fontSize={16}>
              Bắt đầu ngay →
            </Text>
          </Button>
          <Button
            height={56}
            chromeless
            borderWidth={1}
            borderColor="rgba(255,255,255,0.6)"
            backgroundColor="rgba(255,255,255,0.14)"
            borderRadius={999}
            pressStyle={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <Text allowFontScaling={false} color="white" fontSize={14} fontWeight="500">
              Tìm hiểu thêm
            </Text>
          </Button>

          <XStack alignItems="center" justifyContent="space-between" marginTop="$2" paddingHorizontal="$1">
            <XStack alignItems="center">
              {["#f6ddd0", "#e5f4fb", "#f8e9d7", "#1898a4"].map((color, idx) => (
                <YStack
                  key={idx}
                  width={34}
                  height={34}
                  borderRadius={999}
                  backgroundColor={color}
                  marginLeft={idx === 0 ? 0 : -10}
                  borderWidth={2}
                  borderColor="rgba(255,255,255,0.95)"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text allowFontScaling={false} color={idx === 3 ? "white" : "#2d3748"} fontSize={10} fontWeight="700">
                    {idx === 3 ? "+2K" : "•"}
                  </Text>
                </YStack>
              ))}
            </XStack>
            <Text allowFontScaling={false} color="rgba(255,255,255,0.9)" fontSize={12} fontWeight="500">
              Hơn 2.000 khách du lịch đã tin dùng
            </Text>
          </XStack>

          <XStack alignSelf="center" marginTop="$1.5" gap="$2">
            <YStack width={34} height={6} borderRadius={999} backgroundColor="#f8a81f" />
            <YStack width={8} height={6} borderRadius={999} backgroundColor="rgba(255,255,255,0.62)" />
            <YStack width={8} height={6} borderRadius={999} backgroundColor="rgba(255,255,255,0.62)" />
          </XStack>
        </YStack>
      </YStack>
    </YStack>
  );
}
