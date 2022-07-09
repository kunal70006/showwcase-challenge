import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  /* background-color: ghostwhite; */
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: large;
  background-image: url("/homeBg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 24px;
  /* margin-bottom: 2rem; */
`;

export const Heading = styled.h1`
  font-size: 18px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
`;

export const Input = styled.input`
  border: 1px solid gray;
  font-size: 16px;
  /* margin-bottom: 24px; */
  background-color: white;
  border-radius: 6px;
  padding: 6px;
  width: 400px;
  :focus {
    outline: none;
  }
`;

export const StyledLink = styled.a`
  border: none;
  font-size: 16px;
  /* margin-top: 24px; */
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
    height: "500px",
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "6px",
    backgroundColor: "rgb(250,250,250)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
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
  background-color: white;
  overflow: auto;
  resize: both;
  border-radius: 6px;

  :focus {
    outline: none;
  }
`;

export const EducationContainer = styled.div`
  display: flex;
  width: 80%;
  min-height: 50vh;
  margin-top: 4em;
`;

export const BookmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 2em 4em;
  width: 30%;
  margin-right: 8em;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 6px;
`;

export const BookmarkIndividualContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  cursor: pointer;
`;

export const EducationListContainer = styled(BookmarkContainer)`
  width: 70%;
`;
