import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  QueryRequestBook,
  QueryRequestBooks,
  QueryResponseBook,
  QueryResponseBooks,
} from './types';

const API_KEY = 'AIzaSyD3VS0m4ZAeL625t_VFOR-EHHOIff-AIWg';

export const api = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/' }),
  endpoints: (builder) => ({
    getBooks: builder.query<QueryResponseBooks, QueryRequestBooks>({
      query: ({ searchValue, searchCategories, sortBy, countBooksOnPage }) =>
        `volumes?q=${searchValue}+subject:${searchCategories}&orderBy=${sortBy}&maxResults=${countBooksOnPage}&key=${API_KEY}`,
    }),
    getBook: builder.query<QueryResponseBook, QueryRequestBook>({
      query: ({ id }) => `volumes/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetBookQuery } = api;
