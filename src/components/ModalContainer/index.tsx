import Modal from "react-modal";
import DatePicker from "react-datepicker";
import Select from "react-select";
import InputField from "../Input";
import {
  Subtitle,
  Title,
  StyledDiv,
  DateContainer,
  ModalStyles,
  StyledTextArea,
  StyledButton,
} from "../../styles/Styles";
import "react-datepicker/dist/react-datepicker.css";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { DegreeDetails } from "../../types/index";
interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  degreeDetails: DegreeDetails;
  handleDegreeDetailsChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isCurrently: boolean;
  handleIsCurrently: () => void;
  setDegreeDetails: Dispatch<SetStateAction<DegreeDetails>>;
  handleSortedEducationArray: (item: DegreeDetails) => void;
  selectOptions: {
    label: string;
    value: string;
    options?: any;
  }[];
  setDebounceTemp: Dispatch<SetStateAction<string>>;
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
  handleSortedEducationArray,
  selectOptions,
  setDebounceTemp,
}: ModalContainerProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      // @ts-ignore
      style={ModalStyles}
      contentLabel="Education Modal"
    >
      <Title style={{ marginBottom: "1em" }}>Education Modal</Title>
      <Subtitle>Title</Subtitle>
      <InputField
        value={degreeDetails.degreeName}
        id="degreeName"
        placeholder="Eg. Bachelor's, Master's, etc"
        handlChange={handleDegreeDetailsChange}
        style={{ marginBottom: "2em" }}
      />
      <Subtitle>Field of Study</Subtitle>
      <InputField
        value={degreeDetails.studyField}
        id="studyField"
        placeholder="Mathematics, CS, etc"
        handlChange={handleDegreeDetailsChange}
        style={{ marginBottom: "2em" }}
      />
      <Subtitle>Institution</Subtitle>
      <Select
        styles={{
          container: (provided: any) => ({
            ...provided,
            width: 400,
            marginBottom: "2em",
          }),
        }}
        options={selectOptions}
        // @ts-ignore
        value={degreeDetails.collegeName?.label}
        name="collegeName"
        onInputChange={(val) => {
          setDebounceTemp(val);
        }}
        onChange={(val) => {
          setDegreeDetails({ ...degreeDetails, collegeName: val.label });
        }}
      />
      <StyledDiv>
        <DateContainer>
          <Subtitle>Start</Subtitle>
          <DatePicker
            dateFormat="MM/yyyy"
            selected={degreeDetails.startDate}
            onChange={(e: Date) =>
              setDegreeDetails({ ...degreeDetails, startDate: e })
            }
            name="startDate"
            showMonthYearPicker
          />
        </DateContainer>
        <div>
          <Subtitle>End</Subtitle>
          {!isCurrently ? (
            <DatePicker
              dateFormat="MM/yyyy"
              selected={new Date()}
              onChange={(e: Date) =>
                setDegreeDetails({ ...degreeDetails, endDate: e })
              }
              showMonthYearPicker
              name="endDate"
            />
          ) : (
            <Subtitle>Present</Subtitle>
          )}
        </div>
      </StyledDiv>
      <StyledButton style={{ marginBottom: "2em" }} onClick={handleIsCurrently}>
        Current?
      </StyledButton>
      <Subtitle>Description</Subtitle>
      <StyledTextArea
        value={degreeDetails.achievements}
        name="achievements"
        onChange={handleDegreeDetailsChange}
      />
      <StyledButton
        disabled={
          degreeDetails.degreeName.length === 0 ||
          degreeDetails.collegeName.length === 0 ||
          degreeDetails.studyField.length === 0
        }
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
