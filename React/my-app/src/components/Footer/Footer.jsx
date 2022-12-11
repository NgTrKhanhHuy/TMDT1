import React from 'react'
import './footer.css'
import { Container,Row,Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from'../../assets/images/logo1.png'
const Footer = () => {
  const year = new Date().getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6'>
        <div className="logo">
        <img  className='logo1'src={logo}/>
          <div>
            <h1>Funirture</h1>
          </div>
          
        </div>
        <p className="footer__text mt-4">
            lorem ipsum dolor amet constae adpicibng eelsit
            cumoqe
            dolor labor evneise mulla itaque soluita sit provindne
            consease lavbiaeoa
          </p>

        </Col>
         <Col lg='3' md='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className='quick__links-title'>Top Categories</h4>
           
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mordem Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
           
            </div>

        </Col>
        <Col lg='2' md='3' className='mb-4'>
        <div className="footer__quick-links">
              <h4 className='quick__links-title'>Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>

        </Col>  
        <Col lg='3' md='4'>
        <div className="footer__quick-links">
              <h4 className='quick__links-title'>Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                 <span><i class="ri-map-pin-line"></i></span>
                 <p>123 ZindaBear, Syllet, Bangleasd</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+84771455921</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                 <span><i class="ri-mail-line"></i></span>
                 <p>nlu@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>

      </Col>  
      <Col lg='12'>
          <p className='footer__copyright'>Coppyright {year} developed by TMDT Nhom 13. All rights reserved.</p>
      </Col>
      </Row>
    </Container>

  </footer>
  
};

export default Footer;