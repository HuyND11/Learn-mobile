import { Image, Text, View } from "react-native";
import styles from "./style";

const TopProductCard = ({image, name}) => {
    return (
        <View style = {styles.card}>
            <Image style = {styles.cardImage} source = {require ('../../../assets/images/banner.png')} />
            <Text style = {styles.cardTitle}>Sugar Substitute</Text>
        </View>
    )
}

export default TopProductCard;