import { HTMLAttributes } from "react";

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | "normal" | "bold" | "bolder" | "lighter";

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  as?: "span" | "strong" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: number;
  weight?: FontWeight;
  text?: string | number;
  spacing?: number;
  font?: string;
  height?: number;
  cursor?: string;
  background?: string;
  gradient?: boolean;
  align?: string;
}

export type StyleProps = Pick<
  TextProps,
  "align" | "size" | "weight" | "color" | "spacing" | "font" | "height" | "cursor" | "background" | "gradient"
>;
