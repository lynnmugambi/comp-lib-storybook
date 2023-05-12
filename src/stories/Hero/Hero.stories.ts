import type { Meta, StoryObj } from "@storybook/react"
import { Hero } from "./Hero"

const meta = {
  title: "Hero/Hero",
  component: Hero,
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    id: 1,
    title: "Mountain",
    loading: false,
    img: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis tellus et libero feugiat, vitae dignissim augue pulvinar.",
  },
}
