import React from 'react'
import { Link } from 'react-router-dom'


const Portfolio = () => {
    return (
        <>
            <section className="portfolio" id="portfoliio">
                <h2 className="heading">Latest <span>Project</span></h2>

                <div className="portfolio-container">
                    <div className="portfolio-box">
                        <img src="/src/assets/images/images-removebg-preview.png" alt="Loading..." />
                        <div className="portfolio-layer">
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut omnis itaque, placeat possimus expedita eum optio ad dicta repellat x cum? Harum.</p>
                            <Link><i className='bx bx-link-external'></i></Link>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src="/src/assets/images/images-removebg-preview.png" alt="Loading..." />
                        <div className="portfolio-layer">
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut omnis itaque, placeat possimus expedita eum optio ad dicta repellat x cum? Harum.</p>
                            <Link><i className='bx bx-link-external'></i></Link>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src="/src/assets/images/images-removebg-preview.png" alt="Loading..." />
                        <div className="portfolio-layer">
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut omnis itaque, placeat possimus expedita eum optio ad dicta repellat x cum? Harum.</p>
                            <Link><i className='bx bx-link-external'></i></Link>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src="/src/assets/images/images-removebg-preview.png" alt="Loading..." />
                        <div className="portfolio-layer">
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut omnis itaque, placeat possimus expedita eum optio ad dicta repellat x cum? Harum.</p>
                            <Link ><i className='bx bx-link-external'></i></Link>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src="/src/assets/images/images-removebg-preview.png" alt="Loading..." />
                        <div className="portfolio-layer">
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut omnis itaque, placeat possimus expedita eum optio ad dicta repellat x cum? Harum.</p>
                            <Link ><i className='bx bx-link-external'></i></Link>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src="/src/assets/images/images-removebg-preview.png" alt="Loading..." />
                        <div className="portfolio-layer">
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut omnis itaque, placeat possimus expedita eum optio ad dicta repellat x cum? Harum.</p>
                            <Link><i className='bx bx-link-external'></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
