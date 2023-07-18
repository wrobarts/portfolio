import Card from '../../../UIElements/Card';
import './Testimonial.css';

const Testimonial = props => {
    return (
        <Card permShadow>
            <header className="author-information">
                <img
                    className="author-avatar"
                    alt="Author Avatar"
                    src={props.img_src}
                />
                <div className="author-text-container">
                    <h4 className="author-name text-title">{props.name}</h4>
                    <p className="author-company text-subtitle">{props.company}</p>
                </div>
            </header>
            <p className="testimonial-body-text text-main">{props.body}</p>
        </Card>
    );
};

export default Testimonial;