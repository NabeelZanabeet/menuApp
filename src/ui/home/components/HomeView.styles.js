import { Dimensions, StyleSheet } from 'react-native';
import { STYLE } from '../../../environment/index';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: STYLE.COLOR.WHITE,
  },
  logo: {
    width: window.width * 0.75,
    height: 90,
    marginBottom: 3 * STYLE.SPACING.DEFAULT,
  },
  button: {
    marginBottom: STYLE.SPACING.VIEW_MARGIN,
  },
});

export default styles;
