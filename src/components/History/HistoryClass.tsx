import { Component } from 'react';
import { HistoryTitle, HistoryList, HistoryButton } from './components';
import { Props } from './types';

class HistoryClass extends Component<Props> {
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
