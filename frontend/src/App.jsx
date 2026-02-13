import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/apijokes")
      .then((res) => {
        console.log(res.data);   // Debug
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1>Chai and Full Stack</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div className="joke-card" key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
