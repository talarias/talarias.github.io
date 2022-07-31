import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import PageParallax from '../components/PageParallax/PageParallax'
import PageRow from '../components/PageParallax/PageRow'
import Section from '../components/Section/Section'
import Skills from '../components/Skills/Skills'
import Slider from '../components/Slider/Slider'

import { SiteSettings } from '../SiteSettings'
import { mySkills } from '../Skills'

const items = [
  <>
    <Section
      title = 'About me'
    >
      <Row>
        <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
        <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
      </Row>
    </Section>
  </>,
  <>
  <Section
    title = 'asdasd'
    titleAction = {<Button variant="outline-primary">Primary</Button>}
  >
    <Row>
      <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
      <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
      <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
    </Row>
  </Section>
</>,
  <>
  <Section
    title = 'xxvxv'
  >
    <Row>
      <Card style={{ width: '18rem' }} bg={'dark'}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="outline-primary">Primary</Button>
        </Card.Body>
      </Card>
    </Row>
  </Section>
</>
]

function Home () {
  return (
    <>
      <PageParallax
        title = {SiteSettings.siteTitle}
        subtitle = {SiteSettings.job}
        backgroundImg = 'url(/homeBg.jpeg)'
      >
        <Slider
          sliderHeader={SiteSettings.personalLogo}
          items={items}
        />
        <PageRow variant = 'dark' >
          <Section title = 'Skills' >
            <Skills items = {mySkills} showFilter = {true}/>
          </Section>
        </PageRow>
      </PageParallax>
    </>
  )
}

export default Home
