import { Component } from 'react';
import { DisplayContainer } from './components';

export default class DisplayClass extends Component {
  render() {
    return (
      <DisplayContainer>
        <p>Expression</p>
        <p>Value</p>
      </DisplayContainer>
    );
  }
}
