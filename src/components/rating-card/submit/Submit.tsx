import React from "react";
import "./_submit.scss";

interface Props {
  handleSubmit: () => void;
}
const Submit = (props: Props) => {
  const { handleSubmit } = props;
  return (
    <div onClick={handleSubmit} className="container--submit">
      <span>Submit</span>
    </div>
  );
};

export default Submit;
