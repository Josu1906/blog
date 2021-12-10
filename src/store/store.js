import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {articulosReducers} from '../reducers/articulosReducers';
import thunk from 'redux-thunk';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    articles: articulosReducers
});

export const store = createStore(reducers, composeEnhancers( applyMiddleware(thunk)));
