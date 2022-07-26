import { buttons } from '@constants/index';
import { Actions } from '@interfaces/index';
import { Component } from 'react';
import { KeypadButton, KeypadContainer } from './components';

type Props = {
  actions: Actions;
};

class KeypadClass extends Component<Props> {
  handleClick = (key: string, char: string) => () => {
    const { actions } = this.props;
    actions[key](char);
  };

  render() {
    return (
      <KeypadContainer>
        {buttons.map(({ char, type }) => (
          <KeypadButton key={char} onClick={this.handleClick(type, char)}>
            {char}
          </KeypadButton>
        ))}
      </KeypadContainer>
    );
  }
}

export default KeypadClass;
