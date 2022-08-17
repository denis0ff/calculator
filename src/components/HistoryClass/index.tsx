import { PureComponent } from 'react';
import { HistoryTitle, HistoryList, HistoryButton } from './styled';

type Props = {
  history: string[];
  clearHistory: () => void;
};

class HistoryClass extends PureComponent<Props> {
  render() {
    const { history, clearHistory } = this.props;
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
  }
}

export default HistoryClass;
