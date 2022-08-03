import { combineReducers, configureStore } from '@reduxjs/toolkit';
import calculator, { setCalculator, clearHistory, clearAll } from './reducers/calculator';

export const rootReducer = combineReducers({
  calculator,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export { setCalculator, clearHistory, clearAll };
