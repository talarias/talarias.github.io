import React, { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SectionData } from './types'

import './section.scss'

const Section: FC<SectionData> = ({
  titleAction = null,
  borderFillPercent = 100,
  title,
  simpleContent,
  children
}) => {
  return (
    <>
        <Container>
          <>
              {
                title
                  ? <Row>
                  <Col>
                    <div className='section-item-wrapper'>
                        <div className='section-item-title'>
                            <div>
                              <h2>{title}</h2>
                              <div className='title-con'>
                                <div className='section-item-title-br' style={{ width: `${borderFillPercent}%` }}></div>
                              </div>
                            </div>
                            <div className='title-action'>
                              {titleAction}
                            </div>
                        </div>
                    </div>
                  </Col>
                </Row>
                  : ''
              }
            {
              simpleContent
                ? <Row>
                    <Col>
                      {children}
                    </Col>
                  </Row>
                : <> { children } </>
            }
          </>
        </Container>
    </>
  )
}

export default Section
