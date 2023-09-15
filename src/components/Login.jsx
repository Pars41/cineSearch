import React, { useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn,shouldRender, setShouldRender } = useContext(AuthContext);

  const navigate = useNavigate();

  // Formik and yup

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters long")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);
   
    setIsLoggedIn(true);
    

    navigate("/movies");
  };
useEffect(() => {
  // setShouldRender(false)
  localStorage.clear()
}, [])

  return (
    <>
    <NavBar logoutRender={false}/>
    <div className="login-page shadow-lg p-3 pt-4 mx-auto  rounded d-flex align-center ">
      <div className="container pt-4  bg-white">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <h6 className="text-secondary">
              Please log in to search for movies!
            </h6>
            <div className="my-5">
              <Field
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                autoFocus
                placeholder="Email"
                className="form-control"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-5">
              <Field
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                placeholder="Password"
                className="form-control"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark mx-auto d-block w-100"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
    </>
    
  );
};

export default Login;
