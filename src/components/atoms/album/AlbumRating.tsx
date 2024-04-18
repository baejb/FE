import styled from "styled-components";

import { IoMusicalNotes } from "react-icons/io5";

import color from "../../../styles/color";

const AlbumRating = () => {
  return (
    <Container>
      <IoMusicalNotes className="icon" color={"#555"} />
      4.5
    </Container>
  );
};

export default AlbumRating;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 0.7rem;
  color: ${color.COLOR_GRAY_TEXT};
`;
