import { Text, YStack } from "tamagui";

type PagePlaceholderProps = {
  title: string;
};

export function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="#f2f9f5">
      <Text fontSize={26} fontWeight="700">
        {title}
      </Text>
    </YStack>
  );
}
