import { ComponentMeta, ComponentStory } from '@storybook/react'
import tw from 'twin.macro'

import { Placeholder } from '@/components/atoms'

export default {
	title: 'Atoms/Placeholder',
	component: Placeholder,
	argTypes: { onInputText: { action: 'clicked' } }
} as ComponentMeta<typeof Placeholder>
const Wrapper = tw.section`flex w-1/6`
const Template: ComponentStory<typeof Placeholder> = (args) => (
	<Wrapper>
		<Placeholder {...args} />
	</Wrapper>
)

export const Example = Template.bind({})
Example.args = {
	label: 'First name',
	placeholderText: 'Jane',
	type: 'default'
}
