import React, { Component }  from 'react';
import Swiper from 'react-id-swiper';
import {Card} from 'react-bootstrap';
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "../Home/Home.css";
import Divider from "@material-ui/core/Divider";
import Infos from "../../info";


export default function Portfolio() {
const selectPic = (key)=>{

}
return(
    <>    
    <p className="aboutMeH4">Portfolio</p>
    <Divider style={{ border: '2px solid cornflowerblue',
    backgroundColor: 'cornflowerblue' }}/>
    {Infos.map((info)=>(
<Card style={{ width: '18rem', display:"inline-flex"}} key={info.id}>
  <Card.Img alt="gif" src={info.images[0]} type="video/mp4" />
  <Card.Body>
    <Card.Title>{info.name}</Card.Title>
    <Card.Text>
      {info.Decription}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{info.tech}</ListGroupItem>
    <ListGroupItem>{info.tech}</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href={info.repo}>GitHub</Card.Link>
    <Card.Link href={info.deployed}>Deployed</Card.Link>
  </Card.Body>
</Card>
  
  ))}
  {/* <Swiper>
    <div src={info.images[0]}></div>
    <div src={info.images[1]}></div>
    <div src={info.images[2]}></div>
    <div src={info.images[3]}></div>
  </Swiper> */}
</>
)
}