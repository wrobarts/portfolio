import Card from '../../../UIElements/Card';
import Button from '../../../FormElements/Button';
import './PricingItem.css';

const PricingItem = props => {
    return (
        <Card key={props.idx} className="pricing-card">
            <div className="pricing-tag"></div>
            <h4 className="pricing-title text-title">{props.title}</h4>
            <p className="text-main">{props.info}</p>
            <ul className="pricing-info-list text-main">
                {props.infoList.map((infoListItem, idx) =>
                    <li key={idx}>{infoListItem}</li>
                )}
            </ul>
            <div className="pricing-button-container">
                <Button className={`pricing-button ${props.inverse && 'pricing-button-inverse'}`}>
                    Request Quote
                </Button>
            </div>
        </Card>
    );
};

export default PricingItem;