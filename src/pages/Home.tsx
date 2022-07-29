import React from 'react'
import Slider from '../components/Slider/Slider'

import { SiteSettings } from '../SiteSettings'

import './styles/home.scss'

function Home () {
  const items = [
    <>
      <p>item 1</p>
    </>,
    <>
    <p>item 2</p>
  </>
  ]

  return (
    <>
      <div className='home-header' >
        <div className='home-title'>
          <h1>{SiteSettings.siteTitle}</h1>
          <h2>{SiteSettings.job}</h2>
        </div>
      </div>
      <Slider sliderHeader={SiteSettings.personalLogo} items={items} />
    </>
  )
}

export default Home
