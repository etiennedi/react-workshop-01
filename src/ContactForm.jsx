import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export const ContactForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <h1>Contact Form</h1>
    <Field
      name="name"
      component="input"
    />
    <Field
      name="email"
      component="input"
    />
    <Field
      name="subject"
      component="input"
    />
    <Field
      name="message"
      component="textarea"
    />
    <div className="action">
      <div className="checkbox-wrapper">
        <Field
          name="newsletter"
          id="newsletter"
          component="input"
          type="checkbox"
          className="checkbox"
        />

        <label htmlFor="newsletter">
          Subscribe to newsletter
        </label>
        </div>
      <button type="submit">Submit</button>
    </div>
  </form>
);

ContactForm.propTypes = propTypes;

export default reduxForm(
  {
    form: 'contact',
    onSubmit: console.log,
  },
)(ContactForm);
