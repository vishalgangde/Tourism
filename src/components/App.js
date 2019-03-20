import React from 'react';
import {Router, Switch , Route } from 'react-router-dom';
import SignIn from '../user/SignIn';
import SingUp from '../user/SignUp';
import HeaderFile from '../HeaderFile';
import history from '../history';
import Packages from './Packages';
import Flights from './Flights';
import Forum from './Forum';
import Holidays from './Holidays';
import Hotels from './Hotels';
import Inspirations from './Inspirations';
import Trips from './Trips'

class App extends React.Component{
    render(){
        return(
            <Router history={history}>
            <div className="App">
                    
                
                <Switch>
                    <Route path='/' exact component={Packages} />
                     <Route path='/user/signin' exact component={SignIn} />
                    <Route path='/user/signup' exact component={SingUp} />
                    <Route path='/flights' exact component={Flights} />
                    <Route path='/forum' exact component={Forum} />
                    <Route path='/holidays' exact component={Holidays} />
                    <Route path='/hotels' exact component={Hotels} />
                    <Route path='/inspirations' exact component={Inspirations} />
                    <Route path='/trips' exact component={Trips} />
                </Switch>
                </div>
            </Router>
        );
    }
}

export default App;