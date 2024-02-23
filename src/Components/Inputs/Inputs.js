import { useState } from 'react';
import '../../App.css';
function Inputs() {
  const [data, dataSet] = useState();
  const [data1, dateSet1] = useState();
  const pars = parseInt(data);
  const pars1 = parseInt(data1);

  


  return(
        <div className='input'>
      <input type='number' onChange={(e) => {
        dataSet(e.target.value);
      }}/>
             <div className='plus'> <h1>+</h1> </div> 
        <input type='number' onChange={(e) => {
        dateSet1(e.target.value);
      }}/>
       {pars1 && pars ? <h1 className='plus'>{pars + pars1}</h1> : ''}
      {/* {data ? <h2>გამარჯობა, {data}</h2> : ''} 
      {data1 ? <h2>გამარჯობა, {data1}</h2> : ''}  */}
    </div>
 
  )
}



export default Inputs;