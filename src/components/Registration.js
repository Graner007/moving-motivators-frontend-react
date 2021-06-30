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
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onRegister = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("username", userName);
    data.append("password", password);

    axios.post("/registration", data)
      .then((res) => {
        if (res.status === 200) {
          setError(false);
          setErrorMessage("");
      }
      })
      .catch((err) => {
        if (err.response) {
          setErrorMessage(err.response.data);
          setError(true);
        }
      });
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
          { error && <div style={{ color: 'red', padding: '10px' }}>{ errorMessage }</div> }
          <SubmitButton style={{ marginTop: "15px" }} type="submit">
            Register
          </SubmitButton>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default Registration;
