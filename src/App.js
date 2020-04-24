import React, { useState } from "react";
import "./App.scss";
import Input from './components/Input';

function App() {
  
  const [age, setAge] = useState(21);

  const ageUpHandle = () => {
    setAge( age + 1 );
  }

  const ageDownHandle = () => {
    setAge( age -1 );
  }

  // eslint-disable-next-line no-console
  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder="Enter Here" type="text"></Input>
        <h1>Use State Hook</h1>
        <h2>Age: {age}</h2>
        <button onClick={ageUpHandle}>age up</button>
        <button onClick={ageDownHandle}>age down</button>
      </header>
    </div>
  );
}

export default App;
