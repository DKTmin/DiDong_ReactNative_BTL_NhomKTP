import { Stack } from "expo-router";
import { CartProvider } from "./context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Nhóm tab chính */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Màn hình chi tiết burger (ngoài tab) */}
        <Stack.Screen name="burgerDetail" options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
  );
}
