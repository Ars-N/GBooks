import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const defaultCountBooks = 5;

const initialState = {
  countBooksOnPage: defaultCountBooks,
  searchValue: '',
  searchCategories: 'art',
  sortBy: 'relevance',
  isFetching: true,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    increaseCountBooksOnPage: (state) => {
      state.countBooksOnPage += defaultCountBooks;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setSearchCategories: (state, action: PayloadAction<string>) => {
      state.searchCategories = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
  },
});

export const {
  increaseCountBooksOnPage,
  setSearchCategories,
  setSortBy,
  setSearchValue,
  setIsFetching,
} = searchSlice.actions;

export default searchSlice.reducer;
