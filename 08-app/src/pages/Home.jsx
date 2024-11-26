import React,{useEffect} from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";
import { useState } from "react";

const Homepage = () =>{

    const [data,setdata] = useState([])

    useEffect(()=>{
getAllMemes().then((memes) =>setdata(memes.data.memes)
);
    },[]);
    return (
        <div className="row">
            {
            data.map(el => <MemeCard img={el.url} title = {el.name}/>)}
        </div>
    )
}

export default Homepage