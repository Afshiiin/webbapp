import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import warehouse from "./assets/car2.jpg";
import Stock from "./components/Stock.tsx";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base}>
        <Text style={styles.fontText}>Car Shop</Text>
        <Image source={warehouse} style={{ width: 334, height: 140 }} />
        <Stock />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 18,
  },
  fontText: {
    color: "#33c",
    fontSize: 22,
    textAlign: "center",
  },
});
