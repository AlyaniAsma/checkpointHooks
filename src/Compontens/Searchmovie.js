import React from "react";
import { Rating } from "react-simple-star-rating";

const Searchmovie = ({
  searchp,
  handelserchp,
  searchrate,
  handelserchrate,
}) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => handelserchp(e.target.value)}
        value={searchp}
      />{" "}
      <br />
      <Rating
        onClick={handelserchrate}
        ratingValue={searchrate} /* Available Props */
      />
    </div>
  );
};

export default Searchmovie;
