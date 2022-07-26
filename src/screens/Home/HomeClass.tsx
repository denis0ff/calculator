import { DisplayClass } from '@components/Display';
import { KeypadClass } from '@components/Keypad';
import { calculateExpression, Calculator } from '@helpers/index';
import { Actions } from '@interfaces/index';
import { Component } from 'react';

type Props = null;

type State = {
  displayValue: string;
  displayExpression: string;
  isCalculated: boolean;
};
class HomeClass extends Component<Props, State> {
  calculator: Calculator;
  actions: Actions;
  constructor(props: Props) {
    super(props);
    this.state = {
      displayValue: '',
      displayExpression: '',
      isCalculated: false,
    };

    this.calculator = new Calculator();

    this.actions = Object.create(this, {
      digit: { value: this.handleDigitClick.bind(this) },
      operand: { value: this.handleOperandClick.bind(this) },
    });
  }

  handleDigitClick(value: string) {
    const { isCalculated } = this.state;
    if (isCalculated) this.setState({ displayValue: value, isCalculated: false });
    else this.setState(({ displayValue }) => ({ displayValue: displayValue + value }));
  }

  handleOperandClick(value: string) {
    if (value === '=')
      this.setState(({ displayValue, displayExpression }) => ({
        displayValue: calculateExpression(
          `${displayExpression} ${displayValue}`.trim(),
          this.calculator
        ),
        displayExpression: '',
        isCalculated: true,
      }));
    else
      this.setState(({ displayValue, displayExpression, isCalculated }) => ({
        displayValue: '',
        displayExpression: `${displayExpression} ${displayValue} ${value}`.trim(),
        isCalculated: isCalculated ? false : true,
      }));
  }

  render() {
    const { displayValue, displayExpression } = this.state;
    return (
      <section>
        <DisplayClass value={displayValue} expression={displayExpression} />
        <KeypadClass actions={this.actions} />
      </section>
    );
  }
}

export default HomeClass;
