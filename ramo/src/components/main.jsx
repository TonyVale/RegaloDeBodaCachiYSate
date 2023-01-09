import React from "react";
import "../style/main.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mainimg from "../img/Mainimage.png"
export default function Main(){
    return(
        <Container fluid className="main">
            <Row className=" flex-xl-row-reverse justify-content-md-center">
                <Col xs="12" xl="6" className="flores"></Col>
                <Col xs="12" xl="5" className="main-text">
                   <div><p>Aquí yace inmortalizado en la eternidad del internet un recuerdo de la unión entre Cachi y Sate.</p>
                   <p>Que sus nombres permanezcan juntos en la historia hasta que el internet desaparezca.</p>
                   </div>
                   
                </Col> 
                
            </Row>
            <img src="../img/Mainimage.png" alt="" />
        </Container>
    )
}