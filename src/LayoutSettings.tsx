import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import FooterItem from './components/Navigation/FooterItem'
import MenuItem from './components/Navigation/MenuItem'

import { SiteSettings } from './SiteSettings'

const MenuItems:any = [
  <MenuItem
    key={1}
    title={'Home'}
    url={'/'}
    logo={false}
    logoAlt={''}
  />,
  <MenuItem
    key={2}
    title={'Contact'}
    url={'/Contact'}
    logo={''}
    logoAlt={''}
  />,
  <MenuItem
    key={2}
    title={'Portfolio'}
    url={'/Portfolio'}
    logo={''}
    logoAlt={''}
  />
]

const menuFooterItems:any = [
  <FooterItem
    key={1}
    title = {'GitHub'}
    subTitle = {SiteSettings.githubUrl}
    url = {SiteSettings.githubUrl}
    logo = {'/github.png'}
    logoAlt = {'GitHub-logo'}
  />
]

const footerContent:any = (
  <Container>
    <Row>
      <Col><p>Hostet with GitHub Pages</p></Col>
      <Col><p>Hostet with GitHub Pages</p></Col>
      <Col><p>Hostet with GitHub Pages</p></Col>
    </Row>
  </Container>
)

export const LayoutSettings = {
  menuItems: MenuItems.map((item:any, i:number) => (
    <div key={i}>
      {item}
    </div>
  )),
  menuFooterItems: menuFooterItems.map((item:any, i:number) => (
    <div key={i}>
      {item}
    </div>
  )),
  footerContent
}
