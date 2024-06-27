"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { loginSchema } from "./yup";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/style.css";
import { useRouter } from "next/navigation";
import { loginApi } from "@/redux/loginSlice";
import { RootState, AppDispatch } from "@/redux/store";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";

const initialValues: val = {
  username: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (values: val, { resetForm }: FormikHelpers<val>) => {
    dispatch(
      loginApi({ username: values.username, password: values.password })
    );
    resetForm();
  };

  const data = useSelector(
    (state: RootState) => state.log.credentials?.data?.[0]
  );

  if (data && data.token) {
    localStorage.setItem("token", data.token);
    router.push("/routes");
  }

  const handleIcon = () => {
    setShowPassword(!showPassword);
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

          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <Field
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              className="form-control"
            />
            <IconButton onClick={handleIcon} className="styledButton">
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>

            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="styledButton">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
