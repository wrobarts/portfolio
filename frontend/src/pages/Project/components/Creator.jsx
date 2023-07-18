import Card from '../../../UIElements/Card';
import './Creator.css';

const Creator = props => {
    return (
        <Card permShadow className="creator-card">
            <img
                className="creator-avatar"
                alt="creator avatar"
                src={require('../../../images/avatarm1.jpeg')}
            />
            <h5 className="creator-name text-title">{props.name}</h5>
            <p className="creator-title">{props.title}</p>
            <p className="creator-description text-main">{props.description}</p>
        </Card>
    );
};

export default Creator;