import { Component } from 'react';
import { DisplayContainer } from './components';

type Props = {
  value: string;
  expression: string;
};

export default class DisplayClass extends Component<Props> {
  render() {
    const { expression, value } = this.props;
    return (
      <DisplayContainer>
        <p data-test-id="display-expression">{expression}</p>
        <p data-test-id="display-value">{value}</p>
      </DisplayContainer>
    );
  }
}
