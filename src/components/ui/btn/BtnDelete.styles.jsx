import styled from "styled-components";

// Componente Styled Button
const variantColors = {
  primary: "#ef4444",
  secondary: "#b91c1c",
  tertiary: "#fca5a5",
};

const variantHoverColors = {
  primary: "#dc2626",
  secondary: "#7f1d1d",
  tertiary: "#f87171",
};

const StyledButton = styled.button`
  background: ${(props) => variantColors[props.$variant || "primary"]};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  color: #ffffff;
  padding: 0.4rem 1.4rem;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => variantHoverColors[props.$variant]};
    transform: translateY(-0px);
  }

  &:active {
    transform: translateY(0);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

// * Componente Botón *
const Button = ({ onClick, children, variant = "primary" }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
    // Si no hay onClick, no hacemos preventDefault para permitir el comportamiento normal del Link
  };

  return (
    <StyledButton onClick={handleClick} $variant={variant}>
      {onClick ? children : <a>{children}</a>}
    </StyledButton>
  );
};

export default Button;
