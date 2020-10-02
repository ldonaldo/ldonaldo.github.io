import React from 'react';
import logo from './logo.svg';
import { Image, Button, Badge, Row, Container, Navbar, Nav, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { Download } from 'react-bootstrap-icons'
import imageProfile from './Donaldo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row className="d-flex justify-content-center">
            <Image src={imageProfile} width={250} roundedCircle />
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={8}>            
              <p className="title">Donaldo Llanos Terán</p>            
              <hr />
              <p>Full Stack Developer</p>
            </Col>
          </Row>          
          
          <Row className="d-flex justify-content-center">
            <Col md={8}>
              <Button className="icon-cv" href="https://drive.google.com/file/d/1yPuKexZobgbRMPyArpaOFHxMP0c2t2ZY/view?usp=sharing" variant="info">Download my CV <Download size={30} /></Button>{' '}
            </Col>
          </Row>        
          <Navbar collapseOnSelect bg="dark" expand="md" fixed="bottom" >  
            <Navbar.Toggle className="toggle">
              <Row>
                <OverlayTrigger placement="top" 
                overlay={<Tooltip>Cellphone</Tooltip>}>
                  <Badge className="badge" sm={3} pill variant="dark">
                    <a className="text-white" href="#" title="Icon Whatsapp #340360"><img src="https://icon-library.net//images/icon-whatsapp/icon-whatsapp-3.jpg" width="20" /> +57 3023094339</a>   
                  </Badge>
                </OverlayTrigger>
                <OverlayTrigger placement="top" 
                overlay={<Tooltip>Email</Tooltip>}>
                  <Badge className="badge" sm={3} pill variant="dark">
                  <a className="text-white" href="mailto:ldonaldo@uninorte.edu.co" title="Gmail Icon Vector #11758"><img src="https://icon-library.net//images/gmail-icon-vector/gmail-icon-vector-23.jpg" width="20" />ldonaldo@uninorte.edu.co</a>   
                  </Badge>
                </OverlayTrigger>
                <OverlayTrigger placement="top" 
                overlay={<Tooltip>Linkedin</Tooltip>}>
                  <Badge className="badge" sm={3} pill variant="dark">
                    <a href="https://www.linkedin.com/in/donaldo-llanos-ter%C3%A1n/" title="Linked In Icon #166878"><img src="https://icon-library.net//images/linked-in-icon/linked-in-icon-26.jpg" width="20" /></a>
                  </Badge>
                </OverlayTrigger>
                <OverlayTrigger placement="top" 
                overlay={<Tooltip>Github</Tooltip>}>
                  <Badge className="badge" sm={3} pill variant="dark">
                    <a href="https://github.com/ldonaldo" title="Github Svg Icon #170836"><img src="https://icon-library.net//images/github-svg-icon/github-svg-icon-5.jpg" width="20" /></a>
                  </Badge>
                </OverlayTrigger>
              </Row>   
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              Contact
            </Nav> 
            <Nav className="ml-auto">
              <OverlayTrigger placement="top" 
              overlay={<Tooltip>Cellphone</Tooltip>}>
                <Badge className="badge" sm={3} pill variant="dark">
                  <a className="text-white" href="#" title="Icon Whatsapp #340360"><img src="https://icon-library.net//images/icon-whatsapp/icon-whatsapp-3.jpg" width="50" /> +57 3023094339</a>   
                </Badge>
              </OverlayTrigger>
              <OverlayTrigger placement="top" 
              overlay={<Tooltip>Email</Tooltip>}>
                <Badge className="badge" sm={3} pill variant="dark">
                <a className="text-white" href="mailto:ldonaldo@uninorte.edu.co" title="Gmail Icon Vector #11758"><img src="https://icon-library.net//images/gmail-icon-vector/gmail-icon-vector-23.jpg" width="50" />ldonaldo@uninorte.edu.co</a>   
                </Badge>
              </OverlayTrigger>
              <OverlayTrigger placement="top" 
              overlay={<Tooltip>Linkedin</Tooltip>}>
                <Badge className="badge" sm={3} pill variant="dark">
                  <a href="https://www.linkedin.com/in/donaldo-llanos-ter%C3%A1n/" title="Linked In Icon #166878"><img src="https://icon-library.net//images/linked-in-icon/linked-in-icon-26.jpg" width="50" /></a>
                </Badge>
              </OverlayTrigger>
              <OverlayTrigger placement="top" 
              overlay={<Tooltip>Github</Tooltip>}>
                <Badge className="badge" sm={3} pill variant="dark">
                  <a href="https://github.com/ldonaldo" title="Github Svg Icon #170836"><img src="https://icon-library.net//images/github-svg-icon/github-svg-icon-5.jpg" width="50" /></a>
                </Badge>
              </OverlayTrigger>
            </Nav>
            </Navbar.Collapse>   
          </Navbar>
        </Container>
      </header>
    </div>
  );
}

export default App;
