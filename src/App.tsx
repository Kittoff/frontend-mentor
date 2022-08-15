import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainCard from "./components/rating-card/main-card/MainCard";
import Container from "./components/rating-card/container/Container";
import ThankYou from "./components/thank-you-card/ThankYou";

function App() {
  const rating = [
    {
      id: 1,
      note: 1,
    },
    {
      id: 2,
      note: 2,
    },
    {
      id: 3,
      note: 3,
    },
    {
      id: 4,
      note: 4,
    },
    {
      id: 5,
      note: 5,
    },
  ];
  const [displayedCard, setDisplayedCard] = useState(1);
  const [selectedNote, setSelectedNote] = useState(1);

  const handleSubmit = () => {
    setDisplayedCard(2);
  };
  const test = (event: any) => {
    setSelectedNote(4);
    setSelectedNote(event.target.innerText);
  };
  const displayCorrectCard = () => {
    if (displayedCard === 1) {
      return (
        <MainCard
          rating={rating}
          handleSubmit={() => handleSubmit()}
          setSelectedNote={(event: any) => test(event)}
        />
      );
    } else {
      return <ThankYou note={selectedNote} />;
    }
  };

  return (
    <div className="App">
      <Container>{displayCorrectCard()}</Container>
    </div>
  );
}

export default App;
