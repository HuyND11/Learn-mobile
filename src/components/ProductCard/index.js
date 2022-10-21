import { Image, View, Text } from "react-native";
import styles from "./style";

const ProductCard = () => {
    return (
        <View style = {styles.card}>
            <View style = {styles.card_aside}>
                <Image style = {styles.card_iamge} source={require("../../../assets/images/topProduct/topProduct1.png")}/>
            </View>
            <View style = {styles.card_body}>
                <Text style = {styles.card_title}>
                Accu-check Active
Test Strip
                </Text>
                <View style = {styles.card_sub_body}>
                    <Text style = {styles.card_price}>
        aaa
                    </Text>
                    <View style = {styles.card_review_wrapper}>
                        <Text style = {styles.card_review}>
eee
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductCard;