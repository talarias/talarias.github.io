import React, { FC, useState } from 'react'
import { CardData, MousePos, PositionsData } from './types'

import './card.scss'

const Card: FC<CardData> = ({
  title,
  subTitle = undefined,
  backgroundData = 'url(/homeBg.jpeg)'
}) => {
  const [active, setActive] = useState(false)
  const [cardShineStyle, setCardShineStyle] = useState({})
  const [cardStyle, setCardStyle] = useState({ background: backgroundData } as any)
  const [cardShadowStyle, setCardShadowStyle] = useState({})
  const [cardTitleStyle, setCardTitleStyle] = useState({})
  const [cardSubtitleStyle, setCardSubtitleStyle] = useState({})

  const setCardPositions = (positionsData: PositionsData) => {
    setCardShineStyle({
      background: 'linear-gradient(' + positionsData.angle + 'deg, rgba(255,255,255, ' + (positionsData.currentMousePosY / positionsData.wHeight) * 0.7 + ') 0% ,rgba(255,255,255, 0) 80%)'
    })
    setCardStyle({
      WebkitTransform: 'translate3d(' + positionsData.trans1 + ', ' + positionsData.trans2 + ', 0) scale(1.2) rotatex(' + positionsData.around1 + ') rotatey(' + positionsData.around2 + ')',
      background: backgroundData
      // backgroundPosition: positionsData.mousePositionX + '%' + ' ' + (positionsData.currentMousePosY / positionsData.wHeight) * 50 + '%'
    })
    setCardShadowStyle({
      transform: 'scale(1.1,1.1) translateX(' + ((positionsData.mouseFromCenterX * -0.02) + 12) + 'px) translateY(' + ((positionsData.mouseFromCenterY * -0.02) + 12) + 'px) scale(1.0) rotateY(' + (positionsData.mouseFromCenterX / 25) * 0.5 + 'deg) rotateX(' + ((positionsData.mouseFromCenterY / -25)) + 'deg)'
    })
    setCardTitleStyle({
      transform: 'translateX(' + ((positionsData.mouseFromCenterX / 25) * 0.7) + 'px) translateY(' + ((positionsData.mouseFromCenterY / 25) * 1.65) + 'px)'
    })
    setCardSubtitleStyle({
      transform: 'translateX(' + ((positionsData.mouseFromCenterX / 25) * 0.5) + 'px) translateY(' + ((positionsData.mouseFromCenterY / 25) * 1.15) + 'px) translateZ(60px)'
    })
  }

  const touch = (event: any) => {
    const currentMousePos = { x: 0, y: 0 } as MousePos
    const mouseFromCenter = { x: 0, y: 0 } as MousePos
    const wHeight = 600
    const wWidth = 600

    currentMousePos.x = event.pageX
    currentMousePos.y = event.pageY

    const rect = event.target.getBoundingClientRect()
    currentMousePos.x = event.clientX - rect.left
    currentMousePos.y = event.clientY - rect.top

    mouseFromCenter.x = currentMousePos.x - (wWidth / 2)
    mouseFromCenter.y = currentMousePos.y - (wHeight / 2)
    const around1 = -1 * (currentMousePos.y * 100 / wHeight * 0.2 - 10) + 'deg'
    const around2 = 1 * (currentMousePos.x * 100 / wWidth * 0.2 - 10) + 'deg'
    const trans1 = (currentMousePos.x * 100 / wHeight * 0.3) + 'px'
    const trans2 = (currentMousePos.y * 100 / wHeight * 0.3) + 'px'
    const dy = event.pageY - wHeight / 2
    const dx = event.pageX - wWidth / 2
    const theta = Math.atan2(dy, dx)
    const angle = theta * 180 / Math.PI - 90
    const mousePositionX = (currentMousePos.x / wWidth) * 100

    console.log(event)
    console.log(event.target.getBoundingClientRect())

    setActive(true)

    setCardPositions({
      angle,
      wHeight,
      trans1,
      trans2,
      around1,
      around2,
      mousePositionX,
      currentMousePosY: currentMousePos.y,
      mouseFromCenterX: mouseFromCenter.x,
      mouseFromCenterY: mouseFromCenter.y
    })
  }

  const resetTouch = () => {
    setActive(false)
    setCardShineStyle({})
    setCardStyle({ background: backgroundData })
    setCardShadowStyle({})
    setCardTitleStyle({})
    setCardSubtitleStyle({})
  }

  return (
    <>
        <div className={'card-box-3d active-' + active}
          onMouseMove={(ev) => touch(ev)}
          onMouseLeave={resetTouch}
          >
          <div className='wrap'>
            <div className='card-shadow' style={cardShadowStyle}></div>
            <div className='card' style={cardStyle}>
              <div className='content-overlay'></div>
              <div className='card-front'>
                <div className='card-title' style={cardTitleStyle}>{title}</div>
                <div className='card-subtitle' style={cardSubtitleStyle}>{subTitle}</div>
                <div className='card-shine' style={cardShineStyle}></div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card
