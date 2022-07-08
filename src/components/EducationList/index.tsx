import { EducationListContainer } from "../../styles/Styles";
import dayjs from "dayjs";
dayjs().format();

interface EducationListProps {
  degree: any;
}

const EducationList = ({ degree }: EducationListProps) => {
  return (
    <EducationListContainer>
      {degree ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1em",
          }}
        >
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            {degree?.degreeName} @ {degree?.collegeName}
          </p>
          <p>
            {dayjs(degree.startDate).format("MM/YYYY")} -{" "}
            {degree.endDate !== "Present"
              ? dayjs(degree.endDate).format("MM/YYYY")
              : "Present"}
          </p>
          <p>{degree?.achievements}</p>
        </div>
      ) : (
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Enter/Click your education!
        </p>
      )}
    </EducationListContainer>
  );
};

export default EducationList;
