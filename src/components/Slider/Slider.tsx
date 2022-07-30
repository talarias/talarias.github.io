import React, { FC, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './slider.scss'

const Slider: FC<any> = ({
  sliderHeader = null,
  items,
  siteTitle = null,
  job = null,
  children = null
}) => {
  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  return (
    <>
      <div className={'slider ' + (active ? 'active' : '')}>
        {sliderHeader
          ? <div className='slider-header'>
            <img src={sliderHeader} alt={'asd'}></img>
          </div>
          : null}
        <Carousel fade style={{ minHeight: '400px' }} onSlide={toggle} onSlid={toggle} interval={8000}>
          {items.map((item: any, index: number) => {
            return (
              <Carousel.Item key={index}>
                {item}
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    </>
  )
}

export default Slider
