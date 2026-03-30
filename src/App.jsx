
import './App.css'
import { Trash } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import Navbar from './Components/Navber';
import Banner from './Components/Banner';
import StatsSection from './Components/StatsSection';

function App() {
  return (
    <>
     <ToastContainer />
<Navbar></Navbar>
<Banner></Banner>
<StatsSection></StatsSection> 

<button onClick={() => toast.success("Item deleted!")} className='btn btn-primary'>
  Click Me
</button>
     
    <Trash />
      
       toast.success("Item deleted!");
      
</>
  )

}

export default App
