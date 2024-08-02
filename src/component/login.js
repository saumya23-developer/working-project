import React from "react";
import { Formik, Form, Field, ErrorMessage, replace } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./LoginForm.css"; 
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form data", values);
    navigate("/home");
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <div className="form-container">
          <h2>LOGIN</h2>
          <Form className="login-form">
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
              Login
            </button>
          </Form>
          <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
