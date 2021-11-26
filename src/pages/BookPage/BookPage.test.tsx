import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import BookPage from './BookPage';

test('renders correctly', async () => {
  const wrapper = render(
    <Provider store={store}>
      <BookPage id="fasfa" />
    </Provider>,
  );
  expect(wrapper).toMatchSnapshot();
});
