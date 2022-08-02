import { Component } from 'react';
import { connect } from 'react-redux';
import { DisplayClass } from '@components/Display';
import HistoryClass from '@components/History';
import { KeypadClass } from '@components/Keypad';
import { SetStateAction, HomeClassProps as Props, ClassComponentState } from '@interfaces/.';
import { HomeContainer, HomeWrapper } from './components';
import { setState, clearHistory } from '@store/.';

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
          <DisplayClass value={displayValue} expression={displayExpression} />
          <KeypadClass onKeyClick={this.handleKeypadClick} />
        </HomeWrapper>
        <HistoryClass history={history} clearHistory={this.handleClearHistory} />
      </HomeContainer>
    );
  }
}

export const mapStateToProps = ({ calculator }: ClassComponentState) => ({
  ...calculator,
});

export const mapDispatchToProps = { setState, clearHistory };

export default connect(mapStateToProps, mapDispatchToProps)(HomeClass);
