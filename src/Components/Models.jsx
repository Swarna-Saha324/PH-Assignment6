import ModelCard from './ModelCard';
import {use} from 'react';
function Models({promiseData , cartItems , setCartItems}) {
    const modelData= use(promiseData);
    console.log(modelData);
   

    return(
       <div className="grid  md:grid-cols-2  lg:grid-cols-3 gap-5 mt-10">
        {
            modelData.map((model)=> (
                <ModelCard key={model.id} model={model} cartItems={cartItems} setCartItems={setCartItems} ></ModelCard>
            ))
        }

        </div>

    )
}
export default Models;