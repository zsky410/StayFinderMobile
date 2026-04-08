import { useMemo, useState } from "react";
import { Image } from "expo-image";
import { Button, Input, Text, XStack, YStack } from "tamagui";
import { splashBackground } from "../data/homeData";

type RegisterScreenProps = {
  onGoLogin: () => void;
};

export function RegisterScreen({ onGoLogin }: RegisterScreenProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(
    () => name.trim().length > 0 && email.trim().length > 0 && password.trim().length > 0,
    [name, email, password],
  );

  const handleRegister = () => {
    if (!canSubmit) return;
    setMessage("Đăng ký thành công (mock). Mời bạn đăng nhập.");
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
            Đăng ký
          </Text>
          <Text color="#5f6771" fontSize={14}>
            Tạo tài khoản để tiếp tục sử dụng StayFinder.
          </Text>

          <YStack gap="$2" marginTop="$1">
            <Text color="#25313a" fontWeight="700" fontSize={14}>
              Họ và tên
            </Text>
            <Input
              value={name}
              onChangeText={setName}
              placeholder="Nhập họ và tên"
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

          {message ? (
            <YStack backgroundColor="rgba(6,95,70,0.1)" borderRadius={12} padding="$2.5">
              <Text color="#065f46" fontSize={13}>
                {message}
              </Text>
            </YStack>
          ) : null}

          <Button
            marginTop="$2"
            height={56}
            borderRadius={999}
            backgroundColor={canSubmit ? "#f8a81f" : "rgba(248,168,31,0.55)"}
            onPress={handleRegister}
            disabled={!canSubmit}
            pressStyle={{ backgroundColor: "#e69716" }}
          >
            <Text color="white" fontSize={17} fontWeight="800">
              Tạo tài khoản
            </Text>
          </Button>

          <XStack alignItems="center" justifyContent="center" gap="$2" marginTop="$1">
            <Text color="#4b5563" fontSize={14}>
              Đã có tài khoản?
            </Text>
            <Text color="#0f7b83" fontWeight="700" fontSize={15} onPress={onGoLogin}>
              Đăng nhập ngay
            </Text>
          </XStack>
        </YStack>
      </YStack>
    </YStack>
  );
}
