import React from 'react';

import ThemeSetter from './context/ThemeSetter';
import ThemeProvider from './context/ThemeProvider';

import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.css'
import './App.scss';

import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';

function App() {
  return(
    <ThemeProvider>
    <BrowserRouter>
      <Route render={props =>(
        <>
          <Header {...props}/>
          <Routes/>
          <Footer/>
        </>
      )}/>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;