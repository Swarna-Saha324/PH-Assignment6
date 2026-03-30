
import './App.css'
import { Trash } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import Navbar from './Components/Navber';
import Banner from './Components/Banner';

function App() {
  return (
    <>
     <ToastContainer />
<Navbar></Navbar>
<Banner></Banner>

<button onClick={() => toast.success("Item deleted!")} className='btn btn-primary'>
  Click Me
</button>
     
    <Trash />
      
       toast.success("Item deleted!");
      
</>
  )

}

export default App
