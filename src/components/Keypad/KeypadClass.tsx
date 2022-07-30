import { buttons } from '@constants/index';
import { SetStateAction } from '@interfaces/index';
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
          <KeypadButton key={char} onClick={() => onKeyClick({ type, char })}>
            {char}
          </KeypadButton>
        ))}
      </KeypadContainer>
    );
  }
}

export default KeypadClass;
