import React, { FC, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { SliderData } from './types'

import './slider.scss'
import PageRow from '../PageParallax/PageRow'

const Slider: FC<SliderData> = ({
  sliderHeader = null,
  items
}) => {
  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  return (
    <>
      <PageRow
          variant={(active ? '' : 'fill')}
          showPadding={false}
        >
          <div className='slider'>
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
      </PageRow>
    </>
  )
}

export default Slider
