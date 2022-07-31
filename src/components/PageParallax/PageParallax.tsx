import React, { FC } from 'react'
import { PageParallaxData } from './types'

import './pageParallax.scss'

const PageParallax: FC<PageParallaxData> = ({
  title = 'Title',
  subtitle = null,
  backgroundImg,
  children
}) => {
  return (
    <>
        <div className='section-wrapper' style={{ backgroundImage: backgroundImg }}>
            <div className='section-head'>
                <div className='section-title'>
                <h1>{title}</h1>
                {subtitle ? <h2>{subtitle}</h2> : ''}
                </div>
            </div>
            {children}
        </div>
    </>
  )
}

export default PageParallax
