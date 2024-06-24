"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "./yup";

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const handleSubmit = () => {};

  return (
    <div className="login-container">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form className="login-form">
          <div>
            <label htmlFor="username">UserName</label>
            <Field
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              className="form-control"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
