import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ConfirmModal from './ConfirmModal';

function ContactForm() {
  const [nameInputValidation, setNameInputValidation] = useState(false);
  const [emailInputValidation, setEmailInputValidation] = useState(false);
  const [messageInputValidation, setMessageInputValidation] = useState(false);

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  function setFormField(e) {
    switch (e.target.type) {
      case 'text':
        console.log(`TEXT CHANGE REGISTERED`);
        setNameValue(e.target.value);
        if (nameInputValidation) {
          validateName(e);
        }
        break;
      case 'email':
        console.log(`EMAIL CHANGE REGISTERED`);
        setEmailValue(e.target.value);
        if (emailInputValidation) {
          validateEmail(e);
        }
        break;
      case 'textarea':
        console.log(`TEXTAREA CHANGE REGISTERED`);
        setMessageValue(e.target.value);
        if (messageInputValidation) {
          validateMessage(e);
        }
        break;
    }
  }

  function validateName(e) {
    const name = e.target.value;
    console.log(name);
    console.log(name.length);
    if (name.length < 3) {
      setNameInputValidation(true);
      return;
    }
    setNameInputValidation(false);
  }

  function validateEmail(e) {
    const emailRegex = /^([a-zA-Z0-9_\.-]+)@([\dA-Za-z\.-]+)\.([a-z\.]{2,6})$/;
    const email = e.target.value;
    console.log(email);
    if (!emailRegex.test(email)) {
      setEmailInputValidation(true);
      return;
    }
    setEmailInputValidation(false);
  }

  function validateMessage(e) {
    const message = e.target.value;
    console.log(message);
    if (message.length < 3) {
      setMessageInputValidation(true);
      return;
    }
    setMessageInputValidation(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (
      !nameInputValidation &&
      !emailInputValidation &&
      !messageInputValidation
    ) {
      const messageData = {
        name: nameValue,
        email: emailValue,
        message: messageValue,
      };
      return true;
    }
  }

  function clearForm() {
    setNameValue('');
    setEmailValue('');
    setMessageValue('');
  }

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <h2>Contact Me!</h2>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            required
            onBlur={validateName}
            onChange={setFormField}
            value={nameValue}
            isInvalid={nameInputValidation}
          />
          <Form.Control.Feedback type="invalid">
            Must be at least 3 characters.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            required
            onBlur={validateEmail}
            onChange={setFormField}
            value={emailValue}
            isInvalid={emailInputValidation}
          />
          <Form.Control.Feedback type="invalid">
            Must be a valid Email Address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            required
            onBlur={validateMessage}
            onChange={setFormField}
            value={messageValue}
            isInvalid={messageInputValidation}
          />
          <Form.Control.Feedback type="invalid">
            Must be at least 3 characters
          </Form.Control.Feedback>
        </Form.Group>
        {/* <button className="btn btn-primary col-sm-12 col-md-4 mx-auto">
          Submit
        </button> */}
        <ConfirmModal
          fn={handleFormSubmit}
          clearForm={clearForm}
          name={nameValue}
          email={emailValue}
          message={messageValue}
        />
      </Form>
    </>
  );
}

export default ContactForm;
