import { createStore } from "./core.js";
import reducer from "./reducer.js";
import logger from "../middle/logger.js";

const {attach, dispatch, connect}  = createStore(logger(reducer));

window.dispatch = dispatch

export {
    attach, connect
}