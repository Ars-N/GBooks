import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from '../store';

describe('App', () => {
  test('renders App component', async () => {
    const wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    wrapper.debug();
  });
});
