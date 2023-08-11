import { Meta, StoryFn } from "@storybook/react";

import { InfoCard, InfoCardProps } from "./info-card";

const meta: Meta = {
  title: "Components/InfoCard2",
  component: InfoCard,
};

export default meta;

const Template: StoryFn<InfoCardProps> = (props) => <InfoCard {...props} />;

export const Default = Template.bind({});

Default.args = {
  label: "Full Name",
  value: "John Doe",
};
