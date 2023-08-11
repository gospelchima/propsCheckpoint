import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./component/PlayersList";

function App() {
  return (
    <div>
      <h1 style={{color:"white", marginBottom:"15px"}}>The Best FIFA Football Awards</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <PlayersList />
      </div>
    </div>
  );
}

export default App;
