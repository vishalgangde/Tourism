import React from 'react';
import {Router, Switch , Route } from 'react-router-dom';
import SignIn from '../user/SignIn';
import SingUp from '../user/SignUp';
import HeaderFile from '../HeaderFile';
import history from '../history';
import Packages from './Packages';
import Flights from './Flights';
import Forum from './Forum';

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
import GoaBeach from './Beaches/GoaBeach';
import PondicherryBeach from './Beaches/PondicherryBeach';
import AndamanBeach from './Beaches/AndamanBeach';
import CoastalTreks from './Beaches/CoastalTreks';
import Flyboarding from './Beaches/Flyboarding';
import KerelaBeach from './Beaches/KerelaBeach';
import MaharastraBeach from './Beaches/MaharastraBeach';
import ScubaBeach from './Beaches/ScubaBeach';
import TamilBeach from './Beaches/TamilBeach';
import ContactUs from './Footer/ContactUs';
import Terms from './Footer/Terms';
import Privacy from './Footer/Privacy';
import Guideline from './Footer/Guideline';
import SikkimMountain from './Footer/Mountains/SikkimMountain';
import HimachalMountain from './Footer/Mountains/HimachalMountain';
import UttarakhndMountain from './Footer/Mountains/UttarakhndMountain';
import KashmirMountain from './Footer/Mountains/KashmirMountain';
import KarnatakaMountain from './Footer/Mountains/KarnatakaMountain';
import KerelaMountain from './Footer/Mountains/KerelaMountain';
import ManaliMountain from './Footer/Mountains/ManaliMountain';
import MunnarMountain from './Footer/Mountains/MunnarMountain';
import RajasthanHeritage from './Heritage/RajasthanHeritage';
import OrissaHeritage from './Heritage/OrissaHeritage';
import TajHeritage from './Heritage/TajHeritage';
import MadhyaHeritage from './Heritage/MadhyaHeritage';
import DelhiHeritage from './Heritage/DelhiHeritage';
import MaharastraHeritage from './Heritage/MaharastraHeritage';
import GwaliorHeritage from './Heritage/GwaliorHeritage';
import GolcondaHeritage from './Heritage/GolcondaHeritage';
import ChittorgarhHeritage from './Heritage/ChittorgarhHeritage';
import FatehpurHeritage from './Heritage/FatehpurHeritage';
import HumayunHeritage from './Heritage/HumayunHeritage';
import TamilHeritage from './Heritage/TamilHeritage';
import KerelaFiveDays from './HoneymoonPackages/KerelaFiveDays';
import KashmirFourDays from './HoneymoonPackages/KashmirFourDays';
import DarjeelingFiveDays from './HoneymoonPackages/DarjeelingFiveDays';
import ManaliFourDays from './HoneymoonPackages/ ManaliFourDays';
import FourDaysGoa from './HoneymoonPackages/FourDaysGoa';
import AndamanVacation from './HoneymoonPackages/AndamanVacation';
import LadakhFiveDays from './HoneymoonPackages/LadakhFiveDAys';
import TigerInIndia from './WildlifeTourism/TigerInIndia';
import ElephantInIndia from './WildlifeTourism/ElephantInIndia';
import AsiaLion from './WildlifeTourism/AsiaLion';
import BestPlaceTiger from './WildlifeTourism/BestPlaceTiger';
import PannaNationalPark from './WildlifeTourism/PannaNationalPark';
import PenchNationalPark from './WildlifeTourism/PenchNationalPark';
import BhadraWildlife from './WildlifeTourism/BhadraWildlife';
import RanipuramWildlife from './WildlifeTourism/RanipuramWildlife';
import SpitivalleyRoad from './RoadTrips/SpitivalleyRoad';
import SoutherIndiaRoad from './RoadTrips/SoutherIndiaRoad';
import RoadTripRajasthan from './RoadTrips/RoadTripRajasthan';
import RoadTripBangalore from './RoadTrips/RoadTripBangalore';
import ThrillRoadTrips from './RoadTrips/ThrillRoadTrips';
import OotyRoadTrip from './RoadTrips/OotyRoadTrip';

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


                    <Route path='/beaches/GoaBeach' exact component={GoaBeach} />
                    <Route path='/beaches/PondicherryBeach' exact component={PondicherryBeach} />
                    <Route path='/beaches/AndamanBeach' exact component={AndamanBeach} />
                    <Route path='/beaches/CoastalTreks' exact component={CoastalTreks} />
                    <Route path='/beaches/Flyboarding' exact component={Flyboarding} />
                    <Route path='/beaches/KerelaBeach' exact component={KerelaBeach} />
                    <Route path='/beaches/MaharastraBeach' exact component={MaharastraBeach} />
                    <Route path='/beaches/ScubaBeach' exact component={ScubaBeach} />
                    <Route path='/beaches/TamilBeach' exact component={TamilBeach} />


                    <Route path='/contact us' exact component={ContactUs} />
                    <Route path='/terms & conditions' exact component={Terms} />
                    <Route path='/privacy policy' exact component={Privacy} />
                    <Route path='/guidelines' exact component={Guideline} />


                    <Route path='/mountains/sikkim' exact component={SikkimMountain} />
                    <Route path='/mountains/himachal' exact component={HimachalMountain} />
                    <Route path='/mountains/uttarakhnd' exact component={UttarakhndMountain} />
                    <Route path='/mountains/kashmir' exact component={KashmirMountain} />
                    <Route path='/mountains/karnataka' exact component={KarnatakaMountain} />
                    <Route path='/mountains/kerela' exact component={KerelaMountain} />
                    <Route path='/mountains/himachal' exact component={HimachalMountain} />
                    <Route path='/mountains/manali' exact component={ManaliMountain} />
                    <Route path='/mountains/munnar' exact component={MunnarMountain} />


                    <Route path='/heritage/rajasthan' exact component={RajasthanHeritage} />
                    <Route path='/heritage/orissa' exact component={OrissaHeritage} />
                    <Route path='/heritage/tamil' exact component={TamilHeritage} />
                    <Route path='/heritage/madhya' exact component={MadhyaHeritage} />
                    <Route path='/heritage/delhi' exact component={DelhiHeritage} />
                    <Route path='/heritage/maharastra' exact component={MaharastraHeritage} />
                    <Route path='/heritage/gwaliorfort' exact component={GwaliorHeritage} />
                    <Route path='/heritage/golcondafort' exact component={GolcondaHeritage} />
                    <Route path='/heritage/chittorgarhfort' exact component={ChittorgarhHeritage} />
                    <Route path='/heritage/tajmahal' exact component={TajHeritage} />
                    <Route path='/heritage/fatehpur' exact component={FatehpurHeritage} />
                    <Route path='/heritage/humayun' exact component={HumayunHeritage} />


                    <Route path='/honeymoonpackages/kerela' exact component={KerelaFiveDays} />
                    <Route path='/honeymoonpackages/kashmir' exact component={KashmirFourDays} />
                    <Route path='/honeymoonpackages/darjeeling' exact component={DarjeelingFiveDays} />
                    <Route path='/honeymoonpackages/manali' exact component={ManaliFourDays} />
                    <Route path='/honeymoonpackages/goa' exact component={FourDaysGoa} />
                    <Route path='/honeymoonpackages/andaman' exact component={AndamanVacation} />
                    <Route path='/honeymoonpackages/ladakh' exact component={LadakhFiveDays} />
                    <Route path='/honeymoonpackages/shrinagar' exact component={DarjeelingFiveDays} />
                    <Route path='/honeymoonpackages/shrinagar' exact component={KerelaFiveDays} />
                    <Route path='/honeymoonpackages/shrinagar' exact component={KerelaFiveDays} />
                    <Route path='/honeymoonpackages/manali' exact component={ManaliFourDays} />
                    <Route path='/heritage/humayun' exact component={HumayunHeritage} />

                    <Route path='/WildlifeTourism/TigerInIndia' exact component={TigerInIndia} />
                    <Route path='/WildlifeTourism/ElephantsInIndia' exact component={ElephantInIndia} />
                    <Route path='/WildlifeTourism/AsiaLion' exact component={AsiaLion} />
                    <Route path='/WildlifeTourism/BestPlacesTiger' exact component={BestPlaceTiger} />
                    <Route path='/WildlifeTourism/PannaNationalPark' exact component={PannaNationalPark} />
                    <Route path='/WildlifeTourism/PenchNationalPark' exact component={PenchNationalPark} />
                    <Route path='/WildlifeTourism/BhadraWildlife' exact component={BhadraWildlife} />
                    <Route path='/WildlifeTourism/Ranipuram' exact component={RanipuramWildlife} />

                    <Route path='/RoadTrips/RoadTripSpitiValley' exact component={SpitivalleyRoad} />
                    <Route path='/RoadTrips/SoutherIndia' exact component={SoutherIndiaRoad} />
                    <Route path='/RoadTrips/RoadTripsRajasthan' exact component={RoadTripRajasthan} />
                    <Route path='/RoadTrips/RoadTripBanglore' exact component={RoadTripBangalore} />
                    <Route path='/RoadTrips/ThrillRoadTrips' exact component={ThrillRoadTrips} />
                    <Route path='/RoadTrips/OotyRoadTrips' exact component={OotyRoadTrip} />
                   


                   





                   


                   




                    
            </Switch>
            </div>
        </Router>
        );
    }
}

export default App;