
import React, {useState} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {login }from "../../services/auth.service";



const Login: React.FC = () => { 
    let navigate: NavigateFunction = useNavigate()
    
    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const initialValues: {
        email: string,
        password: string,
    } = {
        email: "",
        password: "",
    };
    
    const validationSchema=Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    });

    const handleLogin = (formValue: {
        email: string,
        password: string,
    }) => {
        const { email, password } = formValue;
        
        setMessage("");
        setLoading(true);

        login(email, password).then(
            () => {
                navigate("/dashboard");
                window.location.reload();
            },
            (error) => {
                const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                setMessage(resMessage);
                setLoading(false);
            }
        );
    };


    return (
            <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" className="form-control" />
              <ErrorMessage
                name="username"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="form-control" />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
    );

}


export default Login;