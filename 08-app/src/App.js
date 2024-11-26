import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Home';

function App() {
  return (
    <div className="container">
      <h1>Memeeeee</h1>
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
