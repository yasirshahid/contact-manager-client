import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAlert } from "../../actions/alertAction";
import { login, clearErrors } from "../../actions/authActions";

const Login = ({ isAuthenticated, error, login, setAlert, clearErrors }) => {
  let history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    if (error === "Email does not exists") {
      setAlert(error, "danger");
      clearErrors();
    } else if (error === "Incorrect password") {
      setAlert(error, "danger");
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill the login form", "danger");
    } else {
      login({ email, password });
    }
  };
  return (
    <div className='form-container'>
      <h1>User Login</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, login, clearErrors })(
  Login
);
