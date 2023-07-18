import Card from '../../../UIElements/Card';
import Input from '../../../FormElements/Input';
import Button from '../../../FormElements/Button';
import {useForm} from '../../../hooks/form_hook';
import {VALIDATOR_REQUIRE} from '../../../util/validators';
import './Contact.css';

const Contact = () => {
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

    const formSubmitHandler = event => {
        event.preventDefault();
    };

    return (
        <Card permShadow className="contact-sidebar-card">
            <h3 className="project-info-title text-title">Get in Touch</h3>
            <hr className="main-underline"></hr>
            <form onSubmit={formSubmitHandler}>
                <Input
                    id="firstname"
                    element="input"
                    type="text"
                    label="First Name"
                    placeholder="Enter your first name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a name."
                    className="contact-sidebar-input"
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
                    className="contact-sidebar-input"
                    onInput={inputHandler}
                />
                <Input
                    id="email"
                    element="input"
                    type="email"
                    label="Your Email"
                    placeholder="Enter your email"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter an email."
                    className="contact-sidebar-input"
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
                    className="contact-sidebar-input"
                    onInput={inputHandler}
                />
                <div className="contact-sidebar-button-container">
                    <Button type="submit" className="contact-sidebar-button">Send</Button>
                </div>
            </form>
        </Card>
    );
};

export default Contact;