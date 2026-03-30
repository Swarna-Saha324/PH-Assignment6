
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import './App.css'
import { Trash } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import Navbar from './Components/Navber';
import Banner from './Components/Banner';
import StatsSection from './Components/StatsSection';
import Ready from './Components/Ready';
import Footer from './Components/Footer';
import Pricing from './Components/Pricing';
import Steps from './Components/Steps';

function App() {
  return (
    <>
     <ToastContainer />
<Navbar></Navbar>
<Banner></Banner>
<StatsSection></StatsSection> 
<Steps></Steps>
<Pricing></Pricing>
<Ready></Ready>

<Footer></Footer>


      
</>
  )

}

export default App
