import React from 'react';

import { screen, render } from '../../tests/test-util';
import Container from './Container';

describe('src/components/Container', () => {
  it('renders the container component', () => {
    render(<Container></Container>);

    expect(screen.getByTestId('container')).toBeInTheDocument();
  });

  it('have canvas in the container', () => {
    render(<Container></Container>);

    expect(screen.getByRole('canvas')).toBeInTheDocument();
  });

  it('controls auto rotate', () => {
    render(<Container></Container>);

    expect(screen.getByTestId('control')).toHaveAttribute('autoRotate');
  });
});
