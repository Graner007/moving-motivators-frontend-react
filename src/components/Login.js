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
      .then((data) => history.push("/question-groups"));
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
