import { useCallback, useReducer } from 'react';
import Display from '@components/Display';
import History from '@components/History';
import Keypad from '@components/Keypad';
import ErrorBoundary from '@components/ErrorBoundary';
import { useTypedDispatch, useTypedSelector } from '@hooks';
import { SetCalculatorPayload } from '@interfaces';
import { clearHistory, setCalculator } from '@store';
import { HomeContainer, HomeWrapper, HistoryContainer, HistoryButton } from './styled';

const Home = () => {
  const { displayValue, displayExpression, history } = useTypedSelector(
    (state) => state.calculator
  );
  const dispatch = useTypedDispatch();

  const [showHistory, toggleHistory] = useReducer((showHistory) => !showHistory, true);

  const handleKeypadClick = useCallback(
    (action: SetCalculatorPayload) => dispatch(setCalculator(action)),
    [dispatch]
  );

  const handleClearHistory = useCallback(() => dispatch(clearHistory()), [dispatch]);

  return (
    <HomeContainer>
      <ErrorBoundary fallback="Something went wrong. Try to reload the page, please">
        <HomeWrapper>
          <Display value={displayValue} expression={displayExpression} />
          <Keypad onKeyClick={handleKeypadClick} />
        </HomeWrapper>
        <HistoryContainer showHistory={showHistory} data-test-id="history">
          <HistoryButton data-test-id="history-toggler" onClick={toggleHistory} />
          {showHistory && <History history={history} clearHistory={handleClearHistory} />}
        </HistoryContainer>
      </ErrorBoundary>
    </HomeContainer>
  );
};

export default Home;
