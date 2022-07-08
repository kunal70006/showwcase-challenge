import { useRouter } from "next/router";
import React, { useState } from "react";
import Bookmarks from "../components/Bookmarks";
import EducationList from "../components/EducationList";
import ModalContainer from "../components/ModalContainer";
import {
  Container,
  EducationContainer,
  StyledButton,
  SubSubTitle,
} from "../styles/Styles";

interface DegreeDetails {
  degreeName: string;
  collegeName: string;
  startDate: Date;
  endDate: Date | string;
  achievements: string;
}

const Education = () => {
  const router = useRouter();
  const name = router.asPath.slice(1);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [degreeDetails, setDegreeDetails] = useState<DegreeDetails>({
    degreeName: "",
    collegeName: "",
    startDate: new Date(),
    endDate: new Date(),
    achievements: "",
  });
  const [isCurrently, setIsCurrently] = useState(false);
  const [educationListArray, setEducationListArray] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState<DegreeDetails>();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleDegreeDetailsChange = (e: any) => {
    setDegreeDetails({ ...degreeDetails, [e.target.name]: e.target.value });
  };
  const handleIsCurrently = () => {
    if (!isCurrently) {
      setDegreeDetails({ ...degreeDetails, endDate: "Present" });
    }
    setIsCurrently((p) => !p);
  };

  const handleSelected = (degree: DegreeDetails) => {
    setSelectedDegree(degree);
  };

  const handleSortedEducationArray = (item: DegreeDetails) => {
    if (educationListArray.length < 1) {
      setEducationListArray((educationListArray: DegreeDetails) => [
        ...educationListArray,
        item,
      ]);
    } else {
      let temp = educationListArray.concat(item);
      temp.sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate));
      setEducationListArray(temp);
    }
    closeModal();
  };

  return (
    <Container>
      <SubSubTitle>Welcome to {name}&apos;s education page.</SubSubTitle>
      <StyledButton onClick={openModal}>Add new education</StyledButton>
      <ModalContainer
        isOpen={isOpen}
        onClose={closeModal}
        degreeDetails={degreeDetails}
        handleDegreeDetailsChange={handleDegreeDetailsChange}
        isCurrently={isCurrently}
        handleIsCurrently={handleIsCurrently}
        setDegreeDetails={setDegreeDetails}
        educationListArray={educationListArray}
        setEducationListArray={setEducationListArray}
        handleSortedEducationArray={handleSortedEducationArray}
      />
      <EducationContainer>
        <Bookmarks
          educationListArray={educationListArray}
          handleSelected={handleSelected}
        />
        <EducationList degree={selectedDegree} />
      </EducationContainer>
    </Container>
  );
};

export default Education;
