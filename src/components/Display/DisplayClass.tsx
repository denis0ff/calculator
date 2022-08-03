import { Component } from 'react';
import { DisplayContainer } from './components';
import { Props } from './types';

class DisplayClass extends Component<Props> {
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

export default DisplayClass;
