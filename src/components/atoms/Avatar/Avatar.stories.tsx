import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import tw from 'twin.macro'

import { Avatar } from '@/components/atoms'

export default {
	title: 'Atoms/Avatar',
	component: Avatar
} as ComponentMeta<typeof Avatar>
const Wrapper = tw.section`flex w-1/6`
const Template: ComponentStory<typeof Avatar> = (args) => (
	<Wrapper>
		<Avatar {...args} />
	</Wrapper>
)

export const Example = Template.bind({})
Example.args = {

	image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/404.jpg'

}
