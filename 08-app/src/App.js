import EditPage from './pages/edit';
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
        <Route path="/edit" element={<EditPage/>} />
      </Routes>
    </div>
  );
}

export default App;
