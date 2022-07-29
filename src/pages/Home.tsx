import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import Slider from '../components/Slider/Slider'
import SliderItem from '../components/Slider/SliderItem'

import { SiteSettings } from '../SiteSettings'
import './styles/home.scss'

const items = [
  <>
    <SliderItem
      title = 'About me'
    >
      <Row>
        <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
        <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
      </Row>
    </SliderItem>
  </>,
  <>
  <SliderItem
    title = 'asdasd'
    titleAction = {<Button variant="outline-primary">Primary</Button>}
  >
    <Row>
      <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
      <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
      <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
    </Row>
  </SliderItem>
</>,
  <>
  <SliderItem
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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Row>
  </SliderItem>
</>
]

function Home () {
  return (
    <>
      <div className='home-wrapper' style={{ backgroundImage: 'url(/homeBg.jpeg)' }}>
        <div className='home-head'>
          <div className='home-title'>
            <h1>{SiteSettings.siteTitle}</h1>
            <h2>{SiteSettings.job}</h2>
          </div>
        </div>
        <Slider
          sliderHeader={SiteSettings.personalLogo}
          items={items}
          siteTitle={SiteSettings.siteTitle}
          job={SiteSettings.job}
          />
        <div className='black' style={{ paddingTop: '21px', paddingBottom: '21px' }}>
          <SliderItem
            title = 'Skills'
          >
            <Row>
              <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
              <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
            </Row>
          </SliderItem>
        </div>
      </div>
    </>
  )
}

export default Home
