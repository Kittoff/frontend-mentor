import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainCard from './components/main-card/MainCard';
import Container from './components/container/Container';

function App() {
  return (
    <div className="App">
      <Container>
     <MainCard />
      </Container>
    </div>
  );
}

export default App;
