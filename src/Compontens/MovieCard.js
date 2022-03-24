import React from "react";
import { Card } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

export default function MovieCard({ moviesprops }) {
  return (
    <div>
      <div className="list">
        <Card style={{ width: "200px" }}>
          <Card.Img variant="top" src={moviesprops.posterURL} />
          <Card.Body>
            <Card.Title>{moviesprops.title}</Card.Title>
            <Card.Text>{moviesprops.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Rating
              ratingValue={moviesprops.rating}
              readonly={true} /* Available Props */
            />
            {/*<small className="text-muted">{moviesprops.rating}</small>*/}
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
