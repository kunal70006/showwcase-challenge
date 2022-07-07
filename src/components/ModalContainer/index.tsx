import { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import InputField from "../Input";
import {
  SubSubTitle,
  Title,
  StyledDiv,
  DateContainer,
  ModalStyles,
  StyledTextArea,
  StyledButton,
} from "../../styles/Styles";

interface ModalContainerProps {
  isOpen: boolean;
  onRequestClose: () => void;
  degreeName: string;
  setDegreeName: any;
  setInstitutionName: any;
  institutionName: string;
  changeStartDate: any;
  changeEndDate: any;
  startDate: Date;
  endDate: Date;
  changeIsPresentlyPersuing: () => void;
  isPresentlyPersuing: boolean;
  achievements: string;
  handleAchievements: any;
}

Modal.setAppElement("#__next");

const ModalContainer = ({
  isOpen,
  onRequestClose,
  degreeName,
  setDegreeName,
  setInstitutionName,
  institutionName,
  changeStartDate,
  startDate,
  endDate,
  changeEndDate,
  changeIsPresentlyPersuing,
  isPresentlyPersuing,
  achievements,
  handleAchievements,
}: ModalContainerProps) => {
  const [text, setText] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={ModalStyles}
      contentLabel="Education Modal"
    >
      <Title>New Education Modal</Title>
      <SubSubTitle>Title</SubSubTitle>
      <InputField
        name={degreeName}
        setUsername={setDegreeName}
        placeholder="Eg. Bachelor's in Computer Science"
      />
      <SubSubTitle>Institution</SubSubTitle>
      <InputField
        name={institutionName}
        setUsername={setInstitutionName}
        placeholder="Eg. MIT, Oxford"
      />
      <StyledDiv>
        <DateContainer>
          <SubSubTitle>Start</SubSubTitle>
          <DatePicker
            dateFormat="MM/yyyy"
            selected={startDate}
            onChange={changeStartDate}
            showMonthYearPicker
          />
        </DateContainer>
        <div>
          <SubSubTitle>End</SubSubTitle>
          {!isPresentlyPersuing ? (
            <DatePicker
              dateFormat="MM/yyyy"
              selected={endDate}
              onChange={changeEndDate}
              showMonthYearPicker
            />
          ) : (
            <SubSubTitle>Present</SubSubTitle>
          )}
        </div>
      </StyledDiv>
      <StyledButton
        style={{ marginBottom: "2rem" }}
        onClick={changeIsPresentlyPersuing}
      >
        Current?
      </StyledButton>
      <SubSubTitle>Description</SubSubTitle>
      <StyledTextArea
        value={achievements}
        onChange={(e) => handleAchievements(e.target.value)}
      />
      <StyledButton style={{ alignSelf: "flex-end" }}>Save</StyledButton>
    </Modal>
  );
};

export default ModalContainer;
