import { render, screen } from '@testing-library/react';

describe('UserInfo.jsx', () => {
  test('snapshot renders correctly, falsy values', () => {
    render(<div data-testid="button">dfb</div>);
    const element = screen.getByTestId('button');
    expect(element).toMatchSnapshot();
  });
});
