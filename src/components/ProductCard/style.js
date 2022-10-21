import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 157,
    height: 250,
    backgroundColor: '#F5F7FA',
    borderColor: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },

  card_aside: {
    width: '100%',
    height: '70%',
    padding: 20,
  },

  card_iamge: {
    // width: '100%',
    // height: '100%',
    // resizeMode: 'contain',
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch',
  },

  card_body: {
    paddingLeft: 16,
  },

  card_title: {
    maxWidth: 108,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 19,
    color: '#090F47',
    textTransform: 'capitalize',
  },

  card_sub_body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  card_price: {},

  card_review_wrapper: {},

  card_review: {},
});

export default styles;
