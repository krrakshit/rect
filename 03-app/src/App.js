import React,{useEffect,useState} from 'react'
import './App.css';
import Mycomponent  from './Mycomponent';
import Timer from './timer';
function App2() {

  const [isvisible,setvivible] = useState(true)

  useEffect(()=>{
    console.log('useEffect is called')
  },[])
  return (
    <div className="App">
      {isvisible?<Mycomponent/>:<></>}
      <button onClick={()=>setvivible(!isvisible)}>Toggle</button>
    </div>
  );
}

function App(){
  return (
    <div className="App">
      <Timer/>
    </div>
  )
}

export default App;
