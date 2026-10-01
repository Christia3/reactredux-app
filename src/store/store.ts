import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;