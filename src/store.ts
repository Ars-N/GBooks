import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './redux/reducer';
import { api } from './api/fetchData';

const store = configureStore({
  reducer: {
    search: searchReducer,
    searchItem: searchReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
