import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        width: 110,
        height: 162,
        borderRadius: 10,
    },
    cardImage: {
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
    },
    cardTitle: {
        width: '100%',
        height: '30%',
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: "#F5F7FA",
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 18,
    }
})

export default styles;