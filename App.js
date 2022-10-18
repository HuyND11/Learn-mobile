import { View, StyleSheet } from "react-native";
import Banner from "./src/components/Banner";
import TopProductCard from "./src/components/TopProductCard";

const App = () => {
  return (
    <View style = {styles.container}>
      <Banner></Banner>
      <TopProductCard></TopProductCard>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    // backgroundColor: "red",
  }
})

export default App;