import {useEffect, useState} from 'react'
import { getposts,getrandomuser } from './api';
import './App.css';
import Postcard from './components/postcard';
import Usercard from './components/usercard';
function App() {

  const [data,setdata] = useState(null)
  const [userdata,setuserdata] = useState(null)


useEffect(()=>{
  getposts().then((posts) => setdata(posts))
},[])

useEffect(()=>{getrandomuser().then((user)=> setuserdata(user.results[0]))
},[])

const refresh = () =>{
  getrandomuser().then((user)=> setuserdata(user.results[0]))
}


  return (
    <div className="App">
      <button onClick={refresh}>Refresh user</button>
      {userdata && <Usercard data={userdata}/>}
      {
      data ? data.map((e) => <Postcard title = {e.title} body = {e.body}/>) : <p>Data not found</p>
     }
    </div>
  );
}

export default App;
