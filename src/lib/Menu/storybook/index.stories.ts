import type { Meta, StoryObj } from '@storybook/svelte';
import Menu from '../index.svelte';
import { articleData } from '$previewContent/article-data.js';

const meta = {
	title: 'components/Menu',
	component: Menu,
	tags: ['autodocs'],
	argTypes: {
		articleData: { control: 'object' }
	}
} satisfies Meta<Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		articleData
	}
};
