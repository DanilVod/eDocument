import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import tw from 'twin.macro'

import { Typography } from '@/components/atoms'

export default {
	title: 'Atoms/Typography',
	component: Typography
} as ComponentMeta<typeof Typography>
const Wrapper = tw.section`flex w-1/6`
const Template: ComponentStory<typeof Typography> = (args) => (
	<Wrapper>
		<Typography {...args}>Test text</Typography>
	</Wrapper>
)

export const Example = Template.bind({})
Example.args = {}
