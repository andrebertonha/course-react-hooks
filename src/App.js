import React from "react";
import "./App.scss";
import NameTag from './components/nameTag';

function App() {
  
  // eslint-disable-next-line no-console
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        <NameTag firstName="Peter" lastName="Monster">Peter</NameTag>
        <NameTag firstName="Dude" lastName="Crabt">John</NameTag>
        <NameTag firstName="Master" lastName="Worm">Mary</NameTag>        
      </header>
    </div>
  );
}

export default App;
