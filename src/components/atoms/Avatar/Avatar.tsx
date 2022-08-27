import { AvatarContainer, AvatarHover, StyledAvatar } from "./Avatar.style";
import clsx from "clsx";
import React from "react";

export type avatarSize = "large" | "medium" | "small";
export interface AvatarProps {
  image: string;
  size?: avatarSize;
  isActive: boolean;
}

export const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      <StyledAvatar
        {...props}
        src={props.image}
        className={clsx({
          active: props.isActive,
        })}
        data-testid="avatar"
        alt="avatar"
      />
      {props.size === "large" && <AvatarHover size={props.size} />}
    </AvatarContainer>
  );
};
Avatar.defaultProps = {
  size: "medium",
  isActive: false,
};
