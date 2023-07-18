import {useParams} from 'react-router-dom';
import Header from '../../components/Header';
import ProjectInfo from './components/ProjectInfo';
import Contact from './components/Contact';
import Creator from './components/Creator';
import Footer from '../../sections/Footer/Footer';
import projects from './util/projects';
import './Project.css';

const Project = () => {
    const projectId = useParams().pid;

    const project = projects.find(p => p.id === projectId);

    return (
        <>
            <Header main={false} />
            <div className="project-hero-image">
                <h1 className="project-page-title">Web Development: Building Digital Experiences</h1>
            </div>
            <div className="project-page-container">
                <aside className="project-page-sidebar">
                    <ProjectInfo
                        author={project.author}
                        category={project.category}
                        date={project.date}
                    />
                    <Contact />
                    <Creator
                        name={project.author}
                        title={project.title}
                        description={project.description}
                    />
                </aside>
                <aside className="project-page-small">
                    <ProjectInfo
                        author={project.author}
                        category={project.category}
                        date={project.date}
                    />
                </aside>
                <article className="project-page-content">
                    <section className="project-page-section">
                        <h4 className="project-page-section-title text-title">Web Development:</h4>
                        {project.intro.map((introItem, idx) =>
                            <p key={idx} className="project-page-section-text text-main">{introItem}</p>
                        )}
                    </section>
                    <img
                        className="project-page-image"
                        alt="project image"
                        src={project.image}
                    />
                    <section className="project-page-section">
                        <h4 className="project-page-section-title text-title">The Challenge:</h4>
                        {project.challenge.map((challengeItem, idx) =>
                            <p key={idx} className="project-page-section-text text-main">{challengeItem}</p>
                        )}
                    </section>
                    <div className="project-page-column-section">
                        <section className="project-page-section">
                            <h4 className="project-page-section-title text-title">The Strategy:</h4>
                            {project.strategy.map((strategyItem, idx) =>
                                <p key={idx} className="project-page-section-text text-main">{strategyItem}</p>
                            )}
                        </section>
                        <section className="project-page-section">
                            <h4 className="project-page-section-title text-title">The Solution:</h4>
                            {project.solution.map((solutionItem, idx) =>
                                <p key={idx} className="project-page-section-text text-main">{solutionItem}</p>
                            )}
                        </section>
                    </div>
                    <section className="project-page-section">
                        <h4 className="project-page-section-title text-title">The Result:</h4>
                        {project.result.map((resultItem, idx) =>
                            <p key={idx} className="project-page-section-text text-main">{resultItem}</p>
                        )}
                    </section>
                </article>
                <aside className="project-page-small">
                    <Creator
                        name={project.author}
                        title={project.title}
                        description={project.description}
                    />
                    <Contact />
                </aside>
            </div>
            <Footer />
        </>
    );
};

export default Project;