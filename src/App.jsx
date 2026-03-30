
import './App.css'
import { Trash } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";

function App() {
  return (
    <>
     <ToastContainer />
    
<h1> Hello world</h1>

<button onClick={() => toast.success("Item deleted!")} className='btn btn-primary'>
  Click Me
</button>
     
    <Trash />
      
       toast.success("Item deleted!");
      
</>
  )

}

export default App
