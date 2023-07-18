import Header from '../../components/Header';
import Home from '../../sections/Home/Home';
import Services from '../../sections/Services/Services';
import Portfolio from '../../sections/Portfolio/Portfolio';
import Testimonials from '../../sections/Testimonials/Testimonials';
import Pricing from '../../sections/Pricing/Pricing';
import Contact from '../../sections/Contact/Contact';
import Footer from '../../sections/Footer/Footer';
import {useScroll} from '../../hooks/scroll_hook';
import './Main.css';

const Main = () => {
    const {visibleElements, elementsRef, scrollToHandler} = useScroll();

    return (
        <>
            <Header active={visibleElements[0]} scrollToHandler={scrollToHandler} main={true} />
            <div className="main-wrapper">
                <Home innerRef={home => elementsRef.current[0] = home} scrollToHandler={scrollToHandler} />
                <Services innerRef={about => elementsRef.current[1] = about} />
                <Portfolio innerRef={portfolio => elementsRef.current[2] = portfolio} />
                <Testimonials innerRef={testimonials => elementsRef.current[3] = testimonials} />
                <Pricing innerRef={pricing => elementsRef.current[4] = pricing} />
                <Contact innerRef={contact => elementsRef.current[5] = contact} />
                <Footer scrollToHandler={scrollToHandler} main={true} />
            </div>
        </>
    );
};

export default Main;