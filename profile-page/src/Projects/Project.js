import React from 'react';
import { Card } from 'react-bootstrap';

const Project = (props) => {
  const {description, image, live, repo, techStack, title} = props.info
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {title}
        </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Project