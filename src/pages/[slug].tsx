import { useRouter } from "next/router";
import React, { useState } from "react";
import ModalContainer from "../components/ModalContainer";
import { Container, StyledButton, SubSubTitle } from "../styles/Styles";

const Education = () => {
  const router = useRouter();
  const name = router.asPath.slice(1);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [degreeName, setDegreeName] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [isPresentlyPersuing, setIsPresentlyPersuing] =
    useState<boolean>(false);
  const [achievements, setAchievements] = useState<string>("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const changeDegreeName = (text: string) => setDegreeName(text);
  const changeInstitutionName = (text: string) => setInstitutionName(text);
  const changeStartDate = (date: Date) => setStartDate(date);
  const changeEndDate = (date: Date) => setEndDate(date);
  const changeIsPresentlyPersuing = () => setIsPresentlyPersuing((p) => !p);
  const changeAchievements = (text: string) => setAchievements(text);

  return (
    <Container>
      <SubSubTitle>Welcome to {name}&apos;s education page.</SubSubTitle>
      <StyledButton onClick={openModal}>Add new education</StyledButton>
      <ModalContainer
        isOpen={isOpen}
        onRequestClose={closeModal}
        degreeName={degreeName}
        setDegreeName={changeDegreeName}
        institutionName={institutionName}
        setInstitutionName={changeInstitutionName}
        changeStartDate={changeStartDate}
        startDate={startDate}
        endDate={endDate}
        changeEndDate={changeEndDate}
        changeIsPresentlyPersuing={changeIsPresentlyPersuing}
        isPresentlyPersuing={isPresentlyPersuing}
        achievements={achievements}
        handleAchievements={changeAchievements}
      />
    </Container>
  );
};

export default Education;
