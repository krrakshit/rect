import React,{useState} from 'react'

const CounterComponent = ()=>{
    const [count,setcounnt] = useState(12);
   
   
    return (
        <div>
<p>Count Component  = {count}</p>
<h6>Count is {count%2===0 ? "even" : "odd"}</h6>

<button onClick={()=> setcounnt(count + 1)}>Increament</button>
<button onClick={()=> setcounnt(count - 1)}>Decreament</button>
        </div>
    )
}
export default CounterComponent