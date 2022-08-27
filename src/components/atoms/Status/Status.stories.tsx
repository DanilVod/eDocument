import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Status } from "@/components";
import tw from "twin.macro";

export default {
  title: "Atoms/Status",
  component: Status,
} as ComponentMeta<typeof Status>;
const Wrapper = tw.section`flex w-1/6`;
const Template: ComponentStory<typeof Status> = (args) => (
  <Wrapper>
    <Status {...args} />
  </Wrapper>
);

export const Example = Template.bind({});
Example.args = {
  type: "Top rated",
};
