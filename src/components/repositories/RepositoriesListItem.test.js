import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from './RepositoriesListItem';

// module mock
// jest.mock('../tree/FileIcon.js', () => {
//   // Content of FileIcon.js
//   return () => {
//     return 'File Icon Component';
//   };
// });

function renderComponent() {
  const repository = {
    full_name: 'facebook/react',
    language: 'Javascript',
    description: 'A js library',
    owner: {
      login: 'facebook',
    },
    name: 'react',
    html_url: 'https://github.com/facebook/react',
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );

  return { repository };
}

test('show a link to the github homepage for this repository', async () => {
  const { repository } = renderComponent();
  //   screen.debug();
  //   await pause();
  //   screen.debug();

  //   await act(async () => {
  //     await pause();
  //   });

  //   const link = await screen.findByRole('img', {
  //     name: new RegExp(repository.language),
  //   });

  //   expect(link).toBeInTheDocument();

  await screen.findByRole('img', { name: 'Javascript' });

  const link = screen.getByRole('link', {
    name: /github repository/i,
  });

  expect(link).toHaveAttribute('href', repository.html_url);
});

test('shows a file icon with a appropriate icon', async () => {
  renderComponent();

  const icon = await screen.findByRole('img', { name: 'Javascript' });

  expect(icon).toHaveClass('js-icon');
});

test('shows a link to the code editor page', async () => {
  const { repository } = renderComponent();

  await screen.findByRole('img', {
    name: 'Javascript',
  });

  const link = screen.getByRole('link', {
    name: new RegExp(repository.owner.login),
  });

  expect(link).toHaveAttribute('href', `/repositories/${repository.full_name}`);
});

const pause = () => {
  return new Promise((resolve) => {
    resolve();
  }, 100);
};
