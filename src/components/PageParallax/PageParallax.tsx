import React, { FC } from 'react'
import { PageParallaxData } from './types'

import './pageParallax.scss'

const PageParallax: FC<PageParallaxData> = ({
  backgroundImg,
  children
}) => {
  return (
    <>
        <div className='section-wrapper' style={{ backgroundImage: backgroundImg }}>
            {children}
        </div>
    </>
  )
}

export default PageParallax
