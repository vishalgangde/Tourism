import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import packageReducer from './packageReducer';



export default combineReducers({
    form : formReducer,
    package: packageReducer
});
 
