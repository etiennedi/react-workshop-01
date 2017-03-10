import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export const ContactForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
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
    <Field
      name="newsletter"
      component="input"
      type="checkbox"
    />
    <button type="submit" />
  </form>
);

ContactForm.propTypes = propTypes;

export default reduxForm(
  {
    form: 'contact',
    onSubmit: console.log,
  },
)(ContactForm);
