
import './App.css';
import CounterButton from './Components/Btn/CounterButton';
import Inputs  from './Components/Inputs/Inputs';
import { useState } from 'react';

function App() {
  const[count, setCount] = useState(1.3);

  return(
    <div className='input' >
      <Inputs/>
      <CounterButton count={count} setCount = {setCount}/>
      <CounterButton count={count} setCount = {setCount}/>
    </div>
 
  )

}

export default App;
