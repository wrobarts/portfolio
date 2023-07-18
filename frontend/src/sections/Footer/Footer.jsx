import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = props => {
    const scrollToHandler = scrollDestination => {
        props.scrollToHandler(scrollDestination);
    };
    
    return (
        <article className="footer-container">
            <section className="footer-left">
                <div className="logo-container">
                    <img
                        alt="logo"
                        src={require("../../images/logo.png")}
                        className="footer-logo"
                    />
                </div>
                <h3 className="footer-title">Lorem ipsum dolor sit amet</h3>
                <p className="footer-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint qui reprehenderit dignissimos dicta corrupti! Quod 
                    saepe nesciunt rem nulla hic quaerat nihil possimus! Eum
                    iusto eos corrupti eaque, tempore suscipit.
                </p>
            </section>
            <section className="footer-right">
                <div className="footer-right-container">
                    <div className="footer-right-container-inner">
                        <div className="footer-item-container">
                            {props.main ? 
                                <p className="footer-item-title" onClick={() => scrollToHandler("home")}>Home</p>
                            :
                                <div className="footer-item-link-container">
                                    <Link className="footer-item-link" to="/">Home</Link>
                                </div>
                            }
                            <p className="footer-item-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="footer-item-container">
                            {props.main ?
                                <p className="footer-item-title" onClick={() => scrollToHandler("contact")}>Contact Us</p>
                            :
                                <div className="footer-item-link-container">
                                    <Link className="footer-item-link" to="/">Contact Us</Link>
                                </div>
                            }
                            <p className="footer-item-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="footer-item-container">
                            <p className="footer-item-title">Privacy Policy</p>
                            <p className="footer-item-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default Footer;