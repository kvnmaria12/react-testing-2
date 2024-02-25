import { render, screen } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

function renderComponent() {
  const repository = {
    language: 'Javascript',
    stargazers_count: 4,
    open_issues: 20,
    forks: 5,
  };

  render(<RepositoriesSummary repository={repository} />);

  return { repository };
}

test('renders all the data', () => {
  const { repository } = renderComponent();

  for (let key in repository) {
    const value = repository[key];
    const element = screen.getByText(new RegExp(value));
    expect(element).toBeInTheDocument();
  }
});
