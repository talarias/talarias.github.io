import React, { FC } from 'react'
import { Container } from 'react-bootstrap'

import './sliderItem.scss'

const SliderItem: FC<any> = ({
  title = 'Title',
  titleAction = null,
  children
}) => {
  return (
    <>
        <Container>
            <div className='sliter-item-wrapper'>
                <div className='sliter-item-title'>
                    <div>
                      <h2>{title}</h2>
                      <div className='sliter-item-title-br'></div>
                    </div>
                    <div className='title-action'>
                      {titleAction}
                    </div>
                </div>
                <div className='sliter-content-wrapper'>
                    {children}
                </div>
            </div>
        </Container>
    </>
  )
}

export default SliderItem
