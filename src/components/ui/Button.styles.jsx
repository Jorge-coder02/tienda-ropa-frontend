import styled from "styled-components";

// Componente Styled Button
const variantColors = {
  primary: "#05a69f",
  secondary: "#056573",
  tertiary: "#1c3c55",
};

const variantHoverColors = {
  primary: "#056573",
  secondary: "#1c3c55",
  tertiary: "#056573",
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
