import React, { FC, useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { SliderData } from './types'

import './slider.scss'
import PageRow from '../PageRow/PageRow'
import Section from '../Section/Section'
import { ChevronLeftIcon, ChevronRightIcon } from '@primer/octicons-react'
import { Col, Row } from 'react-bootstrap'

const Slider: FC<SliderData> = ({
  items = [],
  topics = [],
  interval = 10000
}) => {
  const [active, setActive] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  if (interval) {
    useEffect(() => {
      setInterval(() => {
        slide(1)
      }, interval)
    }, [currentIndex])
  }

  const toggle = () => {
    setActive(!active)
  }

  const slide = (step: number) => {
    const nextIndex = currentIndex + step
    const lastIndex = items.length - 1

    if (nextIndex < 0) setCurrentIndex(lastIndex)
    else if (nextIndex <= lastIndex) setCurrentIndex(nextIndex)
    else setCurrentIndex(0)
  }

  const genTopicElement = (topic: any, key: number, index: number, active: Boolean = false) => {
    return (
      <Col key={key} xs={6} md={2} onClick={() => setCurrentIndex(index)}>
        <h4 className={'active-' + active}>{topic}</h4>
      </Col>
    )
  }

  const getCurrentTopics = () => {
    const myList: any = []
    const lastIndex = topics.length - 1

    if (currentIndex === 0) {
      myList.push(
        genTopicElement(topics[lastIndex], 0, lastIndex)
      )
    }

    topics.forEach((topicElement, index) => {
      let active = false

      if (index >= currentIndex - 1 && index <= currentIndex + 1) {
        const key = index + 1

        if (currentIndex === index) active = true

        myList.push(
          genTopicElement(topicElement, key, index, active)
        )
      }
    })

    if (currentIndex === lastIndex) {
      myList.push(
        genTopicElement(topics[0], 0, 0)
      )
    }

    return myList
  }

  return (
    <>
      <PageRow
          variant={(active ? '' : 'fill')}
          showPadding={false}
        >
          <div className='slider-next'>
            <Section simpleContent = {false}>
              <a onClick={() => slide(1)}>
                <ChevronRightIcon size={64} />
              </a>
            </Section>
          </div>
          <div className='slider-prev'>
            <Section simpleContent = {false}>
              <a onClick={() => slide(-1)}>
                <ChevronLeftIcon size={64} />
              </a>
            </Section>
          </div>
          <div className='slider'>
            <Carousel
              style={{ minHeight: '400px' }}
              onSlide={toggle}
              onSlid={toggle}
              activeIndex={currentIndex}
              controls={false}
              >
              {items.map((item: any, index: number) => {
                return (
                  <Carousel.Item key={index}>
                    {item}
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </div>
          <div className='slider-topics'>
            <Section simpleContent = {false}>
              <Row className="justify-content-md-center">
                <Col xs={6} md={1} className='topics-prev'>
                  <a onClick={() => slide(-1)}>
                    <ChevronLeftIcon size={34} />
                  </a>
                </Col>
                {getCurrentTopics()}
                <Col xs={6} md={1} className='topics-next'>
                  <a onClick={() => slide(1) }>
                    <ChevronRightIcon size={34} />
                  </a>
                </Col>
              </Row>
            </Section>
          </div>
      </PageRow>
    </>
  )
}

export default Slider
