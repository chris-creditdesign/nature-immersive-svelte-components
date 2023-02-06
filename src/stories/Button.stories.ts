import type { Meta, StoryObj } from '@storybook/svelte';

// import Button from './Button.svelte';
import SimpleButton from '$lib/buttons/SimpleButton/index.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
	title: 'Example/Button',
	component: SimpleButton,
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
		// size: {
		// 	control: { type: 'select' },
		// 	options: ['small', 'medium', 'large']
		// }
		message: { control: 'text' }
	}
} satisfies Meta<SimpleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Primary: Story = {
	args: {
		// primary: true,
		message: 'Button'
	}
};

// export const Secondary: Story = {
// 	args: {
// 		label: 'Button'
// 	}
// };

// export const Large: Story = {
// 	args: {
// 		size: 'large',
// 		label: 'Button'
// 	}
// };

// export const Small: Story = {
// 	args: {
// 		size: 'small',
// 		label: 'Button'
// 	}
// };
