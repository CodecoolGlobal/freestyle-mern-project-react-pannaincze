import React from 'react'

export default function Favorites({favorites, deleteActivity}) {
  return (
    <div>
        {favorites.map(favorite => {
            return <div>
                <h2>{favorite.description}</h2>
                <button onClick={() =>  {deleteActivity(favorite._id)}}>Remove</button>
            </div>
        })}
    </div>
  )
}
