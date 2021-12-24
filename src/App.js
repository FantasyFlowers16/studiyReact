import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';

import './styles/app.css'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter> 
  )
}

export default App;
