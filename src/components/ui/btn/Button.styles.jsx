import styled from "styled-components";
import { Link } from "react-router-dom";

// Componente Styled Button
const variantColors = {
  primary: "#60a5fa",
  secondary: "#d6672d",
  tertiary: "#a78bfa",
};

const variantHoverColors = {
  primary: "#20a5fa",
  secondary: "#ea580c",
  tertiary: "#8b5cf6",
};

const StyledButton = styled.button`
  background: ${(props) => variantColors[props.$variant || "primary"]};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  color: #ffffff;
  padding: 0.6rem 1.8rem;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => variantHoverColors[props.$variant]};
    transform: translateY(-4px);
  }

  &:active {
    transform: translateY(0);
    transition: transform 0.2s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

// * Componente Botón *
const Button = ({ onClick, to, children, variant = "primary" }) => {
  // Si hay "to", renderiza como Link
  if (to) {
    return (
      <StyledButton as={Link} to={to} $variant={variant}>
        {children}
      </StyledButton>
    );
  }

  // Si no, renderiza como botón normal
  return (
    <StyledButton onClick={onClick} $variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
