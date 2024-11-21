import React,{useEffect,useState} from 'react'

const Mycomponent=()=>{

    const [count,setcount] = useState(0)
    const [count2,setcount2] = useState(10)

    useEffect(() => {
        console.log('useEffect is mounting')
        return function(){
            console.log('Unmounting');
        }
            }, [])

            useEffect(()=>{
console.log('count got updated',count);
return function(){
    console.log('returning count',count);
}
            },[count])
    return (
        <div>
            <p>Count is {count}</p>
            <p>Count2 is {count2}</p>
            <button onClick={()=>setcount(count+1) }>Update the count</button>
            <button onClick={()=>setcount2(count2+1) }>Update the count2</button>
        </div>
    )
}

export default Mycomponent