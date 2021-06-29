import React, { useState } from "react";
import { Modal, ModalContent } from "./ModalStyle.js";
import axios from "axios";
import Registration from "./Registration";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginAndSaveUser = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName: userName, password: password }),
    };

    axios(`/login`, requestOptions)
      .then((response) => response.json())
      .then((data) => data && console.log(data));
  };

  const redirectToRegister = () => {
    setRedirect(true);
  };

  return (
    <Modal>
      <ModalContent>
        <form onSubmit={loginAndSaveUser}>
          <h2>Moving Motivators</h2>
          <h3>Sign in</h3>
          <div>
            <label>User name</label>
            <br />
            <input
              type="name"
              placeholder="Enter user name"
              onChange={handleUserNameChange}
            />
          </div>

          <div>
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter password"
              onChange={handlePasswordChange}
            />
          </div>

          <button
            style={{ marginTop: "30px", marginBottom: "30px" }}
            type="submit"
          >
            Login
          </button>
          <span>Don't have an account yet? </span>
          <span className="registerText" onClick={() => redirectToRegister()}>
            Register here
          </span>
          {redirect && <Registration />}
        </form>
      </ModalContent>
    </Modal>
  );
};

export default Login;
