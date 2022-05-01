import { useState } from 'react';
import './App.css';
import GrandParent from './components/GrandParent';

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  console.log("[GP] [P] [C] [GC] APP just rendered")
  return (
    <div className="App">
        <button onClick={increment}>+1</button>
        <h2>{count}</h2>
        <p>I'm the App component</p>
        <GrandParent count={count} />
        <GrandParent />
    </div>
  );
}

export default App;
