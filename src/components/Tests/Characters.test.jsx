import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Characters from '../Characters';
import store from '../../redux/store';

describe('Characters component', () => {
  it('matches the snapshot', () => {
    const characters = [
      {
        id: 1,
        name: 'Harry Potter',
        image: 'harry.jpeg',
      },
      {
        id: 2,
        name: 'Hermione Granger',
        image: 'hermione.jpeg',
      },
    ];
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Characters characters={characters} />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
