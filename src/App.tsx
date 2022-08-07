import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainCard from "./components/rating-card/main-card/MainCard";
import Container from "./components/rating-card/container/Container";

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
