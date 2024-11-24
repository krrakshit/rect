
import { useContext } from 'react';
import './App.css';
import Counter from './components/counter';
import { ConterContext} from './context/counter';

function App() {

  const counterState = useContext(ConterContext)

  console.log("context",counterState);
  return (
    <div className="App">
      <h1>Counts is {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
