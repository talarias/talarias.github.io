import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import { SectionData } from './types'

import './section.scss'

const Section: FC<SectionData> = ({
  title = 'Title',
  titleAction = null,
  children
}) => {
  return (
    <>
        <Container>
            <div className='section-item-wrapper'>
                <div className='section-item-title'>
                    <div>
                      <h2>{title}</h2>
                      <div className='section-item-title-br'></div>
                    </div>
                    <div className='title-action'>
                      {titleAction}
                    </div>
                </div>
                <div className='section-content-wrapper'>
                    {children}
                </div>
            </div>
        </Container>
    </>
  )
}

export default Section
