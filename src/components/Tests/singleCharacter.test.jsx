import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import SingleCharacter from '../singleCharacter';

const mockStore = configureMockStore();

describe('SingleCharacter component', () => {
  it('renders correctly', () => {
    const store = mockStore({
      character: {
        characters: [
          {
            id: '1',
            name: 'Harry Potter',
            image: 'https://via.placeholder.com/150',
            house: 'Gryffindor',
            actor: 'Daniel Radcliffe',
            gender: 'Male',
            hairColour: 'Black',
            species: 'Human',
            wand: {
              wood: 'Holly',
              core: 'Phoenix feather',
              length: '11 inches',
            },
          },
        ],
      },
    });
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/characters/1']}>
          <Routes>
            <Route path="/characters/:id" element={<SingleCharacter />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
