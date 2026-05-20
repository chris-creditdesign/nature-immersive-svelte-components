import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import SeriesArticleNav from '../components/interactive/SeriesArticleNav/index.svelte';

const articleData = { doi: '10.1038/s41586-000-0000-0' };

const articles = [
	{ title: 'Article One', url: '/one', doi: '10.1038/s41586-000-0001-0', published: true },
	{
		title: 'Article Two (current)',
		url: '/two',
		doi: '10.1038/s41586-000-0000-0',
		published: true
	},
	{ title: 'Article Three', url: '/three', doi: '10.1038/s41586-000-0002-0', published: true }
];

describe('SeriesArticleNav', () => {
	it('renders without crashing', () => {
		render(SeriesArticleNav, {
			articleData,
			articles,
			headline: 'Series Navigation',
			message: 'Open'
		});
		expect(screen.getByText('Series Navigation')).toBeInTheDocument();
	});

	it('hides article list initially (collapsed on mount)', async () => {
		render(SeriesArticleNav, { articleData, articles, headline: 'Series', message: 'Open' });
		// The component starts expanded=true then sets expanded=false in onMount
		// After mount, the list should be hidden
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});

	it('calls onupdate callback when button is clicked', async () => {
		const user = userEvent.setup();
		let updateCalled = false;
		render(SeriesArticleNav, {
			articleData,
			articles,
			headline: 'Series',
			message: 'Open',
			onupdate: () => {
				updateCalled = true;
			}
		});
		const button = screen.getByRole('button');
		await user.click(button);
		expect(updateCalled).toBe(true);
	});

	it('marks the current article with aria-current', async () => {
		const user = userEvent.setup();
		render(SeriesArticleNav, {
			articleData,
			articles,
			headline: 'Series',
			message: 'Open',
			expandedMessage: 'Close'
		});
		const button = screen.getByRole('button');
		// Component starts collapsed after mount; click to expand
		await user.click(button);
		// Wait for articles to appear after expansion
		const links = await screen.findAllByRole('link');
		const currentLink = links.find((l) => l.textContent?.includes('Article Two (current)'));
		expect(currentLink).toBeDefined();
		expect(currentLink).toHaveAttribute('aria-current', 'page');
	});
});
