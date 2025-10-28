import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export interface BurgerItem {
  id: string;
  name: string;
  price: number;
  image: any;
  quantity: number;
}

export default function CartScreen() {
  const router = useRouter();

  // Dữ liệu giỏ hàng mẫu (có thể thay bằng Context hoặc AsyncStorage)
  const [cartItems, setCartItems] = useState<BurgerItem[]>([
    {
      id: "1",
      name: "Chicken Cajun Burger",
      price: 85000,
      image: require("../images/ChickenCajun.png"),
      quantity: 1,
    },
    {
      id: "2",
      name: "Beef Cheese Burger",
      price: 99000,
      image: require("../images/ChickenCajun.png"),
      quantity: 2,
    },
  ]);

  // Hàm tăng / giảm số lượng
  const updateQuantity = (id: string, change: number) => {
    setCartItems((prev) => {
      const updated = prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0); // Xóa nếu số lượng = 0
      return updated;
    });
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Giỏ hàng của bạn</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>🛒 Giỏ hàng đang trống</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>
                  {(item.price * item.quantity).toLocaleString()} đ
                </Text>

                <View style={styles.quantityRow}>
                  <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => updateQuantity(item.id, -1)}
                  >
                    <Text style={styles.qtyText}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.quantity}>{item.quantity}</Text>

                  <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => updateQuantity(item.id, 1)}
                  >
                    <Text style={styles.qtyText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      )}

      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.total}>
            Tổng cộng: {total.toLocaleString()} đ
          </Text>
          <TouchableOpacity
            style={styles.payButton}
            onPress={() =>
              router.push({
                pathname: "/pay",
                params: { cartItems: JSON.stringify(cartItems) },
              })
            }
          >
            <Text style={styles.payButtonText}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#fafafa",
    padding: 10,
    borderRadius: 10,
    marginVertical: 6,
    alignItems: "center",
  },
  image: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { color: "#e67e22", marginVertical: 4, fontWeight: "600" },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  qtyButton: {
    backgroundColor: "#eee",
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: { fontSize: 18, fontWeight: "bold" },
  quantity: { fontSize: 16, fontWeight: "500", width: 24, textAlign: "center" },
  footer: {
    borderTopWidth: 1,
    borderColor: "#eee",
    marginTop: 20,
    paddingTop: 10,
  },
  total: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  payButton: {
    backgroundColor: "#ff7f50",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  payButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  emptyContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  emptyText: { fontSize: 18, color: "#999" },
});
