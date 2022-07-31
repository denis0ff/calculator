import { Component } from 'react';
import { HistoryContainer, HistoryTitle, HistoryList, HistoryButton } from './components';

type Props = {
  history: string[];
  clearHistory: () => void;
};

class HistoryClass extends Component<Props> {
  render() {
    const { history, clearHistory } = this.props;
    return (
      <HistoryContainer>
        <HistoryTitle>History</HistoryTitle>
        <HistoryButton onClick={clearHistory}>Clear</HistoryButton>
        <HistoryList>
          {history.map((item, idx) => (
            <li key={item + idx}>{item}</li>
          ))}
        </HistoryList>
      </HistoryContainer>
    );
  }
}

export default HistoryClass;
