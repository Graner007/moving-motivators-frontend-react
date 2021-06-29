import styled from "styled-components";
import { Link } from "react-router-dom";

export const Modal = styled.div`
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
`;

export const SubmitButton = styled.button`
  margin-bottom: 20px;
  margin-left: 10%;
  margin-right: 10%;
  color: white;
  background-color: #a122a1;
  width: 80%;
  height: 40px;
`;

export const Input = styled.input`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 78%;
  padding-bottom: 20px;
`;

export const RegDiv = styled.div`
  display: flex;
  justify-content: right;
`;

export const RegLink = styled(Link)`
  margin-right: 10%;
  margin-left: auto;
  margin-bottom: 30px;
  color: black;
`;

export const H2 = styled.h2`
  text-align: center;
  color: black;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 25%;
  padding-top: 20px;
`;

export const H1 = styled.h1`
  text-align: center;
  color: #a122a1;
  margin-left: 10%;
  margin-right: 10%;
`;

export const Label = styled.label`
  margin-left: 10%;
  color: grey;
`;

export const ModalContent = styled.div`
  background-color: white;
  margin: 5% auto; /* 15% from the top and centered */
  width: 25%;
`;
