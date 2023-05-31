import React from 'react'
import { useState } from 'react';


export default function Edit({ activityToEdit, editActivity, handleCancel}) {
  const [activity, setActivity] = useState(activityToEdit.description)
  const [type, setType] = useState(activityToEdit.type)
  const [participants, setParticipants] = useState(activityToEdit.participants)
  const [price, setPrice] = useState(activityToEdit.price)
  const [accessibility, setAccessibility] = useState(activityToEdit.accessibility)

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      editActivity(activityToEdit._id, activity, type, participants, price, accessibility)
    }}>

      <label htmlFor="activity">Activity:</label>
      <input onChange={(e) => setActivity(e.target.value)} type="text" id="activity" value={activity} />
      <label htmlFor="type">Type:</label>
      <select onChange={(e) => setType(e.target.value)} id="type" value={type}>
        <option value="" disabled selected>Select your option</option>
        <option value="education">Education</option>
        <option value="recreational">Recreational</option>
        <option value="social">Social</option>
        <option value="diy">Diy</option>
        <option value="charity">Charity</option>
        <option value="cooking">Cooking</option>
        <option value="relaxation">Relaxation</option>
        <option value="music">Music</option>
        <option value="busywork">Busywork</option>
      </select>
      <label htmlFor="participants">Participants:</label>
      <input onChange={(e) => setParticipants(e.target.value)} type="text" id="participants" value={participants} />
      <div>
        <label htmlFor="price">Price:</label>
        {/* <Slider setPrice={setPrice} /> */}
        <input onChange={(e) => setPrice(e.target.value)} type="text" id="price" value={price} />
      </div>
      <label htmlFor="accessibility">Accessibility:</label>
      <input onChange={(e) => setAccessibility(e.target.value)} type="text" id="accessibility" value={accessibility} />
      <input type="submit" value="Save"></input>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  )
}
