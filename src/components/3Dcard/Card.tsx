import React, { FC, useState } from 'react'
import { CardData, CardStyleData, MousePos, PositionsData } from './types'

import './card.scss'

const Card: FC<CardData> = ({
  title,
  subTitle = undefined,
  backgroundData = 'url(/homeBg.jpeg)',
  windowFx = false,
  overlay = false
}) => {
  const [active, setActive] = useState(false)
  const [cardStyle, setCardStyle] = useState({ background: backgroundData as String + ' 50% 50%' } as any)
  const [cardShadowStyle, setCardShadowStyle] = useState({})
  const [cardTitleStyle, setCardTitleStyle] = useState({})
  const [cardSubtitleStyle, setCardSubtitleStyle] = useState({})

  const setCardPositions = (positionsData: PositionsData) => {
    const cardStyle: CardStyleData = {
      WebkitTransform: 'translate3d(' + positionsData.trans1 + ', ' + positionsData.trans2 + ', 0) scale(1.2) rotatex(' + positionsData.around1 + ') rotatey(' + positionsData.around2 + ')',
      background: backgroundData as String + ' 50% 50%'
    }

    if (windowFx) {
      cardStyle.backgroundPosition = (positionsData.mousePositionX + '%' + ' ' + (positionsData.currentMousePosY / positionsData.wHeight) * 50 + '%')
    }
    setCardStyle(cardStyle)

    setCardShadowStyle({
      transform: 'scale(1.0,1.0) translateX(' + ((positionsData.mouseFromCenterX * -0.02) + 12) + 'px) translateY(' + ((positionsData.mouseFromCenterY * -0.02) + 12) + 'px) scale(1.0) rotateY(' + (positionsData.mouseFromCenterX / 25) * 0.8 + 'deg) rotateX(' + ((positionsData.mouseFromCenterY / -25)) + 'deg)'
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
    const cardStyle: CardStyleData = {
      background: '' + backgroundData as String + ' 50% 50%'
    }
    setActive(false)
    setCardStyle(cardStyle)
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
              </div>
            </div>
          </div>
        </div>
        {
          overlay ? <div id="overlay" className={'active-' + active} style={{ background: backgroundData }}></div> : undefined
        }
    </>
  )
}

export default Card
