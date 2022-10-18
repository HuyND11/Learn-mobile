import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    bannerWrapper: {
        marginTop: 18,
        height: 140,
        position: 'relative',
    },
    bannerImage: {
        resizeMode: 'stretch',
        width: "100%",
        height: "100%"
    },
    bannerContent: {
        position: 'absolute',
        width: 124,
        top: 28,
        left: 24,
    },
    bannerText: {
        textAlign: 'left'
    },
    bannerTitle: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 21,
        color: '#1989FB'
    },
    bannerSubTitle: {
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 16,
        color: '#090F47'
    }
})

export default styles;