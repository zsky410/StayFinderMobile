import { useMemo, useState } from "react";
import { Image } from "expo-image";
import { Button, Input, Text, XStack, YStack } from "tamagui";
import { splashBackground } from "../data/homeData";

type LoginScreenProps = {
  onLoginSuccess: () => void;
  onGoRegister: () => void;
};

export function LoginScreen({ onLoginSuccess, onGoRegister }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const canSubmit = useMemo(() => email.trim().length > 0 && password.trim().length > 0, [email, password]);

  const handleLogin = () => {
    if (email.trim() === "test" && password.trim() === "test") {
      setError("");
      onLoginSuccess();
      return;
    }

    setError("Sai thông tin. Mock login: email test, pass test.");
  };

  return (
    <YStack flex={1} backgroundColor="#0f172a">
      <Image source={splashBackground} contentFit="cover" style={{ width: "100%", height: "100%", position: "absolute" }} />
      <YStack flex={1} justifyContent="center" paddingHorizontal="$5" gap="$4">
        <YStack alignItems="center" gap="$1">
          <Text color="white" fontSize={30} fontWeight="800" fontStyle="italic">
            StayFinder
          </Text>
          <YStack width={44} height={5} borderRadius={999} backgroundColor="#f8a81f" />
        </YStack>

        <YStack
          backgroundColor="rgba(255,255,255,0.88)"
          borderRadius={30}
          padding="$5"
          gap="$3"
          borderWidth={1}
          borderColor="rgba(255,255,255,0.6)"
          shadowColor="#0f172a"
          shadowOffset={{ width: 0, height: 8 }}
          shadowOpacity={0.15}
          shadowRadius={24}
        >
          <Text fontSize={40} fontWeight="800" color="#0b0f14" letterSpacing={-0.8}>
            Đăng nhập
          </Text>
          <YStack backgroundColor="rgba(15,123,131,0.08)" borderRadius={14} padding="$2.5">
            <Text color="#13656b" fontSize={14}>
              Mock login: email <Text fontWeight="700">test</Text> | mật khẩu <Text fontWeight="700">test</Text>
            </Text>
          </YStack>

          <YStack gap="$2" marginTop="$1">
            <Text color="#25313a" fontWeight="700" fontSize={14}>
              Email
            </Text>
            <Input
              value={email}
              onChangeText={setEmail}
              placeholder="Nhập email"
              autoCapitalize="none"
              keyboardType="email-address"
              size="$5"
              borderRadius={14}
              backgroundColor="white"
              borderColor="rgba(15,23,42,0.12)"
              color="#0f172a"
              placeholderTextColor="#99a1ab"
              focusStyle={{ borderColor: "#0f7b83", borderWidth: 2 }}
            />
          </YStack>

          <YStack gap="$2">
            <Text color="#25313a" fontWeight="700" fontSize={14}>
              Mật khẩu
            </Text>
            <Input
              value={password}
              onChangeText={setPassword}
              placeholder="Nhập mật khẩu"
              secureTextEntry
              size="$5"
              borderRadius={14}
              backgroundColor="white"
              borderColor="rgba(15,23,42,0.12)"
              color="#0f172a"
              placeholderTextColor="#99a1ab"
              focusStyle={{ borderColor: "#0f7b83", borderWidth: 2 }}
            />
          </YStack>

          {error ? (
            <YStack backgroundColor="rgba(185,28,28,0.08)" borderRadius={12} padding="$2.5">
              <Text color="#b91c1c" fontSize={13}>
                {error}
              </Text>
            </YStack>
          ) : null}

          <Button
            marginTop="$2"
            height={56}
            borderRadius={999}
            backgroundColor={canSubmit ? "#f8a81f" : "rgba(248,168,31,0.55)"}
            onPress={handleLogin}
            disabled={!canSubmit}
            pressStyle={{ backgroundColor: "#e69716" }}
          >
            <Text color="white" fontSize={17} fontWeight="800">
              Đăng nhập
            </Text>
          </Button>

          <XStack alignItems="center" justifyContent="center" gap="$2" marginTop="$1">
            <Text color="#4b5563" fontSize={14}>
              Chưa có tài khoản?
            </Text>
            <Text color="#0f7b83" fontWeight="700" fontSize={15} onPress={onGoRegister}>
              Đăng ký ngay
            </Text>
          </XStack>
        </YStack>
      </YStack>
    </YStack>
  );
}
