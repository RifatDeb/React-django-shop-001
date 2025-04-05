import React from 'react'
import './fotter.scss'
import {Container, Row, Col} from 'react-bootstrap'
import fb from '../../assets/facebook.png'
import Twitter from '../../assets/Twitter.png'
import  instergram from '../../assets/instergram.png'
import  brand from '../../assets/brand.png'
import badge  from '../../assets/Badge.png'

const Fotter = () => {
  return (

        <div className="fotter-section">
            <Container>

                <Row>
                <Col sm={12} md={4} lg={2}> <img className='brand-icon'  src={brand} alt="brand-icon" /> </Col>


                    <Col sm={12} md={4} lg={2}> <p className="fotter-heading">  Quick Links</p>
                    <p>About Us</p>
                    <p>Bulk Order</p>
                    <p>Gifts</p>
                    <p>Organic Garden</p>
                    </Col>


                    <Col sm={12} md={4} lg={2}>  <p className="fotter-heading">  Legal</p>
                    <p>T&C</p>
                    <p>Policy</p>
                    <p>Returns </p>
                    <p>Shipping</p>
                    <p>Cancellation</p>
                    </Col>

                    <Col sm={12} md={4} lg={2}>  <p className="fotter-heading"> Support </p>
                    <p>FAQs</p>
                    <p>Contact</p>

                    </Col>

                    <Col sm={12} md={4} lg={2}> <img className='badge-icon' src={badge} alt="badge" /></Col>


                    <Col sm={12} md={4} lg={2}> <p>© 2025 Plan A Plant
                    All Rights Reserved</p>

                    <div className="social-icon">
                        <img src={fb} alt="facebook" className="logos" />
                        <img src={Twitter} alt="Twitter" className="logos" />
                        <img src={instergram} alt="instergram" className="logos" />
                    </div>
                    </Col>

                </Row>
            </Container>

        </div>
 
  )
}

export default Fotter
