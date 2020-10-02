import React from 'react';
import Header from './Components/Header'
import Content from './Components/Content'
import './App.css';
import './Components/style.scss';

function App() {
  return (
      <div className={"container"}>
          <Header />
          <Content />
      </div>
  );
}

export default App;
