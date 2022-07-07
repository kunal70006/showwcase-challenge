import styled from "styled-components";
import Link from "next/link";

interface ButtonProps {
  slug: string;
}

const StyledLink = styled.a`
  border: none;
  font-size: large;
  margin-top: 24px;
  background: palevioletred;
  border-radius: 6px;
  padding: 6px 18px;
  cursor: pointer;
  transition: 0.2s ease-in;
  color: white;
  :active {
    transform: translateY(-8px);
  }
  :hover {
    background: #88445b;
  }
`;

const EnterButton = ({ slug }: ButtonProps) => {
  return (
    <Link href={slug}>
      <StyledLink>Enter</StyledLink>
    </Link>
  );
};

export default EnterButton;
