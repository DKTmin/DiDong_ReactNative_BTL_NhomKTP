import { Ionicons } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { BurgerCard } from "../components/BurgerCard";
import { useFetch } from "../hooks/useFetch";
import { Burger } from "../types/Burger";

const baseUrl = "https://68e6374d21dd31f22cc4a475.mockapi.io/";

export default function Home() {
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
      <View style={styles.header}>
        <Text style={styles.title}>BurgerFast</Text>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#999" />
        <TextInput
          placeholder="Search"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
      </View>

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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  addressLabel: {
    fontSize: 14,
    color: "#999",
  },
  address: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 4,
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

});
