import React from 'react';
import {Card} from 'react-bootstrap';
import { CardGroup } from "react-bootstrap";
import "../Home/Home.css";
import Divider from "@material-ui/core/Divider";


export default function About() { 
return(
    <>
    <p className="aboutMeH4">About Me</p>
    <Divider style={{ border: '2px solid cornflowerblue',
    backgroundColor: 'cornflowerblue' }}/>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={require('../../images/uob2.jpg')} />
    <Card.Body>
      <Card.Title style={{color:'#3f51b5'}}>Education</Card.Title>
      <Card.Text>
      <p>
        <strong>University of Birmingham Coding Boot Camp :</strong><br></br> Full Stack Web Development.<br></br><br></br>
        <strong>University Of Colombo, Sri Lanka : </strong> <br></br>Physical Science(BSc).<br></br><br></br>
        <strong>School of Technology, St.Patrick's International Collage, London :</strong> <br></br> Certificate of Higher Education Information System Engineering. 
      </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted" style={{display: 'block', textAlignLast: 'center'}}>Education</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={require('../../images/expe.png')} />
    <Card.Body>
      <Card.Title style={{color:'#3f51b5'}}>Experience</Card.Title>
      <Card.Text>
      <p className="info experience">
        <strong>February 2015 to Current : </strong><br></br>Atalian Servest <br></br><br></br>Working in the catering industry. duties included staff leadership and training, creative menu development and special event planning.
      {' '}
      </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted" style={{display: 'block', textAlignLast: 'center'}}>Experience</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={require('../../images/mern.png')} />
    <Card.Body>
      <Card.Title style={{color:'#3f51b5'}}>Skills</Card.Title>
      <Card.Text>
      <p className="info, skills">
        I am consistently expanding my knowledge using Technologies such as<br></br><br></br>
      <strong>  HTML5/6, JavaScript(ES5, ES6, ES6+), CSS, Node.Js, MERN Stack, MySQL, MongoDB, IndexedDB, Bootstrap, JQuery, React, Git and Project management skills.</strong>
      </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted" style={{display: 'block', textAlignLast: 'center'}}>Skills</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={require('../../images/interest.png')} />
    <Card.Body>
      <Card.Title style={{color:'#3f51b5'}}>Interests</Card.Title>
      <Card.Text>
      <p class="info Interests">
        My hobbies are walking outdoors with the kids, going to the Gym and watching Rugby.
      </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted" style={{display: 'block', textAlignLast: 'center'}}>Interests</small>
    </Card.Footer>
  </Card>
</CardGroup>
</>
)
    }