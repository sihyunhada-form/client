import styled from "styled-components";
import { FlexProps } from "~/@interfaces/Flex";

export const Flex = ({
  children,
  display = "flex",
  direction = "column",
  justify = "center",
  align = "center",
  gap = 0,
  width = "100%",
  height = "auto",
  wrap = "no-wrap",
}: FlexProps) => {
  return (
    <FlexBase
      display={display}
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      width={width}
      height={height}
      wrap={wrap}
    >
      {children}
    </FlexBase>
  );
};

const FlexBase = styled.div<{
  display?: string;
  direction?: string;
  justify?: string;
  align?: string;
  gap?: number;
  width?: string;
  height?: string;
  wrap: string;
}>`
  display: ${({ display }) => display};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => `${gap}px`};
  flex-wrap: ${({ wrap }) => wrap};
`;
