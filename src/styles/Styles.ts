import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ghostwhite;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: large;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.p`
  margin-bottom: 4rem;
`;

export const SubSubTitle = styled.p`
  margin-bottom: 10px;
  font-size: large;
`;

export const Input = styled.input`
  border: 1px solid black;
  font-size: large;
  margin-bottom: 24px;
  background: none;
  border-radius: 6px;
  padding: 6px;
  width: 400px;
  :focus {
    outline: none;
  }
`;

export const StyledLink = styled.a`
  border: none;
  font-size: large;
  margin-top: 24px;
  background: palevioletred;
  border-radius: 6px;
  padding: 6px 18px;
  cursor: pointer;
  transition: 0.2s ease-in;
  color: white;
  :active {
    transform: translateY(-8px);
  }
  :hover {
    background: #88445b;
  }
`;

export const StyledButton = styled.button`
  border: none;
  font-size: large;
  margin-top: 24px;
  background: palevioletred;
  border-radius: 6px;
  padding: 6px 18px;
  cursor: pointer;
  width: fit-content;
  transition: 0.2s ease-in;
  color: white;
  :active {
    transform: translateY(-8px);
  }
  :hover {
    background: #88445b;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  /* margin-bottom: 2rem; */
`;

export const DateContainer = styled.div`
  margin-right: 4rem;
`;

export const ModalStyles = {
  content: {
    width: "40%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "6px",
  },
};

export const StyledTextArea = styled.textarea`
  display: inline-block;
  margin: 0;
  padding: 0.2em;
  width: auto;
  min-width: 30em;
  max-width: fit-content;
  height: auto;
  min-height: 10em;
  cursor: text;
  background-color: #eee;
  overflow: auto;
  resize: both;

  :focus {
    outline: none;
  }
`;
