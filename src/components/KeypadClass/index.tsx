import { buttons } from '@constants';
import { PureComponent } from 'react';
import { SetCalculatorPayload } from 'src/interfaces';
import { KeypadButton, KeypadContainer } from './styled';

type Props = {
  onKeyClick: (payload: SetCalculatorPayload) => void;
};

class KeypadClass extends PureComponent<Props> {
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
