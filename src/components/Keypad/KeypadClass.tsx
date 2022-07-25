import { buttons } from '@constants/index';
import { Component } from 'react';
import { KeypadButton, KeypadContainer } from './components';

class KeypadClass extends Component {
  render() {
    return (
      <KeypadContainer>
        {buttons.map((item) => (
          <KeypadButton key={item.char}>{item.char}</KeypadButton>
        ))}
        <KeypadButton>+/-</KeypadButton>
      </KeypadContainer>
    );
  }
}

export default KeypadClass;
