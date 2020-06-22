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
});

export default styles;
