import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from'../HomePage/HomePage.js';
import ListTrips from '../ListTrips/ListTrips.js';
import ApplicationForm from '../ApplicationForm/ApplicationForm.js';
import Login from '../Login/Login.js';
import AdminHome from '../AdminHome/AdminHome.js';
import CreateTrip from '../CreateTrip/CreateTrip.js';
import TripDetails from '../TripDetails/TripDetails.js';


function Router() {
    return (
             <BrowserRouter>
             
            <Routes>
                <Route index element={<HomePage/>} />
                
                <Route path="home" element={<HomePage/>} />
                <Route path="lists/trips" element={<ListTrips/>} />
                <Route path="/lists/trips/forms/application/:id" element={<ApplicationForm/>} />
                <Route path="login" element={<Login/>} />
                <Route path="/login/admin/homepage" element={<AdminHome/>} />
                <Route path="/login/admin/homepage/create/trips" element={<CreateTrip/>} />
                <Route path="/login/admin/homepage/detail/trips/:id" element={<TripDetails/>} />

            </Routes>
        </BrowserRouter>
        
    )
}
export default Router;