import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Activity({ activity, handleSave, isSaved, setIsSaved, fetchImage }) {
    const [image, setImage] = useState('')
    useEffect(() => {
        fetchImage(activity.activity)
            .then(data => setImage(data))
    }, [activity.activity, fetchImage])
    console.log(image);
    // const image = await fetchImage(activity.activity)
    return (
        <div className="activity">
            <Card className="mx-auto" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} style={{ width: "286px", height: "191px", objectFit: "cover" }} />
                <Card.Body>
                    <Card.Title>{activity.activity}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Type : {activity.type}</ListGroup.Item>
                    <ListGroup.Item>Participants : {activity.participants}</ListGroup.Item>
                    <ListGroup.Item>Price : {activity.price}</ListGroup.Item>
                    <ListGroup.Item>Accessibility : {activity.accessibility}</ListGroup.Item>
                </ListGroup>
                {!isSaved ? (
                    <Button
                        variant="danger"
                        onClick={(e) => {
                            setIsSaved(true);
                            handleSave(e, activity, image);
                        }}
                    >
                        Add to favorite activities
                    </Button>
                ) : (
                    <Button
                        variant="secondary"
                        disabled>
                        Saved to favorites
                    </Button>
                )}
            </Card>
        </div>
    );
}

export default Activity;
