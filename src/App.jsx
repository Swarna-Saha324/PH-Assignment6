
import '@fortawesome/fontawesome-free/css/all.min.css';

import React from 'react';

import  { Suspense } from 'react';
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
import Models from './Components/Models';
import Cart from './Components/Cart';
import { useState } from 'react';


function App() {
   const [activebtn , setactivebtn] = useState("products");
   const [cartItems, setCartItems] = useState([]);

  const getData = async () => {
    const response = await fetch("/models.json");
    return response.json();
  }

  const promiseData = getData();
  return (
    <>
     <ToastContainer />
<Navbar cartItems={cartItems}></Navbar>
<Banner></Banner>
<StatsSection></StatsSection> 

<div className='flex flex-col items-center justify-center '>
        <h1 className='text-3xl font-bold' style={{ color: '#101727FF' }}>Premium Digital Tools</h1>
        <p className='text-lg  ' style={{ color: '#627382FF' }}> Choose from our curated collection of premium digital products designed </p>
        <p className='text-lg  mb-12' style={{ color: '#627382FF' }}>to boost your productivity and creativity.</p>
        <div className='flex flex-row gap-5'>
            <button onClick={() => setactivebtn("products")} className={`btn rounded-2xl px-16 ${activebtn=="products" ? "bg-gradient-to-r from-[#5E3BEE] to-[#9B37FD] text-white": ""}`} >Products</button>
            <button onClick={() => setactivebtn("cart")} className={`btn rounded-2xl px-16 ${activebtn=="cart" ? "bg-gradient-to-r from-[#5E3BEE] to-[#9B37FD] text-white": ""}`} tabIndex="-1" role="button" aria-disabled="true">
       Cart ({cartItems.length})
      </button>
        </div>
        </div> 
<Suspense fallback={<div className='flex items-center justify-center'><span className="loading loading-spinner loading-xl"></span></div>}>
  {activebtn === "products" && <Models promiseData={promiseData} cartItems={cartItems} setCartItems={setCartItems} ></Models>}
          {activebtn === "cart" && <Cart cartItems={cartItems} setCartItems={setCartItems}></Cart>}
        </Suspense>
<Steps></Steps>
<Pricing></Pricing>
<Ready></Ready>


<Footer></Footer>


      
</>
  )

}

export default App;
