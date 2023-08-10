import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { players } from "./players";

const Player = ({ item }) => {
  console.log("players id: ", { players });
  return (
    <div>
      <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" style={{height: "160px"}} src={item.image} />
        <Card.Body>
          <Card.Title>{item.playerName}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Age: {item.age}</ListGroup.Item>
          <ListGroup.Item>Country: {item.country}</ListGroup.Item>
          <ListGroup.Item>Team: {item.team}</ListGroup.Item>
          <ListGroup.Item>Jersey Number: {item.jerseyNumber}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Player;
