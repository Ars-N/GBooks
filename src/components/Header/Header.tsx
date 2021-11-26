import React, { FC, FormEvent, useCallback, useState } from 'react';
import './Header.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearchCategories, setSearchValue, setSortBy } from '../../redux/reducer';
import Select from '../Select';

const Header: FC = () => {
  const isFetching = useAppSelector((state) => state.search.isFetching);
  const [searchString, setSearchString] = useState('');
  const dispatch = useAppDispatch();

  // \\\\\ Handles ////
  const handleInput = useCallback(({ target }) => {
    setSearchString(target.value);
  }, []);

  //  ___\& with dispatch/___
  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      dispatch(setSearchValue(searchString));
    },
    [searchString],
  );
  const handleSelectCategories = useCallback(
    ({ target }) => {
      dispatch(setSearchValue(searchString));
      dispatch(setSearchCategories(target.value));
    },
    [searchString],
  );
  const handleSelectSortBy = useCallback(
    ({ target }) => {
      dispatch(setSearchValue(searchString));
      dispatch(setSortBy(target.value));
    },
    [searchString],
  );

  // \\\\________////

  return (
    <header className="header flex-center">
      <h1 className="title">Search for books</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="flex-center">
          <input
            data-testid="search"
            className="inputSearch"
            type="search"
            placeholder="search"
            value={searchString}
            onChange={handleInput}
          />
          <button
            data-testid="submit"
            className="button flex-center"
            type="submit"
            disabled={isFetching}
          >
            <img src="./img/Search.svg" alt="search" className="img-search" />
          </button>
        </div>

        <div className="flex-center container">
          <Select
            labelName="Categories"
            defaultValue="art"
            name="categories"
            onChange={handleSelectCategories}
            options={[
              { value: 'art', name: 'art' },
              { value: 'biography', name: 'biography' },
              { value: 'computers', name: 'computers' },
              { value: 'history', name: 'history' },
              { value: 'medical', name: 'medical' },
              { value: 'poetry', name: 'poetry' },
            ]}
          />
          <Select
            labelName="Sorting by"
            defaultValue="relevance"
            name="orderBy"
            onChange={handleSelectSortBy}
            options={[
              { value: 'relevance', name: 'relevance' },
              { value: 'newest', name: 'newest' },
            ]}
          />
        </div>
      </form>
    </header>
  );
};

export default Header;
