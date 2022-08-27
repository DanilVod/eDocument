import { ReactNode } from "react";
import styled from "styled-components";
import { colors, ColorsName } from "@/constants/global.styles";
import React from "react";

interface TypographyProps {
  weight?: "normal" | "medium" | "semibold";
  size?: number;
  children: ReactNode;
  color?: ColorsName;
}
const StyledText = styled.div<TypographyProps>`
  color: ${({ color }) => colors[color || "none"]};
  font-size: ${({ size }) => (size ? size + "pt" : "12pt")};
  font-family: "Poppins";
  font-weight: ${({ weight }) => {
    switch (weight) {
      case "medium":
        return 500;
      case "semibold":
        return 600;
      default:
        return "normal";
    }
  }};
`;
export const Typography = (props: TypographyProps) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
