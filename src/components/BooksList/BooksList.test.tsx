import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event/dist';
import store from '../../store';
import BooksList from './BooksList';
import { BookInfo } from '../../api/types';

const items: { id: string; volumeInfo: BookInfo }[] = [
  {
    id: 'id',
    volumeInfo: {
      title: 'title',
      authors: ['author1', 'author2'],
      categories: ['categories1', 'categories2'],
      description: 'Hi, description',
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/publisher/content?id=uijJBQAAQBAJ&printsec=' +
          'frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73vEK4DegRVIuA9fVmEKlFj8qhKk3Hub0r' +
          'OXJRUqZ7ahCE2UT7FtKyX85IJzZWT9_BkFvGyG_mfZ4qYdMcfx6mlNFyYhyy0baYutdg4X-5yHuKmZPkWyz' +
          'fEb-3z2OYLkTvRydBk&source=gbs_api',
        smallThumbnail:
          'http://books.google.com/books/publisher/content?id=uijJBQAAQBAJ&printsec=fro' +
          'ntcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72h506omAQn6Mpx482gSTBIfmxMtrzkDYC2P_mTjVDNWy' +
          '_qT6ZIekMIuy09xgaikOqDHtba17P3QBiU2_tviiTPOPMqPX9UINP1XwB04GEPglLb1DSNFpBYpy2kCUfSuQJ8k7wj&source=gbs_api',
        extraLarge:
          'http://books.google.com/books/publisher/content?id=uijJBQAAQBAJ&printsec=front' +
          'cover&img=1&zoom=6&edge=curl&imgtk=AFLRE70csbodiqNRRIXrR4AcoaHgU1IaSSgB2APHXeqtCVhOBVzPIonT5I' +
          'Maff3OVYFVy1lbZu3nOWV4XxSPA3oy17TCkyPT1pDI9-tS-J7J4BknWVhsyG1P635bENvAo7PoA4gNiI1X&source=gbs_api',
      },
    },
  },
];
test('renders correctly', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Router>
        <BooksList totalItems={512} items={items} />
      </Router>
    </Provider>,
  );
  userEvent.click(wrapper.getByText('Load more'));
  expect(wrapper).toMatchSnapshot();
});
