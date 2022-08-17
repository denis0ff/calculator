import { PureComponent } from 'react';
import { DisplayContainer } from './styled';

type Props = {
  value: string;
  expression: string;
};

class DisplayClass extends PureComponent<Props> {
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
