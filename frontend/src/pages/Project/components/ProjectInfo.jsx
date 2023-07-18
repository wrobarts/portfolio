import Card from '../../../UIElements/Card';
import './ProjectInfo.css';

const ProjectInfo = props => {
    return (
        <Card permShadow className="project-info-card">
            <h3 className="project-info-title text-title">Project Info</h3>
            <hr className="main-underline"></hr>
            <ul className="project-info">
                <li>
                    <h5 className="text-title">Author</h5>
                    <p className="text-main">{props.author}</p>
                    <hr></hr>
                </li>
                <li>
                    <h5 className="text-title">Project Category</h5>
                    <p className="text-main">{props.category}</p>
                    <hr></hr>
                </li>
                <li>
                    <h5 className="text-title">Project Date</h5>
                    <p className="text-main">{props.date}</p>
                    <hr></hr>
                </li>
            </ul>
        </Card>
    );
};

export default ProjectInfo;