import React from "react";
import { Routes, Route } from "react-router-dom"
import Requests from './components/requests';
import Seat from './components/requests/Seat';
import Meal from './components/requests/Meal';
import Transport from './components/requests/Transport';
import Accomodation from './components/requests/Accomodation';
import Dashboard from './components/dashboard';
import History from './components/history';
import SideNav from './components/general/SideNav';
import './scss/main.scss';

const App = () =>{
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <Requests/> } />
                <Route path="dashboard" element={ <Dashboard/> } />
                <Route path="requests" element={ <Requests/> } />
                <Route path="history" element={ <History/> } />
                <Route path="seats" element={ <Seat/> } />
                <Route path="meal" element={ <Meal/> } />
                <Route path="transport" element={ <Transport/> } />
                <Route path="accomodation" element={ <Accomodation/> } />
            </Routes>
        </div>
    )
}

export default App