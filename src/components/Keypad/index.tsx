import React from 'react';
import { FC } from 'react';
import { buttons } from '@constants';
import { SetCalculatorPayload } from 'src/interfaces';
import { KeypadContainer, KeypadButton } from './styled';

type Props = {
  onKeyClick: (payload: SetCalculatorPayload) => void;
};

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

export default React.memo(Keypad);
