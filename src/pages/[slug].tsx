import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import useDebounce from "../hooks/useDebounce";
import Bookmarks from "../components/Bookmarks";
import EducationList from "../components/EducationList";
import ModalContainer from "../components/ModalContainer";
import {
  Container,
  EducationContainer,
  StyledButton,
  SubSubTitle,
} from "../styles/Styles";

import { DegreeDetails } from "../types/index";
interface Universities {
  name: string;
}

interface SelectOptions {
  label: string;
  value: string;
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
  const [isCurrently, setIsCurrently] = useState<boolean>(false);
  const [educationListArray, setEducationListArray] = useState<DegreeDetails[]>(
    []
  );
  const [selectedDegree, setSelectedDegree] = useState<DegreeDetails>();
  const [selectOptions, setSelectOptions] = useState<SelectOptions[]>([]);

  const [debounceTemp, setDebounceTemp] = useState<string>("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setDegreeDetails({
      degreeName: "",
      collegeName: "",
      startDate: new Date(),
      endDate: new Date(),
      achievements: "",
    });
    setIsOpen(false);
  };
  const handleDegreeDetailsChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      setEducationListArray((educationListArray: DegreeDetails[]) => [
        ...educationListArray,
        item,
      ]);
    } else {
      let temp = educationListArray.concat(item);
      temp.sort(
        (a: DegreeDetails, b: DegreeDetails) =>
          // @ts-ignore
          Date.parse(b.startDate) - Date.parse(a.startDate)
      );
      setEducationListArray(temp);
    }
    closeModal();
  };

  const debouncedVal = useDebounce(debounceTemp);
  const getResults = (): Promise<Universities[]> =>
    fetch(`http://universities.hipolabs.com/search?name=${debouncedVal}`).then(
      (resp) => resp.json()
    );

  const { data } = useQuery("universities", getResults, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: debouncedVal.length > 0,
  });

  useEffect(() => {
    if (data && data.length > 0) {
      let temp = data.map((item) => {
        return {
          value: item.name,
          label: item.name,
        };
      });
      setSelectOptions(temp);
    }
  }, [data]);

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
        selectOptions={selectOptions}
        setDebounceTemp={setDebounceTemp}
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
