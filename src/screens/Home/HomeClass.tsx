import { Component } from 'react';
import { connect } from 'react-redux';
import { DisplayClass } from '@components/Display';
import { HistoryClass } from '@components/History';
import { KeypadClass } from '@components/Keypad';
import { SetCalculatorPayload, HomeClassProps as Props, ClassComponentState } from '@interfaces/.';
import { HistoryButton, HistoryContainer, HomeContainer, HomeWrapper } from './components';
import { setCalculator, clearHistory } from '@store/.';
import ErrorBoundary from '@components/ErrorBoundary';

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
        <HomeWrapper>
          <ErrorBoundary fallback="Something is wrong with display. Try to reload the page, please">
            <DisplayClass value={displayValue} expression={displayExpression} />
          </ErrorBoundary>
          <ErrorBoundary fallback="Something is wrong with keypad. Try to reload the page, please">
            <KeypadClass onKeyClick={this.handleKeypadClick} />
          </ErrorBoundary>
        </HomeWrapper>
        <HistoryContainer showHistory={showHistory} data-test-id="history">
          <HistoryButton data-test-id="history-toggler" onClick={this.toggleHistory} />
          {showHistory && (
            <ErrorBoundary fallback="Something is wrong with history. Try to reload the page, please">
              <HistoryClass history={history} clearHistory={this.handleClearHistory} />
            </ErrorBoundary>
          )}
        </HistoryContainer>
      </HomeContainer>
    );
  }
}

export const mapStateToProps = ({ calculator }: ClassComponentState) => ({
  ...calculator,
});

export const mapDispatchToProps = { setCalculator, clearHistory };

export default connect(mapStateToProps, mapDispatchToProps)(HomeClass);
