import React from "react";
import "./_submit.scss";
const Submit = (props: any) => {
  const { handleSubmit } = props;
  return (
    <div onClick={handleSubmit} className="container--submit">
      <span>Submit</span>
    </div>
  );
};

export default Submit;
