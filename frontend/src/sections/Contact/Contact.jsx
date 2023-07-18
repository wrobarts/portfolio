import Button from '../../FormElements/Button';
import Input from '../../FormElements/Input';
import {useForm} from '../../hooks/form_hook';
import {VALIDATOR_REQUIRE, VALIDATOR_EMAIL} from '../../util/validators';
import './Contact.css';

const Contact = props => {
    const [formState, inputHandler] = useForm(
        {
            firstname: {
                value: "",
                isValid: false
            },
            lastname: {
                value: "",
                isValid: false
            },
            email: {
                value: "",
                isValid: false
            },
            message: {
                value: "",
                isValid: false
            }
        },
        false
    );

    const submitFormHandler = event => {
        event.preventDefault();
    };

    return (
        <article id="contact" ref={props.innerRef} className="contact-section">
            <section className="contact-left">
                <h3 className="contact-title text-title">Get in Touch</h3>
                <p className="contact-text text-main">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div className="contact-method-container">
                    <div className="icon-container"></div>
                    <div className="contact-method-text-container">
                        <p className="contact-method-title text-title">Phone Number</p>
                        <h4 className="contact-method text-title">321-555-6789</h4>
                    </div>
                </div>

                <div className="contact-method-container">
                    <div className="icon-container"></div>
                    <div className="contact-method-text-container">
                        <p className="contact-method-title text-title">Map Street</p>
                        <h4 className="contact-method text-title">John Bucarest St. 199</h4>
                    </div>
                </div>

                <div className="contact-method-container">
                    <div className="icon-container"></div>
                    <div className="contact-method-text-container">
                        <p className="contact-method-title text-white">.</p>
                        <h4 className="contact-method text-title">hello@studio.co</h4>
                    </div>
                </div>
            </section>
            <section className="contact-right">
                <h5 className="contact-form-title">Let's Work Together</h5>
                <form onSubmit={submitFormHandler}>
                    <Input
                        id="firstname"
                        element="input"
                        type="text"
                        label="First Name"
                        placeholder="Enter your first name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a name."
                        className="contact-input"
                        onInput={inputHandler}
                    />
                    <Input
                        id="lastname"
                        element="input"
                        type="text"
                        label="Last Name"
                        placeholder="Enter your last name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a name."
                        className="contact-input"
                        onInput={inputHandler}
                    />
                    <Input
                        id="email"
                        element="input"
                        type="email"
                        label="Your Email"
                        placeholder="Enter your email"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Please enter an email."
                        className="contact-input"
                        onInput={inputHandler}
                    />
                    <Input
                        id="message"
                        element="textarea"
                        type="text"
                        label="Message"
                        placeholder="Enter your message"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a message."
                        onInput={inputHandler}
                    />
                    <div className="contact-button-container">
                        <Button type="submit" className="contact-button">Send</Button>
                    </div>
                </form>
            </section>
        </article>
    );
};

export default Contact;