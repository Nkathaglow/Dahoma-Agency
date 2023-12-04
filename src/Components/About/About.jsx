import React from 'react'
import Navbar from '../home/components/Navbar'
import Numbers from './Acomponent/Numbers'
import Team from './Acomponent/Team'
import Latestblog from './Acomponent/Latestblog'
import Start from './Acomponent/Start'


function About() {
  return (
    <div>
        <Navbar />
        <Numbers />
        <Team />
        <Start />
        <Latestblog />

    </div>
  )
}

export default About