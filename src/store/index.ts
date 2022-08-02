import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setState, clearHistory, clearAll } from './reducers/calculator';
import calculator from './reducers/calculator';

export const rootReducer = combineReducers({
  calculator,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { setState, clearHistory, clearAll };
