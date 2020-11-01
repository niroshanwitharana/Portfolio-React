import React, { Component }  from 'react';
import {Card} from 'react-bootstrap';
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "../Home/Home.css";
import Divider from "@material-ui/core/Divider";
import Info from "../../info.json";

export default function Portfolio() {

return(
    <>    
    <p className="aboutMeH4">Portfolio</p>
    <Divider style={{ border: '2px solid cornflowerblue',
    backgroundColor: 'cornflowerblue' }}/>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="info[0].images" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

</>
)
}