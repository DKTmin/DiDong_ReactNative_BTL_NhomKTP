import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCart } from "./context/CartContext";

const imageMap: Record<string, any> = {
  "ChickenCajun.png": require("./images/ChickenCajun.png"),
  "DoubleBeef.png": require("./images/DoubleBeef.png"),
  "CheeseDeluxe.png": require("./images/CheeseDeluxe.png"),
  "SpicyGrill.png": require("./images/SpicyGrill.png"),
  "BaconLovers.png": require("./images/BaconLovers.png"),
  "VeggieDelight.png": require("./images/VeggieDelight.png"),
};

export default function BurgerDetail() {
  const { burger } = useLocalSearchParams<{ burger: string }>();
  const { addToCart } = useCart();

  if (!burger) {
    return (
      <View style={styles.center}>
        <Text>Không tìm thấy Burger</Text>
      </View>
    );
  }

  const item = JSON.parse(burger);
  const localImage = imageMap[item.imageName] || null;

  return (
    <View style={styles.container}>
      {localImage ? (
        <Image source={localImage} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]}>
          <Text>Không có ảnh</Text>
        </View>
      )}

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price.toLocaleString()}₫</Text>
      <Text style={styles.desc}>{item.description}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addToCart({ ...item, image: localImage });
          Alert.alert("✅ Đã thêm vào giỏ hàng");
        }}
      >
        <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: "100%", height: 250, borderRadius: 10, marginBottom: 15 },
  imagePlaceholder: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  name: { fontSize: 22, fontWeight: "bold" },
  price: { color: "#ff9900", fontSize: 20, marginVertical: 5 },
  desc: { fontSize: 16, color: "#555", marginBottom: 20 },
  button: {
    backgroundColor: "#ff9900",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
