import { useState } from "react";
import {createContext} from "react";

 export const ConterContext = createContext(null)

 export const Counterprovider = (props)=>{
const [count,setCount] = useState(5);

    return (
        <ConterContext.Provider value={{count,setCount,name:"Rakshit"}}>
            {props.children}
            </ConterContext.Provider>
    )
 }


