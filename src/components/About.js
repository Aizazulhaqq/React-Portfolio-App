import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import profile from '../profile.png'

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about-img">
          <img src={profile} alt="Loading..."/>
        </div>

        <div className="about-content">
          <h2 className='heading'>About <span>Me</span></h2>
          <h3>Backend Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qt dolor praesentium harum quaerat fugiat accusantium assumenda sapiente magnam soluta inventore ullam veniam unde esse ipsa, neque nostrum totam, obcaecati corporis laborum dicta accusamus saepe
            . Sed qui amet beatae blanditiis quis cupiditate dolorum veniam illo, consequuntur tempore quia sit pariatur odio odit ut enim nostrum minus eos. Optio suscipit dicta perspiciatis, iste modi maxime similique fugiat est esse, qu
            remque debitis dolorem minima. Veniam perspiciatis et ipsum? Hic animi vel, et sunt
             natus est illum labore atque earum, quae praesentium fugit eligendi voluptas rem!</p>
            <Link to="#" className="btn">Read More</Link>
        </div>
      </section>
    </>
  )
}

export default About
