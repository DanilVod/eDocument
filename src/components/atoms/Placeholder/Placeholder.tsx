import { InputTypes } from "@/types/share";
import React, { useState } from "react";
import { Dispatch } from "react";
import {
  PlaceholderLabel,
  PlaceholderLine,
  PlaceholderLineActive,
  PlaceholderValue,
  StyledPlaceholder,
} from "./Placeholder.style";

interface PlaceholderProps {
  type?: InputTypes;
  label?: string;
  onInputText?: Dispatch<string>;
  placeholderText?: string;
  value?: string;
}

export const Placeholder = (props: PlaceholderProps) => {
  const [isFocus, setIsFocus] = useState(false);
  let inputHandler;
  if (props.onInputText) {
    inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const enteredName = event.target.value;
      //@ts-ignore
      props.onInputText(enteredName);
    };
  }

  return (
    <StyledPlaceholder {...props} data-testid="placeholder">
      <PlaceholderValue
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={inputHandler}
        placeholder={props.placeholderText}
        value={props.value}
        disabled={props.type === "show"}
      ></PlaceholderValue>
      {props.type != "new" && (
        <PlaceholderLabel>{props.label}</PlaceholderLabel>
      )}
      {props.type != "show" &&
        (isFocus ? <PlaceholderLineActive /> : <PlaceholderLine />)}
    </StyledPlaceholder>
  );
};

Placeholder.defaultProps = {
  type: "default",
};
