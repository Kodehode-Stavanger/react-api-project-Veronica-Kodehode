import React, { useState } from "react";
import Button from "./Button";
import style from "/src/styles/Jokes.module.css";

function Jokes() {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });

  return (
    <div className={style.container}>
      <h1 className={style.setup}>{joke.setup}</h1>
      <h2 className={style.punchline}>{joke.punchline}</h2>
      <Button setJoke={setJoke} />
    </div>
  );
}

export default Jokes;
