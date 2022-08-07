import React from "react";
import Rating from "../rating/Rating";
import Submit from "../submit/Submit";
import "./_mainCard.scss";

const MainCard = () => {
  return (
    <div className="main-card">
      <div className="star">
        <img src="../icon-star.svg" alt="Star" />
      </div>
      <h1>How did we do?</h1>
      <p>
        {" "}
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Rating />
      <Submit />
    </div>
  );
};

export default MainCard;
