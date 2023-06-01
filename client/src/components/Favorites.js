import React from "react";
import { useState } from "react";
import Edit from "./Edit";
import { Button } from "react-bootstrap";

export default function Favorites({ favorites, deleteActivity, editActivity }) {

  return (
    <div>
      {favorites.map((favorite) => {
        return (
          <div>
            <h2>{favorite.description}</h2>
            <h3>Type : {favorite.type}</h3>
            <h3>Participants : {favorite.participants}</h3>
            <h3>Price : {favorite.price}</h3>
            <h3>Accessibility score: {favorite.accessibility}</h3>
            <Edit
              activityToEdit={favorite}
              editActivity={editActivity} />
            <Button
              onClick={() => {
                deleteActivity(favorite._id);
              }}
            >
              Remove
            </Button>
          </div>
        );
      })}
    </div>
  );
}
