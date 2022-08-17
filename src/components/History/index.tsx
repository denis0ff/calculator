import React from 'react';
import { FC } from 'react';
import { HistoryTitle, HistoryButton, HistoryList } from './styled';

type Props = {
  history: string[];
  clearHistory: () => void;
};

const History: FC<Props> = ({ history, clearHistory }) => {
  return (
    <>
      <HistoryTitle>History</HistoryTitle>
      <HistoryButton data-test-id="clear-history" onClick={clearHistory}>
        Clear
      </HistoryButton>
      <HistoryList>
        {history.map((item, idx) => (
          <li key={item + idx}>{item}</li>
        ))}
      </HistoryList>
    </>
  );
};

export default React.memo(History);
