import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
    const scrollToHandler = scrollDestination => {
        props.scrollToHandler(scrollDestination);
    };

    return (
        <ul className={props.main ? 'navbar' : 'navbar-project'}>
            {props.main ? (
                <>
                    <li
                        className={`${props.active === "home" && "navbar-item-active"}`}
                        onClick={() => scrollToHandler("home")}
                    >
                        <p>Home</p>
                    </li>
                    <li
                        className={`${props.active === "about" && "navbar-item-active"}`}
                        onClick={() => scrollToHandler("about")}
                    >
                        <p>About</p>
                    </li>
                    <li
                        className={`${props.active === "portfolio" && "navbar-item-active"}`}
                        onClick={() => scrollToHandler("portfolio")}
                    >
                        <p>Portfolio</p>
                    </li>
                    <li
                        className={`${props.active === "testimonials" && "navbar-item-active"}`}
                        onClick={() => scrollToHandler("testimonials")}
                    >
                        <p>Testimonials</p>
                    </li>
                    <li
                        className={`${props.active === "pricing" && "navbar-item-active"}`}
                        onClick={() => scrollToHandler("pricing")}
                    >
                        <p>Pricing</p>
                    </li>
                    <li
                        className={`${props.active === "contact" && "navbar-item-active"}`}
                        onClick={() => scrollToHandler("contact")}
                    >
                        <p>Contact</p>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </>
            )}
        </ul>
    );
};

export default NavBar;