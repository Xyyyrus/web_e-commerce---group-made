// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingLayout, SettingsLayout } from './components/Layout';
import Home from './pages/LandingPages/Home';
import About from './pages/LandingPages/About';
import ShopNow from './pages/LandingPages/ShopNow';
import TradeEvents from './pages/LandingPages/TradeEvents';
import BiddingZone from './pages/LandingPages/BiddingZone';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import TradeDeals from './pages/LandingPages/TradeDeals';
import Profile from './pages/Settings/Profile';
import NotFound from './Utils/NotFound';
import ItemView from './components/other/ItemView';
import LoginSeller from './pages/auth/seller/loginSeller';
import RegisterSeller from './pages/auth/seller/RegistrationSeller'; 
import SellerCentre from "./pages/auth/seller/seller_centre";


import 'flowbite';

import AdminHome from './pages/LandingPages/AdminHome';
import User from './pages/LandingPages/User';
import Admin from './pages/LandingPages/Admin';
import Messages from './pages/LandingPages/Messages';
import Settings from './pages/LandingPages/Settings';

import { ThemeProvider, useTheme } from './contexts/ThemeContexts'; // Import useTheme from the context
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import getTheme from './theme/muiTheme'; // Import your theme function

function App() {
  return (
    <ThemeProvider>
      <InnerApp />{' '}
      {/* Move the router and theme logic into a separate component */}
    </ThemeProvider>
  );
}

const InnerApp =() => {
  const { isDarkMode } = useTheme(); // Now you can access useTheme
  const theme = getTheme(isDarkMode); // Get the theme based on the current mode

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize styles */}

    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Seller Parts 
            Note: Not sure where these should go or stay sa hierarchy ng folders.
          */}
        <Route path="/login-seller" element={<LoginSeller />} />
        <Route path="/register-seller" element={<RegisterSeller />} />
        <Route path="/seller-centre" element={<SellerCentre />} />

        {/* Landing Layout Routes with Navbar and Footer */}
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop-now" element={<ShopNow />} />
          <Route path="/shop-now/:id" element={<ItemView />} />
          <Route path="/trade-deals" element={<TradeDeals />} />
          <Route path="/trade-events" element={<TradeEvents />} />
          <Route path="/bidding-zone" element={<BiddingZone />} />
          
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
          
          {/* Settings Layout for Account Pages */}
          <Route path="/account" element={<SettingsLayout />}>
            <Route index element={<Profile />} />
          </Route>

       

        </Route>

        <Route path='/admin-dashboard'>
              <Route index element={<AdminHome />} />
              <Route path='user' element={<User />} />
              <Route path='admin' element={<Admin />} />
              <Route path='message' element={<Messages />} />
              <Route path='settings' element={<Settings />} />
            </Route>


      </Routes>
    </Router>
    </MUIThemeProvider>

  );
}

export default App;
