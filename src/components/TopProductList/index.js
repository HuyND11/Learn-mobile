import {ScrollView, View, Text} from 'react-native';
import TopProductCard from '../TopProductCard';
import styles from './style';
const TopProductList = () => {
  return (
    <View style={styles.topProductList}>
      <Text style={styles.topProductHeading}>Diabetic Diet</Text>
      <ScrollView horizontal={true}>
        <TopProductCard
          name="Huy ne"
          uri={require('../../../assets/images/topProduct/topProduct1.png')}></TopProductCard>
        <TopProductCard
          name="Huy ne"
          uri={require('../../../assets/images/topProduct/topProduct2.png')}></TopProductCard>
        <TopProductCard
          name="Huy ne"
          uri={require('../../../assets/images/topProduct/topProduct3.png')}></TopProductCard>
        <TopProductCard
          name="Huy ne"
          uri={require('../../../assets/images/topProduct/topProduct1.png')}></TopProductCard>
        <TopProductCard
          name="Huy ne"
          uri={require('../../../assets/images/topProduct/topProduct2.png')}></TopProductCard>
        <TopProductCard
          name="Huy ne"
          uri={require('../../../assets/images/topProduct/topProduct3.png')}></TopProductCard>
      </ScrollView>
    </View>
  );
};

export default TopProductList;
