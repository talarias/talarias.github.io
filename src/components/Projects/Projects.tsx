import React, { FC } from 'react'
import { ProjectsData } from './types'

import './projects.scss'
import Card from './../3Dcard/Card'
import { Col, Row } from 'react-bootstrap'

const Projects: FC<ProjectsData> = ({
  projectItems
}) => {
  return (
    <>
      <Row>
        <Col xs={12} md={6} xl={4}>
          <Card
            title={'testTitle'}
            subTitle={'subTitle'}
            overlay={true}
          />
        </Col>
        <Col xs={12} md={6} xl={4}>
          <Card
            title={'testTitle'}
            subTitle={'subTitle'}
            overlay={true}
            windowFx={true}
          />
        </Col>
        <Col xs={12} md={6} xl={4}>
          <Card
            title={'testTitle'}
            subTitle={'subTitle'}
          />
        </Col>
      </Row>
    </>
  )
}

export default Projects
