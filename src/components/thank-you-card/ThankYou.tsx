import React from "react";

interface Props {
  note: number;
  goBack: () => void;
}
const ThankYou = (props: Props) => {
  const { note, goBack } = props;
  return (
    <div className="thank-you--container">
      <div onClick={goBack} className="thank-you--container-back">
        Go back
      </div>
      <div className="thank-you--container-image">
        <img src="../illustration-thank-you.svg" alt="thank you" />
      </div>
      <div className="thank-you--container-rated">
        You selected {note} out of 5
      </div>
      <div className="thank-you--container-text">
        <h1>Thank you!</h1>
        <p>
          {" "}
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
