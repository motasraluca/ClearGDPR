import React from 'react';
import logo from '../../assets/logo.png';
import Login from '../../components/Login/Login';
import Session from '../../helpers/Session';
import config from '../../config';
import '../../theme/Login.css';

const session = new Session();

const login = (username, password) => {
  fetch(`${config.API_URL}/management/users/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: username,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      session.set(res);
    })
    .catch(err => {
      return err;
    });
};

const LoginContainer = () => (
  <section className="login-section">
    <div className="login-card">
      <img className="logo" src={logo} alt="Clear logo" />
      <Login auth={login} />
    </div>
  </section>
);

export default LoginContainer;