import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface BurgerItem {
  id: string;
  name: string;
  price: number;
  image: any;
  quantity: number;
}

export default function PayScreen() {
  const params = useLocalSearchParams();
  const cartItems: BurgerItem[] = params.cartItems
    ? JSON.parse(params.cartItems as string)
    : [];

  // Tính tổng tiền
  const total = cartItems.reduce(
    (sum: number, item: BurgerItem) => sum + item.price * item.quantity,
    0
  );

  // Thông tin địa chỉ
  const [addressInfo, setAddressInfo] = useState({
    name: "Nguyễn Văn A",
    phone: "0123456789",
    address: "123 Nguyễn Trãi, Quận 5, TP.HCM",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tempInfo, setTempInfo] = useState(addressInfo);

  // Phương thức thanh toán
  const [selectedPayment, setSelectedPayment] = useState("COD");

  const handleSaveAddress = () => {
    setAddressInfo(tempInfo);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setTempInfo(addressInfo);
    setIsModalVisible(false);
  };

  const renderItem = ({ item }: { item: BurgerItem }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDesc}>x{item.quantity}</Text>
        <Text style={styles.itemPrice}>
          {(item.price * item.quantity).toLocaleString()} đ
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Thanh toán</Text>
      </View>
      {/* --- Địa chỉ giao hàng --- */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Địa chỉ giao hàng</Text>
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Text style={styles.changeBtn}>Thay đổi</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.addressText}>
          {addressInfo.name} - {addressInfo.phone}
        </Text>
        <Text style={styles.addressText}>{addressInfo.address}</Text>
      </View>

      {/* --- Danh sách sản phẩm --- */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sản phẩm</Text>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>

      {/* --- Phương thức thanh toán --- */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>

        {[
          { key: "COD", label: "Thanh toán khi nhận hàng (COD)" },
          { key: "CARD", label: "Thẻ tín dụng / Ghi nợ" },
          { key: "WALLET", label: "Ví điện tử (Momo, ZaloPay...)" },
        ].map((method) => (
          <TouchableOpacity
            key={method.key}
            style={styles.paymentOption}
            onPress={() => setSelectedPayment(method.key)}
          >
            <View style={styles.radioCircle}>
              {selectedPayment === method.key && (
                <View style={styles.radioSelected} />
              )}
            </View>
            <Text style={styles.paymentText}>{method.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* --- Tổng cộng --- */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Tổng cộng:</Text>
        <Text style={styles.totalPrice}>{total.toLocaleString()} đ</Text>
      </View>

      {/* --- Nút thanh toán --- */}
      <TouchableOpacity
        style={styles.payBtn}
        onPress={() =>
          alert(
            `Thanh toán thành công bằng ${
              selectedPayment === "COD"
                ? "COD"
                : selectedPayment === "CARD"
                ? "Thẻ tín dụng"
                : "Ví điện tử"
            }!`
          )
        }
      >
        <Text style={styles.payBtnText}>Xác nhận thanh toán</Text>
      </TouchableOpacity>

      {/* --- Modal chỉnh sửa địa chỉ --- */}
      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Thông tin liên hệ</Text>

            <TextInput
              style={styles.input}
              placeholder="Họ và tên"
              value={tempInfo.name}
              onChangeText={(text) => setTempInfo({ ...tempInfo, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Số điện thoại"
              value={tempInfo.phone}
              onChangeText={(text) => setTempInfo({ ...tempInfo, phone: text })}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Địa chỉ"
              value={tempInfo.address}
              onChangeText={(text) =>
                setTempInfo({ ...tempInfo, address: text })
              }
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelBtn} onPress={handleCancel}>
                <Text style={styles.cancelText}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveBtn}
                onPress={handleSaveAddress}
              >
                <Text style={styles.saveText}>Thay đổi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

// 🎨 STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#ff7f50",
  },
  section: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  changeBtn: {
    color: "#007AFF",
    fontSize: 14,
  },
  addressText: {
    marginTop: 8,
    color: "#555",
  },
  itemContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  itemName: {
    fontWeight: "600",
    fontSize: 16,
  },
  itemDesc: {
    color: "#777",
    fontSize: 13,
    marginVertical: 4,
  },
  itemPrice: {
    color: "#e53935",
    fontWeight: "600",
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  paymentText: {
    fontSize: 15,
    color: "#333",
    marginLeft: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ff5722",
    alignItems: "center",
    justifyContent: "center",
  },
  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ff5722",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  totalPrice: {
    fontSize: 18,
    color: "#e53935",
    fontWeight: "700",
  },
  payBtn: {
    backgroundColor: "#ff5722",
    paddingVertical: 14,
    margin: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  payBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    padding: 20,
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  cancelBtn: {
    backgroundColor: "#eee",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginRight: 10,
  },
  cancelText: {
    color: "#333",
  },
  saveBtn: {
    backgroundColor: "#ff5722",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  saveText: {
    color: "#fff",
    fontWeight: "600",
  },
});
