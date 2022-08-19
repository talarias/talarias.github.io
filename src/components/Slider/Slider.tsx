import React, { FC, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { SliderData } from './types'

import './slider.scss'
import PageRow from '../PageRow/PageRow'
import Section from '../Section/Section'

const Slider: FC<SliderData> = ({
  items,
  topics = []
}) => {
  const [active, setActive] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(undefined as number | undefined)

  const toggle = () => {
    setActive(!active)
  }

  const clearSetIndex = () => {
    setCurrentIndex(undefined)
  }

  function setIndex (index:number) {
    setCurrentIndex(index)
  }

  const topicItems = topics.map((topic:any, index:number) => {
    let active = false

    if (index === currentIndex) {
      active = true
    }

    return (
      <h4 key={index} onClick={() => setIndex(index)} className={'active-' + active}>{topic}</h4>
    )
  })

  return (
    <>
      <PageRow
          variant={(active ? '' : 'fill')}
          showPadding={false}
        >
          <div className='slider-head'>
            <Section simpleContent = {false}>
              {topicItems}
            </Section>
          </div>
          <div className='slider'>
            <Carousel style={{ minHeight: '400px' }} onSlide={toggle} onSlid={toggle} onSelect={clearSetIndex} interval={10000} activeIndex={currentIndex}>
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
