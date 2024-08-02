import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./FormStyles.css"; // Import the CSS file

// Validation schema
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

const SignupForm = () => {
  return (
    <div className="form-container">
      <h2>SIGN UP</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            alert("Sign Up Successful!");
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" className="form-field" />
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-field" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="form-field" />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      <div className="signup-link">
        Already have an account? <Link to="/">Login</Link>
      </div>
    </div>
  );
};

export default SignupForm;
