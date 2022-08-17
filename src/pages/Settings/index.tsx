import { ChangeEventHandler } from 'react';
import { Button, Select, SettingsWrapper } from './styled';
import { themes } from '@constants';
import { useTypedDispatch, useTypedSelector } from '@hooks';
import { clearAll, setTheme } from '@store';

const Settings = () => {
  const { theme: currentTheme } = useTypedSelector((state) => state.theme);
  const dispatch = useTypedDispatch();

  const handleOptionClick: ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
    dispatch(setTheme(target.value));
  };

  const handleClearClick = () => dispatch(clearAll());

  return (
    <SettingsWrapper>
      <h2>Settings</h2>
      <Select data-test-id="select-theme" onChange={handleOptionClick} defaultValue={currentTheme}>
        {Object.values(themes).map((theme) => (
          <option key={theme} value={theme}>
            {theme} theme
          </option>
        ))}
      </Select>
      <Button data-test-id="button-clear-all" onClick={handleClearClick}>
        Clear All History
      </Button>
    </SettingsWrapper>
  );
};

export default Settings;
