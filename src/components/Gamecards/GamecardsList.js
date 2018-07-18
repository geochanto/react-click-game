import React from "react";
import {Row, Col } from 'reactstrap';

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
const GamecardsList = props => (
  <Row>
    {props.gamecards.map(item => (
      <Col sm="6" xs="6" md="3" key={item.id}>
        <img className="img" src={"img/"+item.src} data-clicked={item.clicked}></img>
      </Col>
    ))}
    </Row>
);

export default GamecardsList;