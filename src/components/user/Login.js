import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  H1,
  H2,
  SubmitButton,
  Input,
  Label,
  RegLink,
  RegDiv,
} from "./ModalStyle.js";
import axios from "axios";
import { useHistory } from "react-router-dom";
// npm install --save-dev @iconify/react @iconify-icons/clarity
import { Icon } from "@iconify/react";
import groupSolid from "@iconify-icons/clarity/group-solid";

const Login = () => {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginAndSaveUser = (e) => {
    e.preventDefault();

    const person = {
      username: userName,
      password: password
    }

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    axios.post('/login', person, config)
      .then((res) => {
        setError(false);
        history.push("/question-groups");
      })
      .catch((err) => {
          if (err.response.status === 403) {
              setError(true);
              setErrorMessage(err.response.data);
          }
      });
  };

  return (
    <Modal>
      <H1>Moving Motivators</H1>
      <ModalContent>
        <form onSubmit={loginAndSaveUser}>
          <H2>
            <Icon icon={groupSolid} width="25px" height="25px" />
            SIGN IN
          </H2>
          <div>
            <Label>USERNAME</Label>
            <Input
              type="name"
              placeholder="Enter user name"
              onChange={handleUserNameChange}
            />
          </div>
          <div>
            <Label>PASSWORD</Label>
            <Input
              type="password"
              placeholder="Enter password"
              onChange={handlePasswordChange}
            />
          </div>
          {error && <div style={{color: "red"}}>{errorMessage}</div>}
          <SubmitButton type="submit">LOGIN</SubmitButton>
          <RegDiv>
            <RegLink to="/registration">REGISTRATION</RegLink>
          </RegDiv>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default Login;
