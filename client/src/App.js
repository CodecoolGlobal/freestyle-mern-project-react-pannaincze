import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import './App.css';
import QueryForm from './components/QueryForm';
import CreateActivity from './components/CreateActivity';
import Favorites from './components/Favorites';


function App() {

  const [currentActivity, setCurrentActivity] = useState(null)
  const [favoriteActivities, setFavoriteActivities] = useState(null)
  const [showRnd, setShowRnd] = useState(false)
  const [showCreate, setShowCreate] = useState(false)
  const [showFav, setShowFavorites] = useState(false)

  useEffect(() => {
    fetchFavorites()
  }, [])

  function handleSubmit(e, url) {
    e.preventDefault()
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCurrentActivity(data)
      })
  }

  function handleSave(e, activity) {
    e.preventDefault()
    fetch('http://localhost:3000/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(activity)
    })
      .then(() => {
        console.log(activity)
        fetchFavorites()
      })
      .catch(err => console.log(err))
  }

  function deleteActivity(id) {
    console.log(id)
    fetch(`http://localhost:3000/favorites/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        fetchFavorites()
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function editActivity(id, activity, type, participants, price, accessibility) {
    const data = { description: activity, type, participants, price, accessibility }
    console.log(id, data)
    fetch(`http://localhost:3000/favorites/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('response: ', data)
        fetchFavorites()
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function fetchFavorites() {
    fetch('http://localhost:3000/favorites')
      .then(response => response.json())
      .then(response => {
        setFavoriteActivities(response)
        console.log(response)
      })
  }

  return (
    <div className="App">
      <h1>I'm bored</h1>
      <button onClick={() => {
        setShowRnd(true)
        setShowFavorites(false)
        setShowCreate(false)
      }}>Search a random activity</button>
      <button onClick={() => {
        setShowRnd(false)
        setShowFavorites(false)
        setShowCreate(true)
      }}>Create your own activity!!!!!!!</button>
      <button onClick={() => {
        setShowRnd(false)
        setShowFavorites(true)
        setShowCreate(false)
      }}>Show favorite activities</button>
      {showRnd && <QueryForm
        handleSubmit={handleSubmit}
        currentActivity={currentActivity}
        handleSave={handleSave}

      />}
      {showCreate && <CreateActivity handleSave={handleSave} />}
      {showFav && <Favorites favorites={favoriteActivities} deleteActivity={deleteActivity} editActivity={editActivity} />}
    </div>
  );
}

export default App;
