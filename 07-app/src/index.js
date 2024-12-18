import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route ,useParams} from'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

const Home = ()=>{
  const [posts,setposts] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(data => data.json()).then(data => setposts(data))
  },[])
  return (
    <div className='post-container'>
      {posts.map((post)=>(
        <li>{post.title}</li>
      ))}
    </div>
  )
}

const About = ()=>{
  return (
    <div>
      <h1>Welcome to About Page</h1>
    </div>
  )
}

const Profile = ()=>{
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  )
}

const Sayuser = ()=>{
  const params = useParams()
  return(
    <div>
      <h1>Your name is{params.username}</h1>
    </div>
  )
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
<Route path='/user:username'  element= {<Sayuser/>}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
