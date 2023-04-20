import React from 'react';
import { render } from '@testing-library/react';
import Character from '../Character';

describe('Characters', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Character
        name="name"
        image="image"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
