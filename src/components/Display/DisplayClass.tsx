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
        <p>{expression}</p>
        <p>{value}</p>
      </DisplayContainer>
    );
  }
}
