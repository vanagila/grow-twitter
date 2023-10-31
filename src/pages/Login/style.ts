import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgb(242, 242, 242);
`;

export const Card = styled.section`
  display: flex;
  flex-direction: row;
  width: 60%;
  min-height: 300px;
  border-radius: 8px;
  align-items: stretch;
  background-color: white;
  font-family: "Roboto", sans-serif;
`;

export const WelcomeCard = styled.div`
  padding: 12px 24px;
  width: 50%;
  background-color: rgb(29, 155, 240);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: white;
    font-size: 2rem;
  }

  span {
    margin: 12px 0px;
    font-size: 12px;
    color: rgb(238, 238, 238);
  }

  p {
    color: rgb(238, 238, 238);
  }
`;

export const FormContainer = styled.div`
  padding: 8px;
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 12px;
    text-align: center;
  }
`;
