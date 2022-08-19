import React, { FC } from 'react'
import { ProjectsData } from './types'

import './projects.scss'
import { Button, Card } from 'react-bootstrap'

const Projects: FC<ProjectsData> = ({
  projectItems
}) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>
            Card Title
            <Button variant="primary">Go somewhere</Button>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          asdasdasd
        </Card.Footer>
      </Card>
    </>
  )
}

export default Projects
