import React, { FC, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { SortNumericDown, SortNumericUp } from 'react-bootstrap-icons'

import './skills.scss'

const Skills: FC<any> = ({
  skillsData = []
}) => {
  const [sortdeSkillItems, setSortdeSkillItems] = useState(skillsData)

  const sortDescending = () => {
    setSortdeSkillItems([...sortdeSkillItems].sort((a, b) => a.percent < b.percent ? 1 : -1))
  }
  const sortExpand = () => {
    setSortdeSkillItems([...sortdeSkillItems].sort((a, b) => a.percent > b.percent ? 1 : -1))
  }

  return (
    <>
      <div className='skills-container'>
        <Row className='sort-btns'>
          <Button variant="outline-primary" onClick={sortDescending}><SortNumericDown /></Button>
          <Button variant="outline-primary" onClick={sortExpand} ><SortNumericUp /></Button>
        </Row>
        <Row>
          {sortdeSkillItems.map((skill:any, index:number) => {
            return (
              <Col key={index} className='col-sm-4'>
                <div className='skill-item'>
                  <h5>{skill.title}</h5>
                  <div className='skill-item-percent-wapper'>
                    <div className='skill-item-percent' style={{ width: skill.percent + '%' }}></div>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    </>
  )
}

export default Skills
