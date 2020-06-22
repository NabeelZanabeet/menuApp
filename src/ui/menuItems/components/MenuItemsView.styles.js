import { StyleSheet } from 'react-native';
import { STYLE } from '../../../environment/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: STYLE.COLOR.WHITE,
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
  scrollView: {
    flex: 1,
    marginTop: 70,
    paddingTop: 10,
    paddingBottom: 20,
  },
  itemCard: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: STYLE.SPACING.MINIMAL,
    borderRadius: 5,
    marginHorizontal: STYLE.SPACING.DEFAULT,
    marginBottom: STYLE.SPACING.VIEW_MARGIN,
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
});

export default styles;
