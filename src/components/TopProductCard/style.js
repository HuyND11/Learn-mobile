import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        width: 110,
        height: 162,
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 10,
    },
    cardImage: {
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
        
    },
    cardBody: {
        width: '100%',
        height: '30%',
        backgroundColor: "#F5F7FA",
        alignItems: "center",
        justifyContent: 'center',
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '500',
        lineHeight: 18,
        overflow: 'hidden',
        color: '#000000'
    }
})

export default styles;