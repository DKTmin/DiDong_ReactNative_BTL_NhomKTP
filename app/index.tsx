import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BurgerCard } from "./components/BurgerCard";
import { useFetch } from "./hooks/useFetch";
import { Burger } from "./types/Burger";

const baseUrl = "https://68e6374d21dd31f22cc4a475.mockapi.io/";

export default function BurgerList() {
  const [burgers, setBurgers] = useState<Burger[]>([]);
  const [search, setSearch] = useState("");
  const { isLoading, get } = useFetch(baseUrl);

  const fetchData = useCallback(async () => {
    const data = await get<Burger>("/burgers");
    setBurgers(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const filtered = burgers.filter((b) =>
    b.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>BurgerFast</Text>

        {/* Nút đăng nhập có icon + chữ */}
        <Link href="/sign_in" asChild>
          <TouchableOpacity style={styles.loginBtn}>
            <Ionicons name="person-circle-outline" size={24} color="#000" />
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>
        </Link>
      </View>


      {/* Ô tìm kiếm */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#999" />
        <TextInput
          placeholder="Search"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Danh sách */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => <BurgerCard data={item} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  loginBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff8c00",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  list: {
    paddingBottom: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 6,
  },
});
