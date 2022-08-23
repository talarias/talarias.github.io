import React, { FC } from 'react'
import { ProjectsData } from './types'

import './projects.scss'
import Card from './../3Dcard/Card'

const Projects: FC<ProjectsData> = ({
  projectItems
}) => {
  return (
    <>
      <Card title={'testTitle'} />
    </>
  )
}

export default Projects
