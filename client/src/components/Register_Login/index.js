import React from 'react';
import MyButton from '../utils/button';
import Login from './login';

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              expedita, autem ducimus officiis laudantium consequatur ipsum eius
              dolorem repudiandae quibusdam. Sapiente quas esse delectus
              similique ex eligendi quo rem blanditiis?
            </p>
            <MyButton
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{
                margin: '10px 0 0 0'
              }}
            />
          </div>

          <div className="right">
            <h2>Registered Customers</h2>
            <p>If ypu have an account please log in.</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
