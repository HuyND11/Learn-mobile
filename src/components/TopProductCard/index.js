import {Image, Text, View} from 'react-native';
import styles from './style';

const TopProductCard = ({uri, name}) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={uri}
      />
      <View style={styles.cardBody}>
        <Text numberOfLines = {3} style={styles.cardTitle}>{(`name ${name}`)}</Text>
      </View>
    </View>
  );
};

export default TopProductCard;
