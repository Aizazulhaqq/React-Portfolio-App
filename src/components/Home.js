import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import profile from '../profile.png'

const Home = () => {
  return (
    <>
        <section className="home" id="home">
          <div className="home-content">
            <h3>Assalam O Alaikum , It's Me</h3>
            <h1>Nouman</h1>
            <h3>And I'm a <span>Backend Developer</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellendus laudantium facere repudiandae laboriosam at dolorem molestias vitae consectetur tenetur minus numquam obcaecati beatae sint, 
              blanditiis nam facilis nemo soluta reprehenderit exercitationem ullam.</p>
              <div className="social-media">
                <Link to="#"><i className='bx bxl-linkedin'></i></Link>
                <Link to="#"><i className='bx bxl-instagram-alt'></i></Link>
                <Link to="#"><i className='bx bxl-github'></i></Link>
                <Link to="#"><i className='bx bxl-twitter'></i></Link>

              </div>
              <Link to={"#"} className='btn'>Resume</Link>
              <Link to={"#"} className='btn' style={{marginLeft:"8px"}}>Services</Link>
          </div>

          <div className="home-img">
            <img src={profile} alt="Loading..." />
          </div>
        </section>
    </>
  )
}

export default Home
