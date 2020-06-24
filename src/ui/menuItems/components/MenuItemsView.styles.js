import { StyleSheet } from 'react-native';
import { STYLE } from '../../../environment/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: STYLE.COLOR.WHITE,
  },
  title: {
    position: 'absolute',
    top: 24,
    textAlign: 'center',
    fontSize: STYLE.FONT_SIZE.HEADLINES,
  },
  backTouchable: {
    position: 'absolute',
    left: 24,
    top: 24,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  loader: {
    width: 35,
    height: 35,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
    marginTop: 70,
    paddingTop: 10,
  },
  itemCard: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: STYLE.SPACING.MINIMAL,
    borderRadius: 5,
    marginHorizontal: STYLE.SPACING.DEFAULT,
    marginVertical: STYLE.SPACING.MINIMAL,
    shadowColor: STYLE.COLOR.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 5,
    backgroundColor: STYLE.COLOR.WHITE,
  },
  name: {
    textAlign: 'center',
    margin: STYLE.SPACING.MINIMAL,
  },
  price: {
    textAlign: 'center',
    margin: STYLE.SPACING.MINIMAL,
    color: STYLE.COLOR.CERULEAN,
  },
  verticalSpace: {
    height: 30,
  },
});

export default styles;
