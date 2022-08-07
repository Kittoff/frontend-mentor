import React from "react";
import "./_rating.scss";
const Rating = () => {
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

  return (
    <div className="container--rating">
      {rating.map((element) => {
        return (
          <div className="container--rating-note">
            <span>{element.note}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
