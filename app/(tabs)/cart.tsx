import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCart } from "../context/CartContext";

export default function CartScreen() {
  const { cartItems, updateQuantity } = useCart();
  const router = useRouter();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.empty}>🛒 Giỏ hàng của bạn trống</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>
                    {item.price.toLocaleString()}₫
                  </Text>
                  <View style={styles.quantityRow}>
                    <TouchableOpacity
                      onPress={() => updateQuantity(item.id, -1)}
                    >
                      <Ionicons
                        name="remove-circle-outline"
                        size={22}
                        color="#ff9900"
                      />
                    </TouchableOpacity>
                    <Text style={styles.qty}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => updateQuantity(item.id, 1)}
                    >
                      <Ionicons
                        name="add-circle-outline"
                        size={22}
                        color="#ff9900"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />

          <View style={styles.footer}>
            <Text style={styles.total}>
              Tổng cộng: {total.toLocaleString()}₫
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("pay")}
            >
              <Text style={styles.buttonText}>Thanh toán</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  empty: { textAlign: "center", marginTop: 50, fontSize: 18 },
  card: { flexDirection: "row", marginBottom: 15 },
  image: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
  name: { fontWeight: "bold", fontSize: 16 },
  price: { color: "#ff9900", marginVertical: 4 },
  quantityRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  qty: { fontSize: 16 },
  footer: { marginTop: 20 },
  total: { fontWeight: "bold", fontSize: 18, marginBottom: 10 },
  button: {
    backgroundColor: "#ff9900",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
