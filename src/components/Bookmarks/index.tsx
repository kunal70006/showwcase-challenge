import { BookmarkContainer } from "../../styles/Styles";

interface BookmarkProps {
  educationListArray: any;
  handleSelected: any;
}

const Bookmarks = ({ educationListArray, handleSelected }: BookmarkProps) => {
  return (
    <BookmarkContainer>
      {educationListArray.length !== 0
        ? educationListArray.map((item: any, index: number) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1em",
                cursor: "pointer",
              }}
              onClick={() => handleSelected(item)}
            >
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                {item.collegeName}
              </p>
              <p>{item.degreeName}</p>
            </div>
          ))
        : null}
    </BookmarkContainer>
  );
};

export default Bookmarks;
