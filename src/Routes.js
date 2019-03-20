import React from 'react';
import {Router, Switch , Route } from 'react-router-dom';
import SignIn from './user/SignIn';
import SingUp from './user/signup';
import HeaderFile from './HeaderFile';

class App extends React.Component{
    render(){
        return(
            <Router history={history}>
            <div className="App">
                <HeaderFile />
                <Switch>
                     <Route path='/user/signin' exact component={SignIn} />
                    <Route path='/user/signup' exact component={SingUp} />
                </Switch>
                </div>
            </Router>
        );
    }
}

export default App;