import * as React from 'react';
import ButtonView from '../components/ButtonView';

const ButtonContainer = ({ text, onPress, style }) => {
  return <ButtonView text={text} onPress={onPress} style={style} />;
};

export default ButtonContainer;
