import React, { FC, useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { SliderData } from './types'

import './slider.scss'
import PageRow from '../Layout/PageRow/PageRow'
import Section from '../Layout/Section/Section'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon } from '@primer/octicons-react'
import { Col, Row } from 'react-bootstrap'

const Slider: FC<SliderData> = ({
  items = [],
  topics = [],
  interval = 15000,
  carouselMaxHeight = 300
}) => {
  const [active, setActive] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isContentExpanded, setIsContentExpanded] = useState(false)

  // const expandContent = () => { setIsContentExpanded(!isContentExpanded) }

  if (interval) {
    useEffect(() => {
      const timer = setInterval(() => {
        slide(1)
      }, interval)
      return () => clearInterval(timer)
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
      <Col key={key} xs={12} md={2} onClick={() => setCurrentIndex(index)} className='topic-wr'>
        <h4 className={'topic active-' + active}>{topic}</h4>
      </Col>
    )
  }

  const genIndexes = () => {
    const myList: any = []

    topics.forEach((topicElement, index) => {
      let isActive = false
      if (currentIndex === index) isActive = true

      myList.push(
        <div key={index} className={'index active-' + isActive} onClick={() => setCurrentIndex(index)} title={topicElement as string}></div>
      )
    })
    return myList
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

  const getCarouselStyle = () => {
    const styleData = {
      minHeight: carouselMaxHeight,
      maxHeight: undefined as any
    }
    if (!isContentExpanded) styleData.maxHeight = carouselMaxHeight

    return styleData
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
                style={getCarouselStyle()}
                onSlide={toggle}
                onSlid={toggle}
                activeIndex={currentIndex}
                controls={false}
                indicators={false}
                >
                {items.map((item: any, index: number) => {
                  return (
                    <Carousel.Item key={index}>
                      {item}
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            <p className='show-more-act' title='Expand Content'
              onClick={() => { setIsContentExpanded(!isContentExpanded) }}
            >
              {
                isContentExpanded ? <ChevronUpIcon size={34} /> : <ChevronDownIcon size={34} />
              }
            </p>
          </div>
          <div className='index-wrapper active-'>
            {genIndexes()}
          </div>
          <div className='slider-topics'>
            <Section simpleContent = {false}>
              <Row className="justify-content-md-center topics">
                {getCurrentTopics()}
              </Row>
              <Row className="justify-content-between">
                <Col xs={1} className='topics-prev'>
                  <a onClick={() => slide(-1)}>
                    <ChevronLeftIcon size={34} />
                  </a>
                </Col>
                <Col xs={1} className='topics-next'>
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
