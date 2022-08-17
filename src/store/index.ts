import { combineReducers, configureStore } from '@reduxjs/toolkit';
import calculator, { setCalculator, clearHistory, clearAll } from './reducers/calculator';
import theme, { setTheme } from './reducers/theme';

export const rootReducer = combineReducers({
  calculator,
  theme,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export { setCalculator, clearHistory, clearAll, setTheme };
