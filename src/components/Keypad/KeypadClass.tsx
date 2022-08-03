import { buttons } from '@constants/.';
import { Component } from 'react';
import { KeypadButton, KeypadContainer } from './components';
import { Props } from './types';

class KeypadClass extends Component<Props> {
  render() {
    const { onKeyClick } = this.props;
    return (
      <KeypadContainer>
        {buttons.map(({ char, type }) => (
          <KeypadButton
            key={char}
            data-test-id={`button-${char}`}
            onClick={() => onKeyClick({ type, char })}
          >
            {char}
          </KeypadButton>
        ))}
      </KeypadContainer>
    );
  }
}

export default KeypadClass;
