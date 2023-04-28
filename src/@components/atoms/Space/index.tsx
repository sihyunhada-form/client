import styled from "styled-components";
import { SpaceProps } from "~/@interfaces";

export function Space({ margin = "0px", height = "0px" }: SpaceProps) {
  return <SpaceBase margin={margin} height={height} />;
}

const SpaceBase = styled("div")<{ margin: string; height: string }>`
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
`;
