import { createStore } from 'redux';
import rootReducer from '../feature/reducers';

const store = createStore(rootReducer);

export default store;
