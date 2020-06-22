import { Dimensions, StyleSheet } from 'react-native';
import { STYLE } from '../../../../environment/index';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  touchable: {
    height: STYLE.SPACING.BUTTON_HEIGHT,
    width: window.width * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: STYLE.COLOR.CERULEAN,
    borderRadius: 8,
  },
  text: {
    color: STYLE.COLOR.WHITE,
    fontSize: STYLE.FONT_SIZE.HEADLINES,
  },
});

export default styles;
