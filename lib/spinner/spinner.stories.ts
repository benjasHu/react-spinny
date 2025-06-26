import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      options: ['default', 'rounded', 'quarter'],
      control: { type: 'select' }
    },
    foreground: {
      control: { type: 'color' }
    },
    background: {
      control: { type: 'color' }
    },
    size: {
      control: { type: 'range', min: 10, max: 100, step: 1 }
    },
    strokeWidth: {
      control: { type: 'range', min: 1, max: 50, step: 1 }
    },
    duration: {
      control: { type: 'range', min: 100, max: 3000, step: 100 }
    }
  }
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof Spinner>

export const DefaultSpinner: Story = {
  args: {
    variant: 'default',
    size: 40,
    strokeWidth: 6,
    duration: 800
  }
}

export const RoundedSpinner: Story = {
  args: {
    ...DefaultSpinner.args,
    variant: 'rounded'
  }
}

export const QuarterSpinner: Story = {
  args: {
    ...DefaultSpinner.args,
    variant: 'quarter'
  }
}
