import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import tw from 'twin.macro'

import { Button } from '@/components/atoms'

export default {
	title: 'Atoms/Button',
	component: Button
} as ComponentMeta<typeof Button>
const Wrapper = tw.section`flex w-1/6`
const Template: ComponentStory<typeof Button> = (args) => (
	<Wrapper>
		<Button {...args} />
	</Wrapper>
)

export const Example = Template.bind({})
Example.args = {
	_type: 'primary',
	children: 'Test button'
}
