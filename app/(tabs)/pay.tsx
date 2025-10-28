import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useCart } from "../context/CartContext";

export default function PayScreen() {
  const { cartItems, clearCart } = useCart();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const confirmPayment = () => {
    Alert.alert("🎉 Thanh toán thành công", "Cảm ơn bạn đã mua hàng!");
    clearCart();
  };

  return (
    <View style={styles.container}>
      {/* Địa chỉ giao hàng */}
      <TouchableOpacity
        onPress={() => setShowAddressForm(true)}
        style={styles.addressBox}
      >
        <Text style={styles.sectionTitle}>📍 Địa chỉ giao hàng</Text>
        <Text>
          {name ? `${name} - ${phone}\n${address}` : "Chưa có địa chỉ"}
        </Text>
      </TouchableOpacity>

      {/* Danh sách sản phẩm */}
      <Text style={styles.sectionTitle}>🧾 Sản phẩm</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={{ flex: 1 }}>
              <Text>{item.name}</Text>
              <Text>
                {item.quantity} x {item.price.toLocaleString()}₫
              </Text>
            </View>
            <Text style={{ fontWeight: "bold" }}>
              {(item.price * item.quantity).toLocaleString()}₫
            </Text>
          </View>
        )}
      />

      {/* Phương thức thanh toán */}
      <Text style={styles.sectionTitle}>💳 Phương thức thanh toán</Text>
      {["COD", "Thẻ tín dụng", "Ví điện tử"].map((method) => (
        <TouchableOpacity
          key={method}
          onPress={() => setPaymentMethod(method)}
          style={[
            styles.methodButton,
            paymentMethod === method && styles.methodActive,
          ]}
        >
          <Text style={{ color: paymentMethod === method ? "#fff" : "#000" }}>
            {method}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Tổng tiền */}
      <Text style={styles.total}>Tổng cộng: {total.toLocaleString()}₫</Text>

      <TouchableOpacity style={styles.payButton} onPress={confirmPayment}>
        <Text style={styles.payText}>Xác nhận thanh toán</Text>
      </TouchableOpacity>

      {/* Form thay đổi địa chỉ */}
      <Modal visible={showAddressForm} animationType="slide" transparent>
        <View style={styles.modal}>
          <View style={styles.modalBox}>
            <Text style={styles.sectionTitle}>📦 Thông tin liên hệ</Text>
            <TextInput
              placeholder="Họ và tên"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              placeholder="Số điện thoại"
              style={styles.input}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
            <TextInput
              placeholder="Địa chỉ"
              style={styles.input}
              value={address}
              onChangeText={setAddress}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: "#ccc" }]}
                onPress={() => setShowAddressForm(false)}
              >
                <Text>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: "#ff9900" }]}
                onPress={() => setShowAddressForm(false)}
              >
                <Text style={{ color: "#fff" }}>Thay đổi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  sectionTitle: { fontWeight: "bold", marginVertical: 10, fontSize: 16 },
  addressBox: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    alignItems: "center",
  },
  itemImage: { width: 50, height: 50, marginRight: 10, borderRadius: 8 },
  total: { fontWeight: "bold", fontSize: 18, marginVertical: 15 },
  payButton: {
    backgroundColor: "#ff9900",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  payText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  methodButton: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 8,
  },
  methodActive: { backgroundColor: "#ff9900", borderColor: "#ff9900" },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    width: "85%",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: { flexDirection: "row", justifyContent: "space-between" },
  btn: {
    padding: 10,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
});
