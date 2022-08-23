import React, { FC, useEffect, useState } from 'react'
import { HeaderBrandData } from './types'

import './brand.scss'

const HeaderBrand: FC<HeaderBrandData> = ({
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
      <div className={'header-brand-box flipped-' + active} onClick={toggle}>
      <div className='header-brand-prog-box'>
        <div className='header-brand-prog-left'></div>
        <div className='header-brand-prog-right'></div>
      </div>
        <div className='btn-box'>
          <div className='header-brand-btn'></div>
        </div>
        <div className={'header-brand'}>
          <div className='card'>
            <img src={frontImg} alt={'header-brand'} className='img-front'></img>
            <img src={backImg ?? frontImg} alt={'header-brand'} className='img-back'></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderBrand
