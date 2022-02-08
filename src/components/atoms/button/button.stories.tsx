import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from ".";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary: ComponentStory<typeof Button> = Template.bind({});
Primary.args = {
  children: "Primary",
};

export const Secondary: ComponentStory<typeof Button> = Template.bind({});
Secondary.args = {
  children: "Secondary",
};


export const Blah = () => {
  return <span>Blah Component</span>
}
