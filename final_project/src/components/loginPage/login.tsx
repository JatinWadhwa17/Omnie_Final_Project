"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "./yup";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/style.css";
import { useRouter } from "next/navigation";
import { loginApi } from "@/redux/loginSlice";

interface val {
  username: string;
  password: string;
}
const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (values: val) => {
    console.log(values);
    dispatch(loginApi(values));
    const data = useSelector((state) => state);
    console.log(data);
  };
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
