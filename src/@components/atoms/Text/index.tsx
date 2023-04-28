import styled from "styled-components";
import { StyleProps, TextProps } from "~/@interfaces";

export const Text = ({
  size = 1,
  weight = 400,
  color = "Black",
  spacing = 0,
  font = "Pretendard",
  height = 120,
  cursor = "auto",
  background,
  gradient = false,
  align = "start",
  text,
  ...rest
}: TextProps) => {
  return (
    <StyledText
      size={size}
      weight={weight}
      color={color}
      spacing={spacing}
      font={font}
      height={height}
      cursor={cursor}
      align={align}
      {...rest}
    >
      {text}
    </StyledText>
  );
};

const StyledText = styled.span<StyleProps>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  letter-spacing: ${({ spacing }) => spacing}px;
  line-height: ${({ height }) => height}%;
  font-family: ${({ font }) => font};
  text-align: ${({ align }) => align};
  cursor: ${({ cursor }) => cursor};
  background: ${({ background }) => background};
  ${({ gradient }) =>
    gradient
      ? `-webkit-background-clip: text;
  -webkit-text-fill-color:transparent;
  background-clip: text;
  text-fill-color:transparent;

  `
      : null};
`;
