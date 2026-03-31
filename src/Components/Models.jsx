import ModelCard from './ModelCard';
import {use} from 'react';
function Models({promiseData}) {
    const modelData= use(promiseData);
    console.log(modelData);
   

    return(
       <div className="grid  md:grid-cols-2  lg:grid-cols-3 gap-5 mt-10">
        {
            modelData.map((model)=> (
                <ModelCard key={model.id} model={model}></ModelCard>
            ))
        }

        </div>

    )
}
export default Models;