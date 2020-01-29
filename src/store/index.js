import { createStore, combineReducers } from 'redux';
import divisaBaseReducer from './divisaBase/reducer';

const reducers = combineReducers({
   divisaBaseReducer
});

const store = createStore(
   reducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
