import './App.css';
// import Exercise from './components/Exercise'
import { useState, useEffect } from 'react';
import { truncate } from 'node:fs';


function App() {
  const [name, setName] = useState('Candidate')

  // let name = 'Candidate';
  const titleUpdate = () => {
  document.title = `Welcome, ${name}!`; 
 }

 useEffect(titleUpdate, [name])

  const nameUpdater = (e) => {
    setName(e)
  }




  return (
    <div className="App">
      <label>Enter your name:</label>
      <input value={name} onChange={(e) => nameUpdater(e.target.value)} />
    </div>
  );
}

export default App;
