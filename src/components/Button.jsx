import React from "react";
import Axios from "axios";
import style from "/src/styles/Button.module.css";
import { useState } from "react";

// const [isLoading, setIsLoading] = useState(true);

function Button({ setJoke }) {
  const fetchJoke = async () => {
    try {
      // setIsLoading(true);
      const response = await Axios.get(import.meta.env.VITE_API_URL);
      setJoke(response.data);
      // setIsLoading(false);
    } catch (err) {
      console.error("Error fetching joke:", err);
    }
  };

  return (
    <button className={style.button} onClick={fetchJoke}>
      New joke
    </button>
  );
}

export default Button;
