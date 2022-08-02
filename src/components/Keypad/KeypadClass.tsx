import { buttons } from '@constants/.';
import { SetStateAction } from '@interfaces/.';
import { Component } from 'react';
import { KeypadButton, KeypadContainer } from './components';

type Props = {
  onKeyClick: (payload: SetStateAction) => void;
};

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
