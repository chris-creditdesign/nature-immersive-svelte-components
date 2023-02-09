import type { Meta, StoryObj } from '@storybook/svelte';
import ExpandButton from '../index.svelte';
import { themeOptions } from '$previewContent/options.js';

const meta = {
	title: 'components/buttons/ExpandButton',
	component: ExpandButton,
	tags: ['autodocs'],
	argTypes: {
		className: { control: 'text' },
		message: { control: 'text' },
		expandedMessage: { control: 'text' },
		expanded: { control: 'boolean' },
		theme: { control: { type: 'select' }, options: themeOptions },
		disabled: { control: 'boolean' }
	}
} satisfies Meta<ExpandButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
