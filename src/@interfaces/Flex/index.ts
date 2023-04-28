import { ReactNode } from "react";

export interface FlexProps {
  children: ReactNode;
  display?: string;
  direction?: string;
  justify?: string;
  string?: string;
  align?: string;
  gap?: number;
  width?: string;
  height?: string;
  wrap?: string;
}
