import { useMemo, useRef, useState } from "react";
import { Animated, Easing } from "react-native";
import { Image } from "expo-image";
import { Button, Input, Text, XStack, YStack } from "tamagui";
import { splashBackground } from "../data/homeData";

type AuthMode = "login" | "register";

type AuthScreenProps = {
  onLoginSuccess: () => void;
};

export function AuthScreen({ onLoginSuccess }: AuthScreenProps) {
  const [mode, setMode] = useState<AuthMode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const isLogin = mode === "login";

  const canSubmit = useMemo(() => {
    if (isLogin) return email.trim().length > 0 && password.trim().length > 0;
    return name.trim().length > 0 && email.trim().length > 0 && password.trim().length > 0;
  }, [email, isLogin, name, password]);

  const switchMode = (nextMode: AuthMode) => {
    if (nextMode === mode) return;

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 140,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 8,
        duration: 140,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setMode(nextMode);
      setError("");
      setMessage("");
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 200,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const handleSubmit = () => {
    if (isLogin) {
      if (email.trim() === "test" && password.trim() === "test") {
        setError("");
        onLoginSuccess();
        return;
      }

      setError("Sai thông tin. Mock login: email test, pass test.");
      return;
    }

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

        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
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
              {isLogin ? "Đăng nhập" : "Đăng ký"}
            </Text>

            {isLogin ? (
              <YStack backgroundColor="rgba(15,123,131,0.08)" borderRadius={14} padding="$2.5">
                <Text color="#13656b" fontSize={14}>
                  Mock login: email <Text fontWeight="700">test</Text> | mật khẩu <Text fontWeight="700">test</Text>
                </Text>
              </YStack>
            ) : (
              <Text color="#5f6771" fontSize={14}>
                Tạo tài khoản để tiếp tục sử dụng StayFinder.
              </Text>
            )}

            {!isLogin ? (
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
            ) : null}

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
              onPress={handleSubmit}
              disabled={!canSubmit}
              pressStyle={{ backgroundColor: "#e69716" }}
            >
              <Text color="white" fontSize={17} fontWeight="800">
                {isLogin ? "Đăng nhập" : "Tạo tài khoản"}
              </Text>
            </Button>

            <XStack alignItems="center" justifyContent="center" gap="$2" marginTop="$1">
              <Text color="#4b5563" fontSize={14}>
                {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}
              </Text>
              <Text
                color="#0f7b83"
                fontWeight="700"
                fontSize={15}
                onPress={() => switchMode(isLogin ? "register" : "login")}
              >
                {isLogin ? "Đăng ký ngay" : "Đăng nhập ngay"}
              </Text>
            </XStack>
          </YStack>
        </Animated.View>
      </YStack>
    </YStack>
  );
}
