import { connect } from 'react-redux';
import { ThemeContextType } from '@interfaces/.';
import { clearAll } from '@store/.';
import { ChangeEventHandler, Component } from 'react';
import { ThemeContext } from 'styled-components';
import { Button, Select, SettingsWrapper } from './components';

type Props = { clearAll: () => void };

class Settings extends Component<Props> {
  static contextType = ThemeContext;
  handleOptionClick: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { dispatch } = this.context as ThemeContextType;
    dispatch(e.target.value);
  };

  handleClearClick = () => this.props.clearAll();

  render() {
    const { currentTheme } = this.context as ThemeContextType;
    return (
      <SettingsWrapper>
        <h2>Settings</h2>
        <Select onChange={this.handleOptionClick} defaultValue={currentTheme}>
          <option value="dark">Dark theme</option>
          <option value="light">Light theme</option>
        </Select>
        <Button onClick={this.handleClearClick}>Clear All History</Button>
      </SettingsWrapper>
    );
  }
}

export const mapDispatchToProps = { clearAll };

export default connect(null, mapDispatchToProps)(Settings);
