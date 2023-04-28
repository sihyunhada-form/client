import { HTMLAttributes, ReactNode } from "react";
import { FontWeight } from "~/@interfaces/atoms/Text";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  text?: string;
  textColor?: string;
  textSize?: number;
  border?: string;
  background?: string;
  borderRadius?: string;
  shadow?: string;
  padding?: string;
  cursor?: string;
  width?: string;
  height?: string;
  align?: string;
  pointer?: string;
  weight?: FontWeight;
}
