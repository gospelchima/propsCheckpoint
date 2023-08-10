import React from "react";
import Player from "../Player";
import { players } from "../players";
const PlayersList = () => {
  return (
    <>
      {players.map((number) => (
        <Player item={number} />
      ))}
    </>
  );
};

export default PlayersList;
