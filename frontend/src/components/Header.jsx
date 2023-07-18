import React, {useState} from 'react';
import NavBar from '../UIElements/NavBar';
import SideDrawer from '../UIElements/SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './Header.css';

const Header = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    const scrollToHandler = scrollDestination => {
        props.scrollToHandler(scrollDestination);
    };

    return (
        <>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavBar
                        main={props.main}
                        scrollToHandler={scrollToHandler}
                        active={props.active}
                    />
                </nav>
            </SideDrawer>

            <div className="main-navbar-container">
                <nav className={props.main ? "main-navigation__header-nav" : "project-navigation__header-nav"}>
                    <img
                        className="logo"
                        alt="logo"
                        src={require('../images/logo.png')}
                    />
                    <NavBar
                        main={props.main}
                        scrollToHandler={scrollToHandler}
                        active={props.active}
                    />
                </nav>

                {props.main && <div className="main-header-content-small">
                    <img
                        className="logo"
                        alt="logo"
                        src={require('../images/logo.png')}
                    />
                    <button className="main-navigation__menu-button" onClick={openDrawerHandler}>
                        <span />
                        <span />
                        <span />
                    </button>
                </div>}
            </div>
        </>
    );
};

export default Header;