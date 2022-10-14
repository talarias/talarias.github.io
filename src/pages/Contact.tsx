import React from 'react'
import { Button, Row } from 'react-bootstrap'
import Header from '../components/Header/Header'
import PageRow from '../components/Layout/PageRow/PageRow'
import Section from '../components/Layout/Section/Section'
import Login from '../components/Login/Login'
import PageParallax from '../components/PageParallax/PageParallax'

function Contact () {
  return (
    <>
      <PageParallax
        backgroundImg = 'url(/homeBg.jpeg)'
      >
        <Header
          title = 'Contact'
          subTitle = 'test login'
        />
        <PageRow variant = 'fill' >
          <Section
            title = 'Test'
            titleAction = {<Button variant="outline-primary">Primary</Button>}
            simpleContent = {true}
          >
            <Row>
              <Login />
            </Row>
          </Section>
        </PageRow>
      </PageParallax>
    </>
  )
}

export default Contact
