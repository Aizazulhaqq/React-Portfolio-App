import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <>
      <section className="services" id="services">
        <h1 className="heading">Our <span>Services</span></h1>

        <div className="services-container">
          <div className="services-box">
              <i className='bx bx-code-alt'></i>
              <h3>Web Development</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vel optio beatae voluptate quibusdam corporis repellat doloremque, dignissimos perferendis excepturi a magni commodi officia itaque libero, corrupti minus. Illo ist cumque nostrum impedit commodi facere maiores pariatur at error veniam dignissimos labore illo ratione.</p>
                <Link to={"#"} className='btn'>Read More</Link>
          </div>

          <div className="services-box">
              <i className='bx bx-code-alt'></i>
              <h3>Web Deployment</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vel optio beatae voluptate quibusdam corporis repellat doloremque, dignissimos perferendis excepturi a magni commodi officia itaque libero, corrupti minus. Illo ist cumque nostrum impedit commodi facere maiores pariatur at error veniam dignissimos labore illo ratione.</p>
                <Link to={"#"} className='btn'>Read More</Link>
          </div>

          <div className="services-box">
              <i className='bx bx-code-alt'></i>
              <h3>Web Testing</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vel optio beatae voluptate quibusdam corporis repellat doloremque, dignissimos perferendis excepturi a magni commodi officia itaque libero, corrupti minus. Illo ist cumque nostrum impedit commodi facere maiores pariatur at error veniam dignissimos labore illo ratione.</p>
                <Link to={"#"} className='btn'>Read More</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
