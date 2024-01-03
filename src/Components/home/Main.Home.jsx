import React from 'react'
import Intro from './components/Intro'
import Detail from './components/Detail'
import Blog from './components/Blog'
import Start from './components/Start'
import Strategies from './components/Strategies'
import Footer from"./components/Footer"
import Navbar from './components/Navbar'
import News from './components/News'
function MainHome() {
    return (
        <div >
            <Navbar />
            <Intro />
            <Detail />
            <Blog />
            <Start />
            <Strategies />
            <News />
            <Footer />
        </div>
    )
}

export default MainHome