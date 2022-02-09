import { render } from '@testing-library/react';

import App from './App';

test('renders "test passed!" text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('test passed!');

  expect(linkElement).toBeInTheDocument();
});
