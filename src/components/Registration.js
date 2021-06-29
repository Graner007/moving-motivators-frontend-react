import { Modal, ModalContent } from "./ModalStyle.js";
import { useState } from "react";
import axios from "axios";
// import { API_BASE_URL } from "../constants";

const Registration = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onRegister = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName: userName, password: password }),
    };
    axios(`/register`, requestOptions).then((response) =>
      console.log(response)
    );
  };

  return (
    <Modal>
      <ModalContent>
        <form onSubmit={onRegister}>
          <h3>Register</h3>
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

          <button style={{ marginTop: "15px" }} type="submit">
            Register
          </button>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default Registration;
