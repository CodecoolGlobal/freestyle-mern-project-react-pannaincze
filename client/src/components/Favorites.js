import React from "react";
import { useState } from "react";
import Edit from "./Edit";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Favorites({ favorites, deleteActivity, editActivity, fetchImage }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {favorites.map((favorite) => {
        return (
          <div key={favorite._id} style={{ margin: "10px" }}>
            <Card className="mx-auto mb-3" style={{ width: "18rem", height: "100%" }}>
              <Card.Img variant="top" src={favorite.image} style={{ width: "286px", height: "191px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{favorite.description}</Card.Title>
              </Card.Body>

              <ListGroup className="list-group-flush">
                <ListGroup.Item>Type : {favorite.type}</ListGroup.Item>
                <ListGroup.Item>
                  Participants : {favorite.participants}
                </ListGroup.Item>

                <ListGroup.Item>Price : {favorite.price}</ListGroup.Item>

                <ListGroup.Item>
                  Accessibility : {favorite.accessibility}
                </ListGroup.Item>
              </ListGroup>

              <Edit activityToEdit={favorite} editActivity={editActivity} fetchImage={fetchImage} />
              <Button className="mt-1"
                variant="danger"
                onClick={() => { deleteActivity(favorite._id); }}>
                Remove
              </Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
