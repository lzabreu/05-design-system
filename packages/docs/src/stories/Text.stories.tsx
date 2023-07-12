import { StoryObj, Meta } from "@storybook/react"

import { Text, TextProps} from "@ignite-ui/react"

export default {
  title: "Typography/Text",
  component: Text,
  tags:['autodocs'],
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in deserunt saepe corrupti quidem tempore! Inventore veritatis facere minus, officia in corrupti eum ex maxime! Atque commodi voluptates quasi dolorum?",
  }

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  }
}
