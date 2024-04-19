import Axios from "axios";
import Button from "./Button";
import Jokes from "./Jokes";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <>
      <Jokes />
      <Button />
    </>
  );
}
