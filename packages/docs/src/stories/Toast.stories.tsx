import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@lzabreu-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  tags:['autodocs'],

  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}