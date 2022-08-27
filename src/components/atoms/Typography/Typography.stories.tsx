import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@/components";
import tw from "twin.macro";

export default {
  title: "Atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;
const Wrapper = tw.section`flex w-1/6`;
const Template: ComponentStory<typeof Typography> = (args) => (
  <Wrapper>
    <Typography {...args}>Test text</Typography>
  </Wrapper>
);

export const Example = Template.bind({});
Example.args = {};
