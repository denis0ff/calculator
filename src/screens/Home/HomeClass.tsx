import { DisplayClass } from '@components/Display';
import { KeypadClass } from '@components/Keypad';
import { Component } from 'react';

class HomeClass extends Component {
  render() {
    return (
      <section>
        <DisplayClass />
        <KeypadClass />
      </section>
    );
  }
}

export default HomeClass;
