import { Burger } from "../types/Burger";
import { Card } from "react-native-paper";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

type Props = {
  data: Burger;
  onPress?: () => void;
};

export const BurgerCard = ({ data, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Card style={styles.innerCard}>
        <Card.Content style={styles.content}>
          <Image source={{ uri: data.image }} style={styles.image} />
          <Text style={styles.text}>{data.description}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
  },
  innerCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    elevation: 3,
  },
  content: {
    alignItems: "center",
    paddingVertical: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
});
