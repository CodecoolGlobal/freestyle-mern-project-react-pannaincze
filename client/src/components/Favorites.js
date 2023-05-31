import React from 'react'
import { useState } from 'react';
import Edit from './Edit';

export default function Favorites({ favorites, deleteActivity, editActivity }) {

  const [showEditModal, setShowEditModal] = useState(false)
  const [activityToEdit, setActivityToEdit] = useState(null)
  function handleCancel(){
    setShowEditModal(false)
    setActivityToEdit(null)
  }

  return (
    <div>
      {favorites.map(favorite => {
        return <div>
          <h2>{favorite.description}</h2>
          <h3>Type : {favorite.type}</h3>
          <h3>Participants : {favorite.participants}</h3>
          <h3>Price : {favorite.price}</h3>
          <h3>Accessibility score: {favorite.accessibility}</h3>
          <button onClick={() => {
            setActivityToEdit(favorite)
            setShowEditModal(true)
          }}>Edit</button>
          <button onClick={() => {
            deleteActivity(favorite._id)
          }}>Remove</button>
        </div>
      })}
      {showEditModal && <Edit
        activityToEdit={activityToEdit}
        editActivity = {editActivity}
        handleCancel={handleCancel}
      />}
    </div>
  )
}
