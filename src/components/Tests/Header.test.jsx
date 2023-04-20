import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // add this import
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('Header component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
