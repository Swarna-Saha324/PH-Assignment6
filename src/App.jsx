
import './App.css'
import { Trash } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import Navbar from './Components/Navber';
import Banner from './Components/Banner';
import StatsSection from './Components/StatsSection';
import Ready from './Components/Ready';
import Footer from './Components/Footer';

function App() {
  return (
    <>
     <ToastContainer />
<Navbar></Navbar>
<Banner></Banner>
<StatsSection></StatsSection> 
<Ready></Ready>
<Footer></Footer>

<button onClick={() => toast.success("Item deleted!")} className='btn btn-primary'>
  Click Me
</button>
     
    <Trash />
      
       toast.success("Item deleted!");
      
</>
  )

}

export default App
