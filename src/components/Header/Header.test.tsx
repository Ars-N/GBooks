import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event/dist';
import Header from './Header';
import store from '../../store';

describe('Header', () => {
  test('renders Header component', async () => {
    const wrapper = render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    wrapper.debug();

    userEvent.type(wrapper.getByTestId('search'), 'Hello, World!');
    expect(wrapper.getByTestId('search')).toHaveValue('Hello, World!');
    fireEvent.click(wrapper.getByTestId('submit'));
  });
  test('select-categories', () => {
    const { getByRole, getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    userEvent.selectOptions(
      getByTestId('select-categories'),
      getByRole('option', { name: 'biography' }),
    );
    expect((getByRole('option', { name: 'biography' }) as HTMLOptionElement).selected).toBe(true);
  });

  test('select-orderBy', () => {
    const { getByRole, getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    userEvent.selectOptions(getByTestId('select-orderBy'), getByRole('option', { name: 'newest' }));
    expect((getByRole('option', { name: 'newest' }) as HTMLOptionElement).selected).toBe(true);
  });
});
