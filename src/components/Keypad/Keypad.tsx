import { buttons } from '@constants/buttons';
import { FC } from 'react';
import { KeypadContainer, KeypadButton } from './components';
import { Props } from './types';

const Keypad: FC<Props> = ({ onKeyClick }) => {
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
};

export default Keypad;
