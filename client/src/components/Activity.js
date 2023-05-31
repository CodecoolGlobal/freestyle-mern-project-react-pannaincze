import { useState } from 'react';


function Activity({ activity, handleSave }) {
    const [isSaved, setIsSaved] = useState(false)

    return (

        <div className="activity">
            <h2>Name : {activity.activity}</h2>
            <h3>Type : {activity.type}</h3>
            <h3>Participants : {activity.participants}</h3>
            <h3>Price : {activity.price}</h3>
            <h3>Accessibility : {activity.accessibility}</h3>
            {!isSaved ?
                <button onClick={(e) => {
                        setIsSaved(true)
                        handleSave(e, activity)
                    }}>
                Add to favorite activities
                </button>
                : <h3>You saved this activity to your favorites!</h3>}
        </div>
    )
}

export default Activity