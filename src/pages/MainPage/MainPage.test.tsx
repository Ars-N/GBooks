import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import MainPage from './MainPage';

test('renders correctly', async () => {
  const wrapper = render(
    <Provider store={store}>
      <MainPage />
    </Provider>,
  );
  expect(wrapper).toMatchSnapshot();
});
