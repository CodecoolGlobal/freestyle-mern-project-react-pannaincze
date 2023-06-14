import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

export default function CreateActivity({ handleSave, fetchImage }) {

    const [activity, setActivity] = useState('')
    const [type, setType] = useState('')
    const [participants, setParticipants] = useState('')
    const [price, setPrice] = useState('')
    const [accessibility, setAccessibility] = useState('')
    const [isSaved, setIsSaved] = useState(false)

    return (
        <div className='createDiv'>
            <Form className='mx-5' onSubmit={((e) => {
                e.preventDefault()
                setIsSaved(true)
                fetchImage(activity)
                    .then(image => {
                        handleSave(e, {
                            activity,
                            type,
                            participants,
                            price,
                            accessibility,
                        }, image,)
                    })
            })}>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="activity">Activity:</Form.Label>
                    <Form.Control onChange={(e) => setActivity(e.target.value)} type="text" id="activity" />
                    <Form.Label htmlFor="type">Type:</Form.Label>
                    <Form.Select onChange={(e) => setType(e.target.value)} id="type">
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
                    </Form.Select>
                </Form.Group>

                <Form.Label htmlFor="participants">Participants:</Form.Label>
                <Form.Control onChange={(e) => setParticipants(e.target.value)} type="text" id="participants" />

                <Form.Label htmlFor="price">Price:</Form.Label>
                <Form.Control onChange={(e) => setPrice(e.target.value)} type="text" id="price" />

                <Form.Label htmlFor="accessibility">Accessibility:</Form.Label>
                <Form.Control onChange={(e) => setAccessibility(e.target.value)} type="text" id="accessibility" />

                {!isSaved ?
                    <Button
                        variant="danger"
                        className="mt-3" type="submit">Add to favorite activities</Button>
                    :
                    <h3>You have added this activity to your favorites!</h3>}
            </Form>
        </div>
    )
}
