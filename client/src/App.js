import { useState } from 'react';
import './App.css';
import Activity from './components/Activity';
import QueryForm from './components/QueryForm';

function App() {

  const [currentActivity, setCurrentActivity] = useState({})

  function handleSubmit(e) {
    e.preventDefault()

        
  }

  async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
}

  return (
    <div className="App">
      <QueryForm
      handleSubmit={handleSubmit}
      />
      <Activity
      activity={currentActivity}
      />
    </div>
  );
}

export default App;
