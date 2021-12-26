import authReducer from '../reducer/auth.reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    auth: authReducer
});

export default reducer;