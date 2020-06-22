import { StyleSheet } from 'react-native';
import { STYLE } from '../../../../environment/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: STYLE.COLOR.WHITE,
  },
  message: {
    color: STYLE.COLOR.GREY,
    fontSize: STYLE.FONT_SIZE.HEADLINES,
  },
});

export default styles;
