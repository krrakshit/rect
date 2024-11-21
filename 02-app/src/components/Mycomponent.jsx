import React , {useEffect,useState} from 'react'

const Mycomponent =()=>{
    const [count,setcount] = useState(0)
    const [count2,setcount2] = useState(10)

    useEffect(()=>{
        console.log("My component is Mouunting");
    },[])

    useEffect(()=>{console.log("Count got updated")}
    ,[count,count2])
    return (
<div>
    <p>
        Count  is {count}
    </p>
    <p>
        Count2  is {count2}
    </p>
    <button onClick={()=>{setcount(count+1)}}>Update</button>
    <button onClick={()=>{setcount2(count2+1)}}>Update Count2</button>
</div>
    )

}

export default Mycomponent