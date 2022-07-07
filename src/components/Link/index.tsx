import Link from "next/link";
import { StyledLink } from "../../styles/Styles";

interface ButtonProps {
  slug: string;
}

const EnterButton = ({ slug }: ButtonProps) => {
  return (
    <Link href={slug}>
      <StyledLink>Enter</StyledLink>
    </Link>
  );
};

export default EnterButton;
