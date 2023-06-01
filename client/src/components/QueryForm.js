import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Slider from "./Slider";
import Activity from "./Activity";
import { Form, Button } from "react-bootstrap";

function QueryForm({ currentActivity, handleSave, handleSubmit, fetchImage }) {
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
            url += `minprice=${minPrice}&`;
        }
        if (price) {
            url += `price=${price}&`;
        }
        if (maxPrice) {
            url += `maxprice=${maxPrice}&`;
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
                <Form.Group className="mb-3">
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
                    <Form.Select onChange={(e) => setMinPrice(e.target.value)}>
                        <option value="" disabled selected>
                            Select your option
                        </option>
                        <option value="0">0</option>
                        <option value="0.1">0.1</option>
                        <option value="0.2">0.2</option>
                        <option value="0.3">0.3</option>
                        <option value="0.4">0.4</option>
                        <option value="0.5">0.5</option>
                        <option value="0.6">0.6</option>
                        <option value="0.7">0.7</option>
                        <option value="0.8">0.8</option>
                        <option value="0.9">0.9</option>
                        <option value="1">1</option>
                    </Form.Select>
                    <Form.Label htmlFor="maxprice">Maximum price:</Form.Label>
                    <Form.Select onChange={(e) => setMaxPrice(e.target.value)}>
                        <option value="" disabled selected>
                            Select your option
                        </option>
                        <option value="0">0</option>
                        <option value="0.1">0.1</option>
                        <option value="0.2">0.2</option>
                        <option value="0.3">0.3</option>
                        <option value="0.4">0.4</option>
                        <option value="0.5">0.5</option>
                        <option value="0.6">0.6</option>
                        <option value="0.7">0.7</option>
                        <option value="0.8">0.8</option>
                        <option value="0.9">0.9</option>
                        <option value="1">1</option>
                    </Form.Select>
                </Form.Group>
                {/* <Form.Group>
                    <Form.Label htmlFor="price">Price:</Form.Label>
                </Form.Group> */}
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="accessibility">Accessibility:</Form.Label>
                    <Form.Control
                        onChange={(e) => setAccessibility(e.target.value)}
                        type="text"
                        id="accessibility"
                    />
                    <Button className="mt-3" variant="danger" type="submit">Submit</Button>
                </Form.Group>
            </Form>
            {
                currentActivity && (
                    <Activity
                        activity={currentActivity}
                        handleSave={handleSave}
                        isSaved={isSaved}
                        setIsSaved={setIsSaved}
                        fetchImage={fetchImage}
                    />
                )
            }
        </div >
    );
}

export default QueryForm;
