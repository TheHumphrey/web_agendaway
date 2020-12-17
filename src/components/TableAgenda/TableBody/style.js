import styled from "styled-components";

export const BodyStyle = styled.tr`
  text-align: center;
  color: white;
  font-weight: 600;
  td {
  }

  #weekDay {
    padding: 0.7rem 2rem;
    border-radius: 3.125rem !important;
  }

  .Segunda,
  .Terça,
  .Quarta,
  .Quinta,
  .Sexta {
    color: #00964e;
    background-color: #ccf6e4;
  }

  .Sabado,
  .Domingo {
    color: #c46632;
    background-color: #fde6d8;
  }
`;
