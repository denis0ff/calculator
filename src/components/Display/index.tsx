import React from 'react';
import { FC } from 'react';
import { DisplayContainer } from './styled';

type Props = {
  value: string;
  expression: string;
};

const Display: FC<Props> = ({ expression, value }) => {
  return (
    <DisplayContainer>
      <p data-test-id="display-expression">{expression}</p>
      <p data-test-id="display-value">{value}</p>
    </DisplayContainer>
  );
};

export default React.memo(Display);
