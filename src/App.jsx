
import './App.css'
import { Trash } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import Navbar from './Components/Navber';

function App() {
  return (
    <>
     <ToastContainer />
<Navbar></Navbar>

<button onClick={() => toast.success("Item deleted!")} className='btn btn-primary'>
  Click Me
</button>
     
    <Trash />
      
       toast.success("Item deleted!");
      
</>
  )

}

export default App
