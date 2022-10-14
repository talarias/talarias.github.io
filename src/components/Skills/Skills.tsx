import React, { FC, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { SortNumericDown, SortNumericUp } from 'react-bootstrap-icons'
import { SkillsData } from './types'
// import { Keyframe, Easing } from 'react-native-reanimated'

import './skills.scss'

const Skills: FC<SkillsData> = ({
  showFilter = false,
  items = []
}) => {
  const [sortdeSkillItems, setSortdeSkillItems] = useState(items)

  // const keyframe = new Keyframe({
  //   0: {
  //     transform: [{ rotate: '0deg' }]
  //   },
  //   45: {
  //     transform: [{ rotate: '100deg' }],
  //   },
  //   100: {
  //     transform: [{ rotate: '45deg' }]
  //   }
  // })

  const sortDescending = () => {
    setSortdeSkillItems([...sortdeSkillItems].sort((a, b) => a.percent < b.percent ? 1 : -1))
  }
  const sortExpand = () => {
    setSortdeSkillItems([...sortdeSkillItems].sort((a, b) => a.percent > b.percent ? 1 : -1))
  }

  const filters = () => {
    if (showFilter) {
      return (
        <Row className='sort-btns'>
          <Button variant="outline-primary" onClick={sortDescending}><SortNumericDown /></Button>
          <Button variant="outline-primary" onClick={sortExpand} ><SortNumericUp /></Button>
        </Row>
      )
    }
  }

  const skillItems = sortdeSkillItems.map((skill:any, index:number) => {
    return (
      <Col key={index}
      className='skill-item-box'
      xs={12}
      sm={6}
      md={4}
      xl={3}
      >
        <div className='skill-item'>
          <h5>{skill.title}</h5>
          <div className='skill-item-percent-wapper'>
            <div className='skill-item-percent' style={{ width: skill.percent + '%', animationName: skill.title }}></div>
          </div>
        </div>
      </Col>
    )
  })

  return (
    <>
      <div className='skills-container'>
        <>
          {filters}
          <Row>
            {skillItems}
          </Row>
        </>
      </div>
    </>
  )
}

export default Skills
