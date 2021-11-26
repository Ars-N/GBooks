import React, { FC, useCallback } from 'react';
import './BooksList.scss';
import { QueryResponseBooks } from '../../api/types';
import Card from '../Card';
import { increaseCountBooksOnPage } from '../../redux/reducer';
import { useAppDispatch } from '../../redux/hooks';

const BooksList: FC<QueryResponseBooks> = ({ totalItems, items }) => {
  const dispatch = useAppDispatch();

  const handleButtonClick = useCallback(() => {
    dispatch(increaseCountBooksOnPage());
  }, []);

  return (
    <div className="books-list__wrapper">
      <h4 className="books-count">Found {totalItems} results</h4>

      <div className="books-list">
        {items.map(({ id, volumeInfo }) => {
          return <Card key={id} id={id} {...volumeInfo} />;
        })}
      </div>

      <button onClick={handleButtonClick} className="button__load-more" type="button">
        Load more
      </button>
    </div>
  );
};

export default React.memo(BooksList);
