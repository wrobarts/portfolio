import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Heading from '../../UIElements/Heading';
import Button from '../../FormElements/Button';
import projects from './util/projects';
import {FaArrowRight} from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = props => {
    const [screenSize, setScreenSize] = useState();

    const changeLayoutHandler = () => {
        if (window.innerWidth < 812) {
            setScreenSize("small");
        } else {
            setScreenSize("large");
        }
    };

    useEffect(() => {
        changeLayoutHandler();
    }, []);

    window.addEventListener("resize", changeLayoutHandler, true);

    return (
        <article id="portfolio" ref={props.innerRef} className="portfolio-section">
            <div className="portfolio-background-accent1"></div>
            <div className="portfolio-background-accent2"></div>
            <header className="portfolio-heading">
                <Heading
                    subtitle="Portfolio"
                    title="All Creative Works, Selected Projects"
                    inverse
                />
                <p className="heading-description-text text-secondary text-portfolio">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                    assumenda tempora veritatis molestias sunt, quidem error doloremque
                    velit?
                </p>
            </header>
            <section className="portfolio-content">
                {projects.map((project, idx) =>
                    <div key={idx} className="project-container">
                        {!project.left && screenSize === "large" && <div className="project-content-image-container">
                            <Link to={`/project/${project.id}`} >
                                <img
                                    className="project-image"
                                    alt={project.img_alt}
                                    src={project.img_src}
                                />
                            </Link>
                        </div>}
                        {screenSize === "small" && <div className="project-content-image-container">
                            <Link to={`/project/${project.id}`} >
                                <img
                                    className="project-image"
                                    alt={project.img_alt}
                                    src={project.img_src}
                                />
                            </Link>
                        </div>}
                        <div className="project-content-wrapper">
                            <div className="project-content-text">
                                <h4 className="project-title text-heading-inverse">{project.title}</h4>
                                <p className="project-description text-secondary">{project.description}</p>
                                <Button to={`/project/${project.id}`} className="project-button">
                                    Learn More <FaArrowRight className="project-button-icon" />
                                </Button>
                            </div>
                        </div>
                        {project.left && screenSize === "large" && <div className="project-content-image-container">
                            <Link to={`/project/${project.id}`} >
                                <img
                                    className="project-image"
                                    alt={project.img_alt}
                                    src={project.img_src}
                                />
                            </Link>
                        </div>}
                    </div>
                )}
            </section>
            <footer className="portfolio-footer">
                <Button className="see-more-button">See More</Button>
            </footer>
        </article>
    );
};

export default Portfolio;