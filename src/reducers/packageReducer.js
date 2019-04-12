
import {
   USER_REGISTER
    /*FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM*/
} from '../actions/types';

//fetch data from API and using key interpolation sends it to new state
export default ( state = {},action) => {
    switch(action.type){
        //fetch a record and create state
        case USER_REGISTER:
        return {...state, [action.payload] : action.payload };

        default:
        return state;
    }
}