import React, { FC } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './slider.scss'

const Slider: FC<any> = ({
  sliderHeader = null,
  items
}) => {
  return (
    <div className='slider'>
      {sliderHeader
        ? <div className='slider-header'>
          <img src={sliderHeader} alt={'asd'}></img>
        </div>
        : null
      }
      <Carousel fade style={{ height: '400px' }}>
        {
          items.map((item:any, index:number) => {
            return (
              <Carousel.Item key={index} >
                item
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Slider
