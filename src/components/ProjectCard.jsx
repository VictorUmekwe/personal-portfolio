import React from 'react'
import { Button, Card } from 'react-bootstrap'


const ProjectCard = (props) => {
  return (
    <div  className=' col-md-6 '>
       <Card className=' h-100 shadow'>
        <Card.Img  variant='top' src={props.projectImage}/>
          <Card.Body className=' p-5'>
            <Card.Title className=' fw-bold text-uppercase mb-4 fs-3'>
                {props.projectName}
            </Card.Title >
            <Card.Text className='fs-4'>
                {props.projectDesc}
            </Card.Text>
            <Button className=' shadow text-capitalize ' variant='outline-primary'>View Projects</Button>
             
          </Card.Body>
       </Card>
    </div>
  )
}

export default ProjectCard