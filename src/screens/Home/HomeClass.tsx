import { DisplayClass } from '@components/Display';
import { KeypadClass } from '@components/Keypad';
import { Calculator } from '@helpers/index';
import { SetStateAction } from '@interfaces/index';
import { mapDispatchToProps, mapStateToProps, State } from '@store/reducers/calculator';
import { Component } from 'react';
import { connect } from 'react-redux';

interface Props extends State {
  setState: (action: SetStateAction) => void;
  setResult: (action: Calculator) => void;
}

class HomeClass extends Component<Props> {
  calculator: Calculator;
  constructor(props: Props) {
    super(props);
    this.calculator = new Calculator();
  }

  handleKeypadClick = (action: SetStateAction) => {
    action.type === 'result' ? this.props.setResult(this.calculator) : this.props.setState(action);
  };

  render() {
    const { displayValue, displayExpression } = this.props;

    return (
      <section>
        <DisplayClass value={displayValue} expression={displayExpression} />
        <KeypadClass onKeyClick={this.handleKeypadClick} />
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeClass);

// export default HomeClass;
