import { useState } from "react"

function Activity({ activity }) {

    const [shownActivity, setShownActivity] = useState({})
    console.log(shownActivity);

    return (

        <div className="activity">
            <h2>Name : {shownActivity.activity}</h2>
            <h3>Type : {shownActivity.type}</h3>
            <h3>Participants : {shownActivity.participants}</h3>
            <h3>Price : {shownActivity.price}</h3>
            <h3>Accessibility : {shownActivity.accessibility}</h3>

        </div>
    )
}

export default Activity