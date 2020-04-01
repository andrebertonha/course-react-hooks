import React from "react";
import "./App.scss";
import Input from './components/Input';

function App() {
  
  // eslint-disable-next-line no-console
  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder="Enter Here" type="text"></Input>
      </header>
    </div>
  );
}

export default App;
