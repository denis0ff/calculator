import { FC } from 'react';
import { DisplayContainer } from './components';
import { Props } from './types';

const Display: FC<Props> = ({ expression, value }) => {
  return (
    <DisplayContainer>
      <p data-test-id="display-expression">{expression}</p>
      <p data-test-id="display-value">{value}</p>
    </DisplayContainer>
  );
};

export default Display;
