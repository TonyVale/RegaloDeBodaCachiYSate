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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam! Excepturi exercitationem aperiam necessitatibus facilis culpa? Quae laborum alias unde dolores obcaecati accusamus eos et enim recusandae iste voluptatum, error quia iusto officia saepe, delectus pariatur! Consequuntur accusantium quam ducimus fugiat. Similique voluptas, quia officia repudiandae debitis doloremque aspernatur provident, atque maxime cumque modi unde repellat, odit autem ea quas voluptate molestiae quos fuga placeat esse delectus nemo. Labore magni voluptates rerum expedita aspernatur id, tenetur voluptatem eum sapiente repellendus sint optio magnam facilis eveniet a voluptate quidem enim perferendis accusamus perspiciatis placeat. Odio cupiditate perspiciatis veniam recusandae. Dignissimos consequatur corrupti exercitationem magnam, dicta nulla nobis id sint voluptate voluptatem corporis doloremque, quibusdam quisquam eaque eligendi ab. Dolor voluptatum quas dolores provident. Libero natus deleniti aliquam officiis quam repellat rerum temporibus nihil eos minus veritatis iure officia, atque exercitationem ab necessitatibus? Odit consequuntur suscipit aliquid deleniti possimus harum placeat. Atque quaerat quisquam fuga odio cupiditate aperiam voluptate ex doloremque. Omnis facilis nemo harum. Distinctio, aliquid dicta delectus ipsa mollitia placeat reprehenderit aspernatur necessitatibus, at, nisi quisquam obcaecati veniam officiis corrupti repudiandae sit ratione repellendus impedit eos ea? Corrupti quibusdam earum voluptatem quidem facere. Exercitationem dolores blanditiis, minus odio eum vero.
                </Col> 
                
            </Row>
            <img src="../img/Mainimage.png" alt="" />
        </Container>
    )
}