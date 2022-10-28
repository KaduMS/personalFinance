import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const InputField = styled.div`
  flex: 1;
  margin: 10px;
`;

export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid #a77ef7;
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid #a77ef7;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 80%;
  height: 30px;
  margin:auto;
  display: block;
  padding: 0 5px;
  border: 1px solid #7F3DFF;
  border-radius: 5px;
  background-color: #7F3DFF;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transition: all 0.6s;
    border: 1px solid #3a04a3;
    background-color: #3a04a3;
  
  }
`;
