import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .matches(
            /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          )
          .required('Required'),
        number: Yup.string()
          .matches(
            /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          )
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmit(values);
        setSubmitting(false);
        resetForm({});
      }}
    >
      <Form className={s.form}>
        <label htmlFor="name" className={s.label}>
          {' '}
          Name
        </label>
        <Field name="name" type="text" className={s.input} />
        <ErrorMessage
          name="name"
          render={msg => <div className={s.error}>{msg}</div>}
        />

        <label htmlFor="number" className={s.label}>
          Number
        </label>
        <Field name="number" type="tel" className={s.input} />
        <ErrorMessage
          name="number"
          render={msg => <div className={s.error}>{msg}</div>}
        />

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
