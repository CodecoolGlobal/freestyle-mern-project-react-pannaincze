import React, { useState } from 'react'

export default function CreateActivity({ handleSave }) {

    const [activity, setActivity] = useState('')
    const [type, setType] = useState('')
    const [participants, setParticipants] = useState('')
    const [price, setPrice] = useState('')
    const [accessibility, setAccessibility] = useState('')
    const [isSaved, setIsSaved] = useState(false)


    return (
        <form onSubmit={((e) => {
            setIsSaved(true)
            handleSave(e, {
                activity,
                type,
                participants,
                price,
                accessibility
            })}
        )}>
            <label htmlFor="activity">Activity:</label>
            <input onChange={(e) => setActivity(e.target.value)} type="text" id="activity" />
            <label htmlFor="type">Type:</label>
            <select onChange={(e) => setType(e.target.value)} id="type">
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
            <input onChange={(e) => setParticipants(e.target.value)} type="text" id="participants" />
            <div>
                <label htmlFor="price">Price:</label>
                {/* <Slider setPrice={setPrice} /> */}
                <input onChange={(e) => setPrice(e.target.value)} type="text" id="price" />
            </div>
            <label htmlFor="accessibility">Accessibility:</label>
            <input onChange={(e) => setAccessibility(e.target.value)} type="text" id="accessibility" />
            {!isSaved ? <input type="submit" value="Add to favorite activities"></input> : 
            <h3>You have added this activity to your favorites!</h3>}
        </form>
    )
}
