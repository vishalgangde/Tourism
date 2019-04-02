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
import forgotPassword from '../user/forgotPassword';
import LehLadakh from './TourPackages/LehLadakh';
import GujratRoyality from './TourPackages/GujratRoyality'
import NorthEast from './TourPackages/NorthEast';
import Pondicherry from './TourPackages/Pondicherry';
import Kerela from './TourPackages/Kerela';
import Andaman from './TourPackages/Andaman';
import Manali from './TourPackages/Manali';
import Rajasthan from './TourPackages/Rajasthan';
import Goa from './TourPackages/Goa';
import LehtoManali from './TourPackages/LehtoManali';
import GuwahatitoTawang from './TourPackages/GuwahatitoTawang';
import ShimlaToManali from './TourPackages/ShimlaToManali';
import Beaches from './Inspirations/Beaches';
import Heritage from './Inspirations/Heritage';
import HoneymoonPackages from './Inspirations/HoneymoonPackages';
import Mountains from './Inspirations/Mountains';
import RoadTrips from './Inspirations/RoadTrips';
import WildlifeTourism from './Inspirations/WildlifeTourism';
import FamilyHolidays from './Categories/FamilyHolidays';
import FriendsTrips from './Categories/FriendsTrips';
import HoneymoonSpecial from './Categories/HoneymoonSpecial';
import BudgetGetaways from './Categories/BudgetGetaways';
import ThrillingTreks from './Categories/ThrillingTreks';
import LuxuryEscapes from './Categories/LuxuryEscapes';
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
                    <Route path='/user/forgotpassword' exact component={forgotPassword} />
                    <Route path='/lehladakh' exact component={LehLadakh} />
                    <Route path='/Gujrat Royality' exact component={GujratRoyality} />
                    <Route path='/tour-package/North-East' exact component={NorthEast} />
                    <Route path='/tour-package/Pondicherry' exact component={Pondicherry} />
                    <Route path='/tour-package/Kerela Chavakkad' exact component={Kerela} />
                    <Route path='/tour-package/Andaman Nikobar Beach' exact component={Andaman} />
                    <Route path='/tour-package/Rohtang Pass Manali' exact component={Manali} />
                    <Route path='/tour-package/Rajasthan' exact component={Rajasthan} />
                    <Route path='/tour-package/Goa Chapora Beach' exact component={Goa} />
                    <Route path='/tour-package/Leh to Manali' exact component={LehtoManali} />
                    <Route path='/tour-package/Guwahati to Tawang' exact component={GuwahatitoTawang} />
                    <Route path='/tour-package/Shimla to Manali' exact component={ShimlaToManali} />
                    <Route path='/inspiration/beaches' exact component={Beaches} />
                    <Route path='/inspiration/Heritage' exact component={Heritage} />
                    <Route path='/inspiration/HoneymoonPackages' exact component={HoneymoonPackages} />
                    <Route path='/inspiration/Mountains' exact component={Mountains} />
                    <Route path='/inspiration/RoadTrips' exact component={RoadTrips } />
                    <Route path='/inspiration/WildlifeTourism' exact component={WildlifeTourism} />
                    <Route path='/categories/family' exact component={FamilyHolidays} />
                    <Route path='/categories/friends' exact component={FriendsTrips} />
                    <Route path='/categories/honeymoon' exact component={HoneymoonSpecial} />
                    <Route path='/categories/budget' exact component={BudgetGetaways} />
                    <Route path='/categories/thrillingtreks' exact component={ThrillingTreks} />
                    <Route path='/categories/luxuryescapes' exact component={LuxuryEscapes} />





                    
            </Switch>
            </div>
        </Router>
        );
    }
}

export default App;