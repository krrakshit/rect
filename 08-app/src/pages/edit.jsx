import React,{useState,createRef} from "react";
import {Button} from "react-bootstrap";
import Text from "../components/Text";
import {useSearchParams} from 'react-router-dom'
import {exportComponentAsJPEG} from 'react-component-export-image'

const EditPage  = () =>{

    const [params] = useSearchParams();

    const [count,setcount] = useState(0)

    const memeref = createRef()
    const addText = ()=>{
setcount(count+1)
    }

    return(
        <div>
       
        <div style={{width:"700px", border:"1px solid"}} ref={memeref} className="meme -5 mb-5">
           <img src={params.get('url')} alt="img" width="200px" />
           {Array(count).fill(0).map(e => <Text/>)}
        </div>
<Button onClick={addText}>
    Add Text
</Button>


<Button variant="success" onClick={(e) => exportComponentAsJPEG(memeref) }>
    Save It
</Button>
        </div>
    )
}

export default EditPage