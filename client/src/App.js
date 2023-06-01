import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./App.css";
import QueryForm from "./components/QueryForm";
import CreateActivity from "./components/CreateActivity";
import Favorites from "./components/Favorites";
import { Button, ButtonGroup, Container, Nav, Navbar } from "react-bootstrap";

function App() {
  const [currentActivity, setCurrentActivity] = useState(null);
  const [favoriteActivities, setFavoriteActivities] = useState(null);
  const [showRnd, setShowRnd] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showFav, setShowFavorites] = useState(false);

  useEffect(() => {
    fetchFavorites();
  }, []);

  async function fetchImage(description) {
    const apiKey = '1NvDE7fcKjluIPqLQJarPaOsQHjv9jjl2eRfrb9caySj64lgithsh7yD';
    const res = await fetch(`https://api.pexels.com/v1/search?query=${description}&per_page=1`, {
      headers: {
        Authorization: apiKey,
      },
    });
    const data = await res.json();
    return data.photos[0].src.original;
  }

  function handleSubmit(e, url) {
    console.log(url);
    e.preventDefault();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCurrentActivity(data);
      });
  }

  function handleSave(e, activity, image) {
    const data = { ...activity, image }
    e.preventDefault();
    fetch("http://localhost:3000/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        fetchFavorites();
      })
      .catch((err) => console.log(err));
  }

  function deleteActivity(id) {
    console.log(id);
    fetch(`http://localhost:3000/favorites/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        fetchFavorites();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function editActivity(
    id,
    activity,
    type,
    participants,
    price,
    accessibility
  ) {
    const data = {
      description: activity,
      type,
      participants,
      price,
      accessibility,
    };
    console.log(id, data);
    fetch(`http://localhost:3000/favorites/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("response: ", data);
        fetchFavorites();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function fetchFavorites() {
    fetch("http://localhost:3000/favorites")
      .then((response) => response.json())
      .then((response) => {
        setFavoriteActivities(response);
        console.log(response);
      });
  }

  return (
    <div className="App">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            {`(>_<)`} I'm bored
          </Navbar.Brand>
        </Container>
      </Navbar>
      <ButtonGroup className="m-4">
        <Button
          className="px-5 py-5"
          variant="danger"
          onClick={() => {
            setShowRnd(false);
            setShowFavorites(false);
            setShowCreate(true);
          }}
        >
          Create your own activity
        </Button>
        <Button
          className="px-5 py-5"
          variant="danger"
          onClick={() => {
            setShowRnd(true);
            setShowFavorites(false);
            setShowCreate(false);
          }}
        >
          Search a random activity
        </Button>
        <Button
          className="px-5 py-5"
          variant="danger"
          onClick={() => {
            setShowRnd(false);
            setShowFavorites(true);
            setShowCreate(false);
          }}
        >
          Show favorite activities
        </Button>
      </ButtonGroup>

      {showRnd && (
        <QueryForm
          handleSubmit={handleSubmit}
          currentActivity={currentActivity}
          handleSave={handleSave}
          fetchImage={fetchImage}
        />
      )}
      {showCreate && <CreateActivity handleSave={handleSave} fetchImage={fetchImage} />}
      {showFav && (
        <Favorites
          favorites={favoriteActivities}
          deleteActivity={deleteActivity}
          editActivity={editActivity}
        />
      )}
    </div>
  );
}

export default App;
