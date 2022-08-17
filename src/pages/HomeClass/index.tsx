import { Component } from 'react';
import { connect } from 'react-redux';
import Display from '@components/DisplayClass';
import History from '@components/HistoryClass';
import Keypad from '@components/KeypadClass';
import ErrorBoundary from '@components/ErrorBoundary';
import { SetCalculatorPayload, HomeClassProps as Props, ClassComponentState } from '@interfaces';
import { setCalculator, clearHistory } from '@store';
import { HomeContainer, HomeWrapper, HistoryContainer, HistoryButton } from './styled';

type State = {
  showHistory: boolean;
};
class HomeClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { showHistory: true };
    this.toggleHistory = this.toggleHistory.bind(this);
  }

  handleKeypadClick = (action: SetCalculatorPayload) => {
    this.props.setCalculator(action);
  };

  handleClearHistory = () => this.props.clearHistory();

  toggleHistory() {
    this.setState((prev) => ({ showHistory: !prev.showHistory }));
  }

  render() {
    const { displayValue, displayExpression, history } = this.props;
    const { showHistory } = this.state;
    return (
      <HomeContainer>
        <ErrorBoundary fallback="Something went wrong. Try to reload the page, please">
          <HomeWrapper>
            <Display value={displayValue} expression={displayExpression} />
            <Keypad onKeyClick={this.handleKeypadClick} />
          </HomeWrapper>
          <HistoryContainer showHistory={showHistory} data-test-id="history">
            <HistoryButton data-test-id="history-toggler" onClick={this.toggleHistory} />
            {showHistory && <History history={history} clearHistory={this.handleClearHistory} />}
          </HistoryContainer>
        </ErrorBoundary>
      </HomeContainer>
    );
  }
}

const mapStateToProps = ({ calculator }: ClassComponentState) => ({
  ...calculator,
});

const mapDispatchToProps = { setCalculator, clearHistory };

export default connect(mapStateToProps, mapDispatchToProps)(HomeClass);
