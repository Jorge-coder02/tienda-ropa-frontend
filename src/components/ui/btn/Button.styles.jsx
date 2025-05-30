import styled from "styled-components";
import { Link } from "react-router-dom";

// Componente Styled Button
const variantColors = {
  primary: "#60a5fa",
  secondary: "#d6672d",
  tertiary: "#a78bfa",
  delete: "#ff6f6f",
};

const variantHoverColors = {
  primary: "#20a5fa",
  secondary: "#ea580c",
  tertiary: "#8b5cf6",
  delete: "#ff4343",
};

const StyledButton = styled.button`
  background: ${(props) =>
    props.disabled ? "#ccc" : variantColors[props.$variant || "primary"]};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  padding: 0.6rem 1.8rem;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.disabled ? "#ccc" : variantHoverColors[props.$variant]};
    transform: ${(props) => (props.disabled ? "none" : "translateY(-4px)")};
  }

  &:active {
    transform: ${(props) => (props.disabled ? "none" : "translateY(0)")};
    transition: transform 0.2s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

// * Componente Botón *
const Button = ({
  onClick,
  to,
  children,
  variant = "primary",
  disabled = false,
}) => {
  // Si hay "to", renderiza como Link
  if (to) {
    return (
      <StyledButton as={Link} to={to} $variant={variant} disabled={disabled}>
        {children}
      </StyledButton>
    );
  }

  // Si no, renderiza como botón normal
  return (
    <StyledButton onClick={onClick} $variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
