import {
  Modal,
  ModalContent,
  H1,
  H2,
  SubmitButton,
  Input,
  Label,
} from "./ModalStyle.js";
import { useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import groupSolid from "@iconify-icons/clarity/group-solid";

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
    axios(`/registration`, requestOptions).then((response) =>
      console.log(response)
    );
  };

  return (
    <Modal>
      <H1>Moving Motivators</H1>
      <ModalContent>
        <form onSubmit={onRegister}>
          <H2>
            <Icon icon={groupSolid} width="25px" height="25px" />
            REGISTRATION
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
          <SubmitButton style={{ marginTop: "15px" }} type="submit">
            Register
          </SubmitButton>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default Registration;
