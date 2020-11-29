import React from 'react';
import Project from './Project';
import { Row, Col } from 'react-bootstrap';

const Projects = () => {
  const projectsArray = [
    {
      title: 'SharedBox',
      description: 'SharedBox is a marketplace that allows you to find unconventional storage and warehouse solutions, including space rentals for days or extended periods. Besides that, it gives the opportunity to all the people who have those spaces in their houses, basements, parking lots that are being underused to find an alternative to make money.',
      techStack: 'React, MongoDB, Express and NodeJS',
      image: 'https://i.ibb.co/JHqDR0r/sharedbox.jpg',
      repo: 'https://github.com/Diego-Ardila/SharedBox',
      live: 'https://shared-box.vercel.app/home'
    },
    {
      title: 'CourtReserve',
      description: 'Court Reserve is a mobile application that lets you to find and reserve tennis courts. It gives the opportunity to the tennis players for search in calendar the reserves. Includes a payment integration with Epayco.',
      techStack: 'React, MongoDB, Express and NodeJS',
      image: 'https://i.ibb.co/JHqDR0r/sharedbox.jpg',
      repo: 'https://github.com/ldonaldo/CourtReserve/tree/master',
      live: ''
    }
  ];
  const projectCards = projectsArray.map(element => <Project info={element} />);
  return (
    <div>
      {projectCards}
    </div>
    
  )
}

export default Projects