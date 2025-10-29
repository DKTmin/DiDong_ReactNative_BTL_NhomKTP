import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const imageMap: Record<string, any> = {
  "ChickenCajun.png": require("./images/ChickenCajun.png"),
  "DoubleBeef.png": require("./images/DoubleBeef.png"),
  "CheeseDeluxe.png": require("./images/CheeseDeluxe.png"),
  "SpicyGrill.png": require("./images/SpicyGrill.png"),
  "BaconLovers.png": require("./images/BaconLovers.png"),
  "VeggieDelight.png": require("./images/VeggieDelight.png"),
};


interface Burger {
  id: string;
  name: string;
  price: number;
  description: string;
  imageName: string;
}

export default function IndexScreen() {
  const [burgers, setBurgers] = useState<Burger[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://6900db32ff8d792314bbc8f2.mockapi.io/burgers"
        );
        const data = await res.json();
        setBurgers(data);
      } catch (err) {
        Alert.alert("Lỗi", "Không thể tải danh sách Burger");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filtered = burgers.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#ff9900" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>BurgerFast</Text>
      </View>

      <Text style={styles.title}>🍔 Mời bạn chọn Burger yêu thích</Text>

      <TextInput
        style={styles.search}
        placeholder="Tìm kiếm Burger..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => {
          const localImage = imageMap[item.imageName] || null;

          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push("/sign_in")}
            >
              {localImage ? (
                <Image source={localImage} style={styles.image} />
              ) : (
                <View style={[styles.image, styles.imagePlaceholder]}>
                  <Text>Ảnh lỗi</Text>
                </View>
              )}

              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price.toLocaleString()}₫</Text>

              <TouchableOpacity
                style={styles.cartButton}
                onPress={() => router.push("/sign_in")}
              >
                <Ionicons name="cart" size={20} color="#fff" />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  header: {
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  headerText: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  search: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    width: "48%",
    padding: 10,
    marginBottom: 15,
    position: "relative",
  },
  image: { width: "100%", height: 120, borderRadius: 10 },
  imagePlaceholder: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  name: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  price: { color: "#ff9900", fontWeight: "600" },
  cartButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#ff9900",
    padding: 6,
    borderRadius: 8,
  },
});
