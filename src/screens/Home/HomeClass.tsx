import { Component } from 'react';
import { connect } from 'react-redux';
import { DisplayClass } from '@components/Display';
import HistoryClass from '@components/History';
import { KeypadClass } from '@components/Keypad';
import { calculateExpression, Calculator, resolveBrackets } from '@helpers/.';
import { SetStateAction, HomeClassProps as Props } from '@interfaces/.';
import { mapDispatchToProps, mapStateToProps } from '@store/.';
import { HomeContainer, HomeWrapper } from './components';

class HomeClass extends Component<Props> {
  calculator: Calculator;
  constructor(props: Props) {
    super(props);
    this.calculator = new Calculator();
  }

  handleKeypadClick = (action: SetStateAction) => {
    const { displayValue, displayExpression, setResult, setState, addHistory } = this.props;
    if (action.type !== 'result') setState(action);
    else {
      const withResolvedBrackets = resolveBrackets(`${displayExpression}${displayValue}`);
      setResult(calculateExpression(withResolvedBrackets, this.calculator));
      addHistory(withResolvedBrackets);
    }
  };

  handleClearHistory = () => this.props.clearHistory();

  render() {
    const { displayValue, displayExpression, history } = this.props;

    return (
      <HomeContainer>
        <HomeWrapper>
          <DisplayClass value={displayValue} expression={displayExpression} />
          <KeypadClass onKeyClick={this.handleKeypadClick} />
        </HomeWrapper>
        <HistoryClass history={history} clearHistory={this.handleClearHistory} />
      </HomeContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeClass);
