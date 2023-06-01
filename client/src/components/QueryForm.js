import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Slider from "./Slider";
import Activity from "./Activity";
import { Form, Button } from "react-bootstrap";

function QueryForm({ currentActivity, handleSave, handleSubmit }) {
    const [type, setType] = useState("");
    const [participants, setParticipants] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [price, setPrice] = useState("");
    const [accessibility, setAccessibility] = useState("");
    const [isSaved, setIsSaved] = useState(false);

    function createURL() {
        let url = `http://www.boredapi.com/api/activity/`;
        if (type || participants || minPrice || maxPrice || accessibility) {
            url += `?`;
        }
        if (type) {
            url += `type=${type}&`;
        }
        if (participants) {
            url += `participants=${participants}&`;
        }
        if (minPrice) {
            url += `minrice=${minPrice}&`;
        }
        if (price) {
            url += `minrice=${price}&`;
        }
        if (maxPrice) {
            url += `maxrice=${maxPrice}&`;
        }
        if (accessibility) {
            url += `accessibility=${accessibility}&`;
        }
        if (url[url.length - 1] === "&") {
            url = url.slice(0, -1);
        }
        return url;
    }

    return (
        <div className='queryDiv'>
            <Form
                className='mx-5'
                onSubmit={(e) => {
                    handleSubmit(e, createURL());
                    setIsSaved(false);
                }}
            >
                <Form.Group className="mb-3" controlId="formType">
                    <Form.Label htmlFor="type">Type:</Form.Label>
                    <Form.Select onChange={(e) => setType(e.target.value)} id="type">
                        <option value="" disabled selected>
                            Select your option
                        </option>
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
                <Form.Group>
                    <Form.Label htmlFor="participants">Participants:</Form.Label>
                    <Form.Control
                        onChange={(e) => setParticipants(e.target.value)}
                        type="text"
                        id="participants"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="minprice">Minimum price:</Form.Label>
                    <Form.Control
                        onChange={(e) => setMinPrice(e.target.value)}
                        type="text"
                        id="price"
                    />
                    <Form.Label htmlFor="maxprice">Maximum price:</Form.Label>
                    <Form.Control
                        onChange={(e) => setMaxPrice(e.target.value)}
                        type="text"
                        id="price"
                    />
                </Form.Group>
                {/* <Form.Group>
                    <Form.Label htmlFor="price">Price:</Form.Label>
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formAccessibility">
                    <Form.Label htmlFor="accessibility">Accessibility:</Form.Label>
                    <Form.Control
                        onChange={(e) => setAccessibility(e.target.value)}
                        type="text"
                        id="accessibility"
                    />
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
            {currentActivity && (
                <Activity
                    activity={currentActivity}
                    handleSave={handleSave}
                    isSaved={isSaved}
                    setIsSaved={setIsSaved}
                />
            )}
        </div>
    );
}

export default QueryForm;
