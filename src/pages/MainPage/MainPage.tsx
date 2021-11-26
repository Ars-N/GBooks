import React, { FC, useEffect } from 'react';
import Spinner from '../../shared/Spinner';
import BooksList from '../../components/BooksList';
import { useGetBooksQuery } from '../../api/fetchData';
import { QueryResponseBooks, SearchCategories, SortBy } from '../../api/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setIsFetching } from '../../redux/reducer';

const MainPage: FC = () => {
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const countBooksOnPage = useAppSelector((state) => state.search.countBooksOnPage);
  const searchCategories = useAppSelector(
    (state) => state.search.searchCategories,
  ) as SearchCategories;
  const sortBy = useAppSelector((state) => state.search.sortBy) as SortBy;

  const dispatch = useAppDispatch();

  const { isFetching, isLoading, error, data } = useGetBooksQuery({
    countBooksOnPage,
    searchCategories,
    searchValue,
    sortBy,
  });

  useEffect(() => {
    dispatch(setIsFetching(isFetching));
  }, [isFetching]);

  return (
    <main>
      {error && <div style={{ textAlign: 'center' }}>Error: {error}</div>}
      {isLoading ? (
        <Spinner size="80px" />
      ) : (
        searchValue && (
          <BooksList
            totalItems={(data as QueryResponseBooks).totalItems}
            items={(data as QueryResponseBooks).items}
          />
        )
      )}
    </main>
  );
};

export default MainPage;
