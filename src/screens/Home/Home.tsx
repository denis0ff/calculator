import { Display } from '@components/Display';
import ErrorBoundary from '@components/ErrorBoundary';
import { History } from '@components/History';
import { Keypad } from '@components/Keypad';
import { useTypedDispatch, useTypedSelector } from '@hooks/.';
import { SetCalculatorPayload } from '@interfaces/.';
import { clearHistory, setCalculator } from '@store/.';
import { useReducer } from 'react';
import { HomeContainer, HomeWrapper, HistoryContainer, HistoryButton } from './components';

const Home = () => {
  const { displayValue, displayExpression, history } = useTypedSelector(
    (state) => state.calculator
  );
  const dispatch = useTypedDispatch();

  const [showHistory, toggleHistory] = useReducer((showHistory) => !showHistory, true);

  const handleKeypadClick = (action: SetCalculatorPayload) => dispatch(setCalculator(action));
  const handleClearHistory = () => dispatch(clearHistory());

  return (
    <HomeContainer>
      <HomeWrapper>
        <ErrorBoundary fallback="Something is wrong with display. Try to reload the page, please">
          <Display value={displayValue} expression={displayExpression} />
        </ErrorBoundary>
        <ErrorBoundary fallback="Something is wrong with keypad. Try to reload the page, please">
          <Keypad onKeyClick={handleKeypadClick} />
        </ErrorBoundary>
      </HomeWrapper>
      <HistoryContainer showHistory={showHistory} data-test-id="history">
        <HistoryButton data-test-id="history-toggler" onClick={toggleHistory} />
        {showHistory && (
          <ErrorBoundary fallback="Something is wrong with history. Try to reload the page, please">
            <History history={history} clearHistory={handleClearHistory} />
          </ErrorBoundary>
        )}
      </HistoryContainer>
    </HomeContainer>
  );
};

export default Home;
