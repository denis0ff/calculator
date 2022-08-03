import { FC } from 'react';
import { HistoryTitle, HistoryButton, HistoryList } from './components';
import { Props } from './types';

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

export default History;
