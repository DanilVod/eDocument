import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@/components";
import tw from "twin.macro";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;
const Wrapper = tw.section`flex w-1/6`;
const Template: ComponentStory<typeof Button> = (args) => (
  <Wrapper>
    <Button {...args} />
  </Wrapper>
);

export const Example = Template.bind({});
Example.args = {
  type: "normal",
  children: "Test button",
};
