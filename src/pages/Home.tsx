import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Header from '../components/Header/Header'
import Coin from '../components/Coin/Coin'
import PageParallax from '../components/PageParallax/PageParallax'
import PageRow from '../components/PageRow/PageRow'
import Projects from '../components/Projects/Projects'
import Section from '../components/Section/Section'
import Skills from '../components/Skills/Skills'
import Slider from '../components/Slider/Slider'

import { SiteSettings } from '../SiteSettings'
import { mySkills } from '../Skills'

const items = [
  <>
    <Section
      title = 'About me'
      simpleContent = {true}
    >
      <Row>
        <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
        <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
      </Row>
    </Section>
  </>,
  <>
  <Section
    title = 'Test'
    titleAction = {<Button variant="outline-primary">Primary</Button>}
    simpleContent = {true}
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
    title = 'Skills test'
    simpleContent = {true}
  >
    <Row>
      <Skills items = {mySkills} showFilter = {true}/>
    </Row>
  </Section>
</>,
<>
  <Section
    title = 'Test'
    titleAction = {<Button variant="outline-primary">Primary</Button>}
    simpleContent = {true}
  >
    <Row>
      <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
      <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
      <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
    </Row>
  </Section>
</>
]

function Home () {
  return (
    <>
      <PageParallax
        backgroundImg = 'url(/homeBg.jpeg)'
      >
        <Header
          title = {SiteSettings.siteTitle}
          subTitle = {SiteSettings.job}
        />
        <Coin
          frontImg = {SiteSettings.githubLogo}
          backImg = {SiteSettings.personalLogo}
        />
        <PageRow variant = 'fill' >
          <Section
            title = 'Test'
            titleAction = {<Button variant="outline-primary">Primary</Button>}
            simpleContent = {true}
          >
            <Row>
              <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
              <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
              <Col><p>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></Col>
            </Row>
          </Section>
        </PageRow>
        <PageRow variant = 'dark' >
          <Section
            title = 'Skills test'
            simpleContent = {true}
          >
            <Row>
              <Skills items = {mySkills} showFilter = {true}/>
            </Row>
          </Section>
        </PageRow>
        <Slider
          items = {items}
          topics = {['About me', 'Test', 'Skills test', 'Test 2']}
        />
        <PageRow variant = 'dark' >
          <Section
            title = 'Projects'
            simpleContent = {true}
            >
            <Projects />
          </Section>
        </PageRow>
      </PageParallax>
    </>
  )
}

export default Home
