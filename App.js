import { View, StyleSheet } from "react-native";
import Banner from "./src/components/Banner";
import ProductCard from "./src/components/ProductCard";
import TopProductCard from "./src/components/TopProductCard";
import TopProductList from "./src/components/TopProductList";

const App = () => {
  return (
    <View style = {styles.container}>
      <Banner></Banner>
      {/* <TopProductCard></TopProductCard> */}
      <TopProductList></TopProductList>

      <ProductCard></ProductCard>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  }
})

export default App;