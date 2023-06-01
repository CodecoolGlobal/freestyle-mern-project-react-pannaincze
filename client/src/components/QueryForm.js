import { useState } from 'react';
import Slider from './Slider';
import Activity from './Activity';

function QueryForm({ currentActivity, handleSave, handleSubmit }) {

    const [type, setType] = useState('')
    const [participants, setParticipants] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [price, setPrice] = useState('')
    const [accessibility, setAccessibility] = useState('')
    const [isSaved, setIsSaved] = useState(false)


    function createURL() {
        let url = `http://www.boredapi.com/api/activity/`
        if (type || participants || minPrice || maxPrice || accessibility) {
            url += `?`
        }
        if (type) {
            url += `type=${type}&`
        }
        if (participants) {
            url += `participants=${participants}&`
        }
        if (minPrice) {
            url += `minrice=${minPrice}&`
        }
        if (price) {
            url += `minrice=${price}&`
        }
        if (maxPrice) {
            url += `maxrice=${maxPrice}&`
        }
        if (accessibility) {
            url += `accessibility=${accessibility}&`
        }
        if (url[url.length - 1] === '&') {
            url = url.slice(0, -1)
        }
        return url
    }


    return (
        <>
            <form onSubmit={(e) => {
                handleSubmit(e, createURL())
                setIsSaved(false)
                }} >
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
                    <label htmlFor="minprice">Minimum price:</label>
                    <input onChange={(e) => setMinPrice(e.target.value)} type="text" id="price" />
                    <label htmlFor="maxprice">Maximum price:</label>
                    <input onChange={(e) => setMaxPrice(e.target.value)} type="text" id="price" />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <Slider setPrice={setPrice} />
                </div>
                <label htmlFor="accessibility">Accessibility:</label>
                <input onChange={(e) => setAccessibility(e.target.value)} type="text" id="accessibility" />
                <input type="submit" value="Submit"></input>
            </form>
            {currentActivity && <Activity
                activity={currentActivity}
                handleSave={handleSave}
                isSaved={isSaved}
                setIsSaved={setIsSaved}
            />}
        </>
    )
}

export default QueryForm