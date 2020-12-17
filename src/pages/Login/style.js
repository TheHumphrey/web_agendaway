import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #024c95;

  form {
    display: flex;
    flex-direction: column;
    width: 20vw;

    .form-group {
      margin: 6px 16px;
    }

    label {
      color: white;
    }

    .btn {
      margin: 6px 16px;
    }
  }
`;
