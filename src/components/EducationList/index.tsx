import {
  EducationListContainer,
  BookmarkIndividualContainer,
  Heading,
  Subtitle,
  Title,
} from "../../styles/Styles";
import dayjs from "dayjs";
import { DegreeDetails } from "../../types";
dayjs().format();

interface EducationListProps {
  degree: DegreeDetails | undefined;
}

const EducationList = ({ degree }: EducationListProps) => {
  return (
    <EducationListContainer>
      {degree ? (
        <BookmarkIndividualContainer>
          <Title style={{ marginBottom: "0.5em" }}>
            {degree?.degreeName} @ {degree?.collegeName}
          </Title>
          <Heading style={{ marginBottom: "1.5em" }}>
            {dayjs(degree.startDate).format("MM/YYYY")} -{" "}
            {degree.endDate !== "Present"
              ? dayjs(degree.endDate).format("MM/YYYY")
              : "Present"}
          </Heading>
          <Subtitle>{degree?.achievements}</Subtitle>
        </BookmarkIndividualContainer>
      ) : (
        <Title>Enter/Click your education!</Title>
      )}
    </EducationListContainer>
  );
};

export default EducationList;
