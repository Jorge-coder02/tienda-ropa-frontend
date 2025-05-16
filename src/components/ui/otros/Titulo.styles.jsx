import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";

// Animaciones
const typewriter = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCursor = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #d6672d }
`;

const variantSize = {
  primary: "40px",
  secondary: "36px",
  tertiary: "32px",
};

const StyledTitle = styled.h2`
  font-weight: 600;
  background: linear-gradient(45deg, #d6672d, #000000);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-transform: uppercase;
  font-size: ${(props) => variantSize[props.$variant || "primary"]};
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.3));
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 1.2px;
  border-right: 3px solid
    ${(props) => (props.$visible ? "#d6672d" : "transparent")};
  padding-right: 5px;
  display: inline-block;
  animation: ${(props) => (props.$visible ? typewriter : "none")}
      ${(props) => props.$duration || 3}s
      steps(${(props) => props.$steps || 20}, end),
    ${(props) => (props.$visible ? blinkCursor : "none")} 0.75s step-end
      infinite;
`;

const Titulo = ({
  variant = "primary",
  children,
  duration = 3,
  steps = 20,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Dispara cuando el 50% del elemento es visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <StyledTitle
      ref={ref}
      $variant={variant}
      $duration={duration}
      $steps={steps}
      $visible={isVisible}
    >
      {children}
    </StyledTitle>
  );
};

export default Titulo;
