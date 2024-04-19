import { useState } from "react";
import Axios from "axios";

function Jokes() {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });

  const fetchJoke = async () => {
    try {
      const response = await Axios.get(import.meta.env.VITE_API_URL);
      setJoke(response.data); // Assuming the joke data is in response.data
    } catch (err) {
      console.error("Error fetching joke:", err);
    }
  };

  return (
    <div>
      <h1>{joke.setup}</h1>
      <h2>{joke.punchline}</h2>
      <button onClick={fetchJoke}>Get Joke</button>
    </div>
  );
}

export default Jokes;
