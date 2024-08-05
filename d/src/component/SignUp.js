import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginForm.css"; // Use the same CSS file as the LoginForm component

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
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post("http://localhost:1000/auth/register", {
        name: values.username,
        email: values.email,
        password: values.password,
      });
      console.log("Server response", response.data);
      if (response.status === 201) {
        setOtpSent(true);
        // Redirect to OTP verification page
        navigate("/verify-otp", { state: { email: values.email } });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setFieldError("email", error.response.data.message);
      } else {
        console.error("Error signing up", error);
      }
    } finally {
      setSubmitting(false);
    }
  };

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
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="login-form">
            {" "}
            {/* Use the same form class as the LoginForm component */}
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
