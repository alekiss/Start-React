import { useState } from "react";
import axios from "axios";
import "./styles.css";


const AxiosCall = () => {
  const [joke, setJoke] = useState("");

  const getJokes = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        setJoke(response.data.setup + "..." + response.data.punchline);
      }
    );
  };

  console.log(joke)

  return (
    <div className="container">
      <div className="joke">
        <h1>{joke}</h1>
      </div>
      {joke === "" ? (
        <button onClick={getJokes} className="submit">
          Click here for a not funny joke
        </button>
      ) : (
        <button onClick={getJokes} className="submit">
          Click here for a outher not funny joke
        </button>
      )}
    </div>
  );
}

export default AxiosCall