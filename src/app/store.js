import { createStore } from 'redux';
import rootReducer from '../feature/rootReducer';

const store = createStore(rootReducer);

export default store;
