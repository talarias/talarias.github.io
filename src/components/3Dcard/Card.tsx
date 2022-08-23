import React, { FC, useState } from 'react'
import { CardData, MousePos } from './types'

import './card.scss'

const Card: FC<CardData> = ({
  title
}) => {
  const [cardShineStyle, setCardShineStyle] = useState({})
  const [cardStyle, setCardStyle] = useState({})
  const [cardShadowStyle, setCardShadowStyle] = useState({})
  const [cardTitleStyle, setCardTitleStyle] = useState({})
  const [cardSubtitleStyle, setCardSubtitleStyle] = useState({})

  const touch = (event: any) => {
    const currentMousePos = { x: 0, y: 0 } as MousePos
    const mouseFromCenter = { x: 0, y: 0 } as MousePos
    const wHeight = 600
    const wWidth = 600

    currentMousePos.x = event.pageX
    currentMousePos.y = event.pageY
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

    setCardShineStyle({
      background: 'linear-gradient(' + angle + 'deg, rgba(255,255,255, ' + (currentMousePos.y / wHeight) * 0.7 + ') 0% ,rgba(255,255,255, 0) 80%)'
    })
    setCardStyle({
      WebkitTransform: 'translate3d(' + trans1 + ', ' + trans2 + ', 0) scale(1) rotatex(' + around1 + ') rotatey(' + around2 + ')',
      backgroundPosition: mousePositionX + '%' + ' ' + (currentMousePos.y / wHeight) * 50 + '%'
    })
    setCardShadowStyle({
      transform: 'scale(.9,.9) translateX(' + ((mouseFromCenter.x * -0.02) + 12) + 'px) translateY(' + ((mouseFromCenter.y * -0.02) + 12) + 'px) scale(1.0) rotateY(' + (mouseFromCenter.x / 25) * 0.5 + 'deg) rotateX(' + ((mouseFromCenter.y / -25)) + 'deg)'
    })
    setCardTitleStyle({
      transform: 'translateX(' + ((mouseFromCenter.x / 25) * 0.7) + 'px) translateY(' + ((mouseFromCenter.y / 25) * 1.65) + 'px)'
    })
    setCardSubtitleStyle({
      transform: 'translateX(' + ((mouseFromCenter.x / 25) * 0.5) + 'px) translateY(' + ((mouseFromCenter.y / 25) * 1.15) + 'px) translateZ(60px)'
    })
  }

  return (
    <>
        <div className='card-box-3d' onMouseMove={(ev) => touch(ev)} onMouseEnter={(ev) => console.log('leave card')}>
          <div className='wrap'>
            <div className='card-shadow' style={cardShadowStyle}></div>
            <div className='card' style={cardStyle}>
              <div className='card-front'>
                <div className='card-title' style={cardTitleStyle}>3D perspective title</div>
                <div className='card-subtitle' style={cardSubtitleStyle}>3D perspective subtitle</div>
                <div className='card-shine' style={cardShineStyle}></div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card
