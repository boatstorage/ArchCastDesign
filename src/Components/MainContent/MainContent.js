import React from "react";
import {Row, Col, CardPanel} from "react-materialize";
import "./MainContent.css"


const MainContent = props =>

<Row>
    <Col s={12} m={3}>
        <CardPanel className="teal lighten-4 black-text">
            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
        </CardPanel>
    </Col>
    
    <Col s={12} m={9}>
        For a simpler card with less markup, try using a card panel which just has padding and a shadow effect
         a simpler card with less markup, try using a card panel which just has padding and a shadow effect
          a simpler card with less markup, try using a card panel which just has padding and a shadow effect
           a simpler card with less markup, try using a card panel which just has padding and a shadow effect
    </Col>
    <Col s={12} m={9}>
        <CardPanel className="teal lighten-4 black-text">
            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
             a simpler card with less markup, try using a card panel which just has padding and a shadow effect
              a simpler card with less markup, try using a card panel which just has padding and a shadow effect</span>
        </CardPanel>
    </Col>
   
</Row>




export default MainContent;