import {
  BookmarkContainer,
  BookmarkIndividualContainer,
  Heading,
  Subtitle,
} from "../../styles/Styles";
import { DegreeDetails } from "../../types/index";

interface BookmarkProps {
  educationListArray: DegreeDetails[];
  handleSelected: (degree: DegreeDetails) => void;
}

const Bookmarks = ({ educationListArray, handleSelected }: BookmarkProps) => {
  return (
    <BookmarkContainer>
      {educationListArray.length !== 0
        ? educationListArray.map((item: DegreeDetails, index: number) => (
            <BookmarkIndividualContainer
              key={index}
              onClick={() => handleSelected(item)}
            >
              <Heading>{item.collegeName}</Heading>
              <Subtitle>{item.degreeName}</Subtitle>
            </BookmarkIndividualContainer>
          ))
        : null}
    </BookmarkContainer>
  );
};

export default Bookmarks;
