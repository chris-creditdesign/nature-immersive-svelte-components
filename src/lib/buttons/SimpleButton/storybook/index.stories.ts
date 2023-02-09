import type { Meta, StoryObj } from '@storybook/svelte';
import SimpleButton from '../index.svelte';
import { themeOptions } from '$previewContent/options.js';

const meta = {
	title: 'components/buttons/SimpleButton',
	component: SimpleButton,
	tags: ['autodocs'],
	argTypes: {
		className: { control: 'text' },
		message: { control: 'text' },
		theme: {
			control: { type: 'select' },
			options: themeOptions
		},
		disabled: { control: 'boolean' }
	}
} satisfies Meta<SimpleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
