import { View, Image, Text } from "react-native";
import styles from "./style";

const Banner = () => {
    return (
        <View style = {styles.bannerWrapper}>
            <Image source={require("../../../assets/images/banner.png")} style = {styles.bannerImage}/>
            <View style = {styles.bannerContent}>
                <Text style = {[styles.bannerTitle, styles.bannerText]}>Save extra on every order</Text>
                <Text style = {[styles.bannerSubTitle, styles.bannerText]}>Etiam mollis metus non faucibus sollicitudin. </Text>
            </View>
        </View>
    )
}

export default Banner;