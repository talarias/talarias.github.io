import React, { FC } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './footer.scss'

const Footer: FC<any> = () => {
  return (
    <>
        <div className='footer'>
            <Container>
                <Row>
                    <Col><p>Hostet with GitHub Pages</p></Col>
                    <Col><p>Hostet with GitHub Pages</p></Col>
                    <Col><p>Hostet with GitHub Pages</p></Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Footer
