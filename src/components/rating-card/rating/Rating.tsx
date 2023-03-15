import React from "react";
import "./_rating.scss";

export interface RatingInterface {
  id: number;
  note: number;
}
export interface Props {
  rating: RatingInterface[];
  setSelectedNote: any;
}

const Rating = (props: Props) => {
  const { rating, setSelectedNote } = props;

  return (
    <div className="container--rating">
      {rating.map((element: any) => {
        return (
          <button
            onClick={(event) => setSelectedNote(event)}
            className="container--rating-note"
            key={element.id}
          >
            <span>{element.note}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
