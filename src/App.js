import React from 'react'
import Navigation from './components/Navigation/Navigation'
import FooterItem from './components/Navigation/FooterItem'

import { siteSettings } from './siteSettings'

import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  const menuItems = [

  ]
  const menuFooterItems = [
    <>
      <FooterItem
        title = {'GitHub'}
        subTitle = {siteSettings.githubUrl}
        url = {siteSettings.githubUrl}
        logo = {'/github.png'}
        logoAlt = {'GitHub-logo'}
      ></FooterItem>
    </>
  ]

  return (
    <>
      <Navigation
        menuItems = {menuItems}
        menuFooterItems = {menuFooterItems}
        logo = {siteSettings.logo}
        siteTitle = {siteSettings.siteTitle}
        siteSubTitle = {siteSettings.siteSubTitle}
      >
      </Navigation>
    </>
  )
}

export default App
