import { StoryObj, Meta } from "@storybook/react"

import { Box,BoxProps, Text } from "@lzabreu-ui/react"

export default {
  title: "Surfaces/Box",
  component: Box,
  tags:['autodocs'],
  args: {
    children:(
      <Text>Teste</Text>
    )
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }

} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  
}
