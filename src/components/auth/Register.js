import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { register, clearErrors } from "../../actions/authActions";
import { setAlert } from "../../actions/alertAction";
import { useHistory } from "react-router-dom";

const Register = ({
  register,
  clearErrors,
  setAlert,
  error,
  isAuthenticated,
}) => {
  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    if (error === "A User with this email already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please Enter All Fields", "danger");
    } else if (password !== password2) {
      setAlert("Password and Confirm password do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
      setUser({
        name: "",
        email: "",
        password: "",
        password2: "",
      });
      setAlert("User Register", "primary");
    }
  };

  return (
    <div className='form-container'>
      <h1>User Registration</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Email</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            minLength='6'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            value={password2}
            minLength='6'
            onChange={onChange}
          />
        </div>
        <input
          type='submit'
          value='Register'
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

export default connect(mapStateToProps, { register, clearErrors, setAlert })(
  Register
);
