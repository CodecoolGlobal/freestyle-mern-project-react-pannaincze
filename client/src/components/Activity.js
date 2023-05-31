

function Activity({ activity, handleSave }) {

    
    return (

        <div className="activity">
            <h2>Name : {activity.activity}</h2>
            <h3>Type : {activity.type}</h3>
            <h3>Participants : {activity.participants}</h3>
            <h3>Price : {activity.price}</h3>
            <h3>Accessibility : {activity.accessibility}</h3>
            <button onClick={ (e) => handleSave(e, activity) }>Add to favorite activities</button>
        </div>
    )
}

export default Activity