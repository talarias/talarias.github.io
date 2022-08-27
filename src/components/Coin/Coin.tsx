import React, { FC, useEffect, useState } from 'react'
import { HeaderBrandData } from './types'

import './coin.scss'

const Coin: FC<HeaderBrandData> = ({
  frontImg,
  backImg = undefined,
  interval = 15000
}) => {
  const [active, setActive] = useState(false)

  const toggle = () => {
    setActive(!active)
  }

  if (interval) {
    useEffect(() => {
      const timer = setInterval(() => {
        toggle()
      }, interval)
      return () => clearInterval(timer)
    }, [active])
  }

  return (
    <>
      <div className={'coin-wrapper-box flipped-' + active} onClick={toggle}>
        <div className='coin-wrapper-prog-box'>
          <div className='coin-wrapper-prog-left'></div>
          <div className='coin-wrapper-prog-right'></div>
        </div>
        <div className='btn-box'>
          <div className='coin-wrapper-btn'></div>
        </div>
        <div className={'coin-wrapper'}>
          <div className='coin'>
            <img src={frontImg} alt={'coin-wrapper'} className='img-front'></img>
            <img src={backImg ?? frontImg} alt={'coin-wrapper'} className='img-back'></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coin
