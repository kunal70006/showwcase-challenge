import Modal from "react-modal";
import DatePicker from "react-datepicker";
import Select from "react-select";
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
import "react-datepicker/dist/react-datepicker.css";

interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  degreeDetails: {
    degreeName: string;
    collegeName: string;
    startDate: Date;
    endDate: Date | string;
    achievements: string;
  };
  handleDegreeDetailsChange: (e: any) => void;
  isCurrently: boolean;
  handleIsCurrently: () => void;
  setDegreeDetails: any;
  educationListArray: any;
  setEducationListArray: any;
  handleSortedEducationArray: any;
  selectOptions: {
    label: string;
    value: string;
  }[];
}

Modal.setAppElement("#__next");

const ModalContainer = ({
  isOpen,
  onClose,
  degreeDetails,
  handleDegreeDetailsChange,
  isCurrently,
  handleIsCurrently,
  setDegreeDetails,
  educationListArray,
  handleSortedEducationArray,
  setEducationListArray,
  selectOptions,
}: ModalContainerProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={ModalStyles}
      contentLabel="Education Modal"
    >
      <Title>Education Modal</Title>
      <SubSubTitle>Title</SubSubTitle>
      <InputField
        value={degreeDetails.degreeName}
        id="degreeName"
        placeholder="Eg. Bachelor's in Computer Science"
        handlChange={handleDegreeDetailsChange}
      />
      <SubSubTitle>Institution</SubSubTitle>
      {/* {<InputField
        value={degreeDetails.collegeName}
        id="collegeName"
        handlChange={handleDegreeDetailsChange}
        placeholder="Eg. MIT, Oxford"
      />} */}
      <Select
        options={selectOptions}
        value={degreeDetails.collegeName}
        name="collegeName"
        onInputChange={(val) =>
          setDegreeDetails({ ...degreeDetails, collegeName: val })
        }
        onChange={(val) =>
          setDegreeDetails({ ...degreeDetails, collegeName: val.value })
        }

        // onInputChange={handleDegreeDetailsChange}
      />
      <StyledDiv>
        <DateContainer>
          <SubSubTitle>Start</SubSubTitle>
          <DatePicker
            dateFormat="MM/yyyy"
            selected={degreeDetails.startDate}
            onChange={(e) =>
              setDegreeDetails({ ...degreeDetails, startDate: e })
            }
            name="startDate"
            showMonthYearPicker
          />
        </DateContainer>
        <div>
          <SubSubTitle>End</SubSubTitle>
          {!isCurrently ? (
            <DatePicker
              dateFormat="MM/yyyy"
              selected={new Date()}
              onChange={(e) =>
                setDegreeDetails({ ...degreeDetails, endDate: e })
              }
              showMonthYearPicker
              name="endDate"
            />
          ) : (
            <SubSubTitle>Present</SubSubTitle>
          )}
        </div>
      </StyledDiv>
      <StyledButton
        style={{ marginBottom: "2rem" }}
        onClick={handleIsCurrently}
      >
        Current?
      </StyledButton>
      <SubSubTitle>Description</SubSubTitle>
      <StyledTextArea
        value={degreeDetails.achievements}
        name="achievements"
        onChange={handleDegreeDetailsChange}
      />
      <StyledButton
        onClick={() => {
          handleSortedEducationArray(degreeDetails);
        }}
        style={{ alignSelf: "flex-end" }}
      >
        Save
      </StyledButton>
    </Modal>
  );
};

export default ModalContainer;
