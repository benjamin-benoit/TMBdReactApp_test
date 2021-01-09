import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import root from '../redux/reducers/index';
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = createStore(root, applyMiddleware(thunk, logger))