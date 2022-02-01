import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "./button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary: ComponentStory<typeof Button> = Template.bind({});
Primary.args = {
  children: "Primary",
};
