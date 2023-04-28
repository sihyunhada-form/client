import styled from "styled-components";
import { ButtonProps } from "~/@interfaces";

export const Button = ({
  children,
  textSize = 16,
  textColor = "White",
  text,
  border = "none",
  background = `none`,
  borderRadius = "16px",
  shadow,
  padding = "1em",
  cursor = "auto",
  width,
  pointer = "auto",
  height,
  weight,
  align = "center",
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      cursor={cursor}
      border={border}
      background={background}
      borderRadius={borderRadius}
      shadow={shadow}
      padding={padding}
      width={width}
      pointer={pointer}
      height={height}
      align={align}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ textColor }) => textColor};
  font-size: ${({ textSize }) => textSize};
  background: ${({ background }) => background};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ shadow }) => shadow};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
  text-align: ${({ align }) => align};
  pointer: ${({ pointer }) => pointer};
`;
