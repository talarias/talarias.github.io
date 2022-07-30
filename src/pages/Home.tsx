import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import Skills from '../components/Skills/Skills'
import Slider from '../components/Slider/Slider'
import SliderCard from '../components/Slider/SliderCard'

import { SiteSettings } from '../SiteSettings'
import './styles/home.scss'

const skillItems = [
  {
    title: 'React',
    percent: 100
  },
  {
    title: 'Webpack',
    percent: 90
  },
  {
    title: 'GitHubActions',
    percent: 80
  },
  {
    title: 'TypeScript',
    percent: 90
  },
  {
    title: 'Git',
    percent: 100
  },
  {
    title: 'NPM',
    percent: 100
  },
  {
    title: 'Node.js',
    percent: 90
  },
  {
    title: 'Plone',
    percent: 100
  },
  {
    title: 'Python',
    percent: 100
  },
  {
    title: 'PyPi',
    percent: 100
  },
  {
    title: 'Next',
    percent: 90
  },
  {
    title: 'JavaScript',
    percent: 100
  }
]
const items = [
  <>
    <SliderCard
      title = 'About me'
    >
      <Row>
        <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
        <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
      </Row>
    </SliderCard>
  </>,
  <>
  <SliderCard
    title = 'asdasd'
    titleAction = {<Button variant="outline-primary">Primary</Button>}
  >
    <Row>
      <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
      <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
      <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
    </Row>
  </SliderCard>
</>,
  <>
  <SliderCard
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
  </SliderCard>
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
        <div className='black' style={{ paddingTop: '21px', paddingBottom: '28px' }}>
          <SliderCard
            title = 'Skills'
          >
            <Skills
              skillsData={skillItems}
            />
          </SliderCard>
        </div>
      </div>
    </>
  )
}

export default Home
