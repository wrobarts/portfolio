import Heading from '../../UIElements/Heading';
import PricingItem from './components/PricingItem';
import pricing from './util/pricing';
import './Pricing.css';

const Pricing = props => {
    return (
        <article id="pricing" ref={props.innerRef} className="pricing-section">
            <header>
                <Heading
                    subtitle="Pricing"
                    title="Pricing Per Build"
                    inverse
                />
            </header>
            <section className="pricing-container">
                {pricing.map((pricingItem, idx) =>
                    <PricingItem
                        key={idx}
                        title={pricingItem.title}
                        info={pricingItem.info}
                        infoList={pricingItem.infoList}
                        inverse={pricingItem.inverse}
                    />
                )}
            </section>
        </article>
    );
};

export default Pricing;