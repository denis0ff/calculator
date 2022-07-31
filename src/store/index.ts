import { ClassComponentState } from '@interfaces/.';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import calculator, { setResult, setState } from './reducers/calculator';
import history, { addHistory, clearHistory } from './reducers/history';

export const rootReducer = combineReducers({
  calculator,
  history,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const mapStateToProps = ({ calculator, history }: ClassComponentState) => ({
  ...calculator,
  ...history,
});

export const mapDispatchToProps = { setState, setResult, addHistory, clearHistory };
