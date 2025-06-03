import styled from "styled-components";

const colors = {
  success: {
    bg: "#4CAF50",
    hover: "#45A049",
  },
  primary: {
    bg: "#2196F3",
    hover: "#1976D2",
  },
  danger: {
    bg: "#F44336",
    hover: "#D32F2F",
  },
};

// Styled component base
const StyledButton = styled.button`
  background-color: ${({ variant }) =>
    colors[variant]?.bg || colors.primary.bg};
  color: white;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ variant }) =>
      colors[variant]?.hover || colors.primary.hover};
  }
`;

// Componente funcional que acepta props
function Button({ children, variant = "primary", onClick }) {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
