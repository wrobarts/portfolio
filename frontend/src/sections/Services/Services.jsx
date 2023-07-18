import {Link} from 'react-router-dom';
import Heading from '../../UIElements/Heading';
import Card from '../../UIElements/Card';
import services from './util/services';
import './Services.css';

const Services = props => {
    return (
        <article id="about" ref={props.innerRef}>
            <Heading subtitle="About Me" title="Do You Know Me?" />
            <p className="heading-description-text text-main">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
                dicta? Exercitationem nam perspiciatis odit, totam vero placeat
                doloremque culpa accusantium saepe corrupti! Ipsum quaerat animi
                sequi quis minima iste consectetur!
            </p>
            <section className="services-container">
                {services.map((service, idx) =>
                    <Card key={idx} shadow>
                        <header className="service-header">
                            <div className="icon-container"></div>
                            <h4 className="service-title text-subtitle">{service.title}</h4>
                        </header>
                        <section className="service-content">
                            <p className="service-description text-main">{service.description}</p>
                            <Link to="/" >Learn more</Link>
                        </section>
                    </Card>
                )}
            </section>
        </article>
    );
};

export default Services;