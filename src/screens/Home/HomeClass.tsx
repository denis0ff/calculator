import { Component } from 'react';
import { connect } from 'react-redux';
import { DisplayClass } from '@components/Display';
import HistoryClass from '@components/History';
import { KeypadClass } from '@components/Keypad';
import { SetStateAction, HomeClassProps as Props, ClassComponentState } from '@interfaces/.';
import { HistoryContainer, HomeContainer, HomeWrapper } from './components';
import { setState, clearHistory } from '@store/.';
import ErrorBoundary from '@components/ErrorBoundary';

class HomeClass extends Component<Props> {
  handleKeypadClick = (action: SetStateAction) => {
    this.props.setState(action);
  };

  handleClearHistory = () => this.props.clearHistory();

  render() {
    const { displayValue, displayExpression, history } = this.props;

    return (
      <HomeContainer>
        <HomeWrapper>
          <ErrorBoundary fallback="Something wrong with display. Try to reload the page, please">
            <DisplayClass value={displayValue} expression={displayExpression} />
          </ErrorBoundary>
          <ErrorBoundary fallback="Something wrong with keypad. Try to reload the page, please">
            <KeypadClass onKeyClick={this.handleKeypadClick} />
          </ErrorBoundary>
        </HomeWrapper>
        <HistoryContainer data-test-id="history">
          <ErrorBoundary fallback="Something wrong with history. Try to reload the page, please">
            <HistoryClass history={history} clearHistory={this.handleClearHistory} />
          </ErrorBoundary>
        </HistoryContainer>
      </HomeContainer>
    );
  }
}

export const mapStateToProps = ({ calculator }: ClassComponentState) => ({
  ...calculator,
});

export const mapDispatchToProps = { setState, clearHistory };

export default connect(mapStateToProps, mapDispatchToProps)(HomeClass);
