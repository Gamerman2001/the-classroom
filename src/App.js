import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const [room, setRoom] = useState({})

  useEffect(() => {
    //we will set up objects for our API calls in here
    setRoom({
      roomId: null,
      positions: null,
      students: null,
      desks: null,
      dates: null,
      dailyData: null
    })
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
