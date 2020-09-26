import { createStore } from 'redux';
import rootReducer from '../reducers';

const inititalState = {};

export default () => {
	const store = createStore(rootReducer, inititalState);

	return store;
};
