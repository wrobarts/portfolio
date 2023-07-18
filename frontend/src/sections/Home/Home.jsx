import HeroImage from './components/HeroImage';
import Button from '../../FormElements/Button';
import './Home.css';

const Main = props => {
    const scrollToHandler = () => {
        props.scrollToHandler('contact');
    };

    return (
        <HeroImage innerRef={props.innerRef}>
            <div className="home-title-section">
                <h1 className="home-title">Inspiring Web Development: Innovative Digital Solutions</h1>
            </div>
            <div className="home-button-container">
                <Button big className="home-button" onClick={scrollToHandler} >Contact Us</Button>
            </div>
        </HeroImage>
    );
};

export default Main;