import posts from '../apis/tours';
import TourPackages from '../components/TourPackages/Andaman';
import user from '../user/SignUp';

import history from '../history'
import {
    USER_REGISTER,
    SIGN_UP,
    SIGN_IN

} from './types'

import Andaman from '../components/TourPackages/Andaman';
//import Andaman from '../components/TourPackages/Andaman';
    import {toastr} from 'react-redux-toastr';

    const toastrSuccessFunction = (title,msg) => toastr.success(title,msg)
    const toastrWarningFunction = (title,msg) => toastr.error(title,msg) 
    

export const signInAction = (formValues,callback) => async (dispatch) => {
    console.log(formValues)
            //sign api calling with post method also use local storage and toaster
            const response  = await user.post('/tours',{...formValues});
            dispatch({ type : SIGN_IN, payload : response.data});
            console.log(response);
            response.then((res)=>{
                let isloginSuccess = false 
                for (let index = 0; index < res.data.length; index++) {
                const element = res.data[index];
                if(element.email === formValues.email && element.password === formValues.password)
                {
                isloginSuccess = true ;
                history.push('/select')
                
                } else{
                isloginSuccess = false
                }
                }
                if(isloginSuccess){
                alert("vghv")
                callback(res);}
                })
                response.catch((error)=> {
                callback(error.response);
                })
                return {
                type: ' SIGN_IN',
                payload: response
                
                };
                }

      
//log out action creator with local storage and toaster
export const signUpAction = (formValues) => async (dispatch) =>  {
    console.log(formValues)
        try{
            const response = await user.post('/tours',{ ...formValues } );
            dispatch({ type : SIGN_UP, payload : response.data});
            toastr.success(`${response.data.status}`,`${formValues.status}`)
            console.log(response,'RegisterUser');
            toastr.success(`SignIn Successfully`,`${formValues.fullname}`)
            history.push('/');
        }
    

        catch(error){
           toastr.error(`WARNING!!!Please Try Again`,`${formValues.status}`)
            //toastrWarningFunction(`Registeration Failed`,`${formValues.username}`);
        }

};

//registration action creator with api calling with post method
export const RegisterUserAction = formValues => async (dispatch) => {
    console.log(formValues)
        try{
            const response = await TourPackages.post('/tours',{ ...formValues } );
            dispatch({ type : USER_REGISTER , payload : response.data});
            toastr.success(`${response.data.status}`,`${formValues.status}`)
            console.log(response,'RegisterUser');
            toastr.success(`SignIn Successfully`,`${formValues.username}`)
            history.push('/');
        }
    

        catch(error){
           toastr.error(`WARNING!!!Please Try Again`,`${formValues.status}`)
            //toastrWarningFunction(`Registeration Failed`,`${formValues.username}`);
        }

};

