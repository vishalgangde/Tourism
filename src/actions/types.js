import posts from '../apis/posts';
import history from '../history' 



export const signInAction = (formValues) => async (dispatch) => {
    console.log(formValues)

        try{
            //sign api calling with post method also use local storage and toaster
            const response  = await posts.post('/jwt-auth/v1/token',{...formValues});
            console.log(response);
            
            localStorage.setItem("authToken",response.data.token);
            localStorage.setItem("displayname",response.data.user_display_name);
            localStorage.setItem("userId",response.data.user_id);
            console.log('renderAdminList',localStorage.getItem('userId'));
            console.log('renderAdminList',localStorage.getItem('authToken'));
            console.log('renderAdminList',localStorage.getItem('displayname'));
            
            //toastr.success(`SignIn Successfully`,`${formValues.username}`)
           
            if(localStorage.getItem('authToken')){
            history.push('/user/signin');
            }
            else if(!localStorage.getItem('authToken')){
                history.push('/')
            }
        
        }
        catch(error){
            console.log('renderAdminList',localStorage.getItem('userId'));
            //toastr.error(`WARNING!!!Please Try Again`,`${formValues.username}`)
            //toastrSuccessFunction(`SignIn Successful`,`${formValues.username}`)
        }
       
    }
      
//log out action creator with local storage and toaster
export const signOutAction = () => async (dispatch) =>  {

    
    localStorage.removeItem("authToken");
    console.log("authToken",localStorage.removeItem('authToken'));
    
    localStorage.removeItem("displayname");
    console.log("displayname",localStorage.removeItem('displayname'));

    localStorage.removeItem("userId");
    console.log("userId",localStorage.removeItem('userId'));
    history.push('/user/signin')
    
    };

//registration action creator with api calling with post method
export const RegisterUserAction = formValues => async (dispatch) => {
    console.log(formValues)
        try{
            const response = await posts.post('/wp/v2/users/register',{ ...formValues } );
            //toastrSuccessFunction(`${response.data.message}`,`${formValues.username}`)
            console.log(response.data,'RegisterUser');
            //toastr.success(`SignIn Successfully`,`${formValues.username}`)
            history.push('/user/signup');
        }
    

        catch(error){
           // toastr.error(`WARNING!!!Please Try Again`,`${formValues.username}`)
            //toastrWarningFunction(`Registeration Failed`,`${formValues.username}`);
        }

};