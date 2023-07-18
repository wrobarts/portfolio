import './HeroImage.css';

const HeroImage = props => {
    return (
        <div id="home" ref={props.innerRef} className="hero-image">
            {props.children}
        </div>
    );
};

export default HeroImage;