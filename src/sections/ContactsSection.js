import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Title from '../components/Title';
import Caption from '../components/Caption';
import emailjs from 'emailjs-com';
import { isEmail } from '../utils/validation';


import data from '../data.json';

const { contactsCaption } = data;

class ContactsSection extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        author: process.env.REACT_APP_AUTHOR,
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        tempId: process.env.REACT_APP_EMAILJS_TEMP_ID,
        userId: process.env.REACT_APP_EMAILJS_USER_ID
    }



    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        const { name, email, subject, message, serviceId, tempId, userId } = this.state;
        if (name && isEmail(email) && subject && message) {
            this.setState({ name: '', email: '', subject: '', message: '' });
            event.target.classList.remove("was-validated");
            emailjs.sendForm(serviceId, tempId, event.target, userId)
                .then((result) => {
                    alert('Thank you for messaging me, I will reply as soon as i read your messages.');
                }, (error) => {
                    alert('Unfortunately your message cannot send right now please try again later.');
                });
        }

    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render() {
        const { name, email, subject, message, author } = this.state;
        return (
            <section id="contacts" className="p-5 w-100 p-0 d-flex min-h-50 flex-row justify-content-center align-items-center">
                <MDBContainer className="p-0 m-0 min-w-100">
                    <Title>Contacts</Title>
                    <Caption>
                        {contactsCaption}
                    </Caption>
                    <MDBContainer className="mt-5 form-contact-wrapper">
                        <form className="needs-validation"
                            onSubmit={this.submitHandler}
                            noValidate>
                            <MDBRow>
                                <MDBCol size="12">
                                    <label
                                        className="text-lighter">
                                        Name
                                    </label>
                                    <input
                                        value={name}
                                        name="name"
                                        onChange={this.changeHandler}
                                        type="text"
                                        className="form-control mb-2"
                                        placeholder="Name"
                                        required
                                        autoComplete="off"
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a valid name
                                    </div>
                                    <div className="valid-feedback">Looks good!</div>
                                </MDBCol>
                                <MDBCol size="12">
                                    <label
                                        className="text-lighter">
                                        Email
                                    </label>
                                    <input
                                        value={email}
                                        name="email"
                                        onChange={this.changeHandler}
                                        type="email"
                                        className="form-control mb-2"
                                        placeholder="Email"
                                        required
                                        autoComplete="off"
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a valid email
                                    </div>
                                    <div className="valid-feedback">Looks good!</div>
                                </MDBCol>
                                <MDBCol size="12">
                                    <label
                                        className="text-lighter">
                                        Subject
                                    </label>
                                    <input
                                        value={subject}
                                        name="subject"
                                        onChange={this.changeHandler}
                                        type="text"
                                        className="form-control mb-2"
                                        placeholder="Subject"
                                        required
                                        autoComplete="off"
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a valid subject
                                    </div>
                                    <div className="valid-feedback">Looks good!</div>
                                </MDBCol>
                                <MDBCol size="12">
                                    <label
                                        className="text-lighter">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        name="message"
                                        onChange={this.changeHandler}
                                        type="text"
                                        className="form-control mb-2"
                                        placeholder="Message"
                                        autoComplete="off"
                                        required>
                                    </textarea>
                                    <div className="invalid-feedback">
                                        Please provide a valid message
                                    </div>
                                    <div className="valid-feedback">Looks good!</div>
                                    <input type="hidden" value={author} name="author" />
                                    <input type="hidden" value={email} name="reply_to" />
                                </MDBCol>
                                <MDBCol size="12">

                                    <MDBBtn color="primary" type="submit" className="btn btn-info btn-block mt-3">
                                        SEND
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </MDBContainer>

                </MDBContainer>
            </section>

        )
    }

}
export default ContactsSection;