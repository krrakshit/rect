import react from 'react'
import ReactDOM from 'react-dom/client'

function Mycomponent(){
  const name = "Rakshit"
  return (<h2>hello {name}</h2>)
}
function Link(){
  const link = "https://r3x7t.vercel.app"
  return <a href={link}> Click Me </a>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Link/>)