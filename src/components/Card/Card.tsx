import React, { FC, useEffect } from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import { BookInfo } from '../../api/types';

interface CardProps extends BookInfo {
  isPage?: boolean;
  id: string;
}

const Card: FC<CardProps> = ({
  isPage = false,
  id,
  title,
  imageLinks,
  categories,
  authors,
  description,
}) => {
  useEffect(() => {
    const root = document.getElementById('description');
    root?.insertAdjacentHTML('beforeend', description as string);
  }, []);

  return isPage ? (
    <div className="page-book flex-center">
      <figure className="page-book_img__wrapper flex-center">
        <img
          className="page-book_img"
          src={imageLinks?.thumbnail || imageLinks?.smallThumbnail}
          alt="img"
        />
      </figure>
      <div className="book-data__wrapper">
        <h3 className="card-book_categories">{categories?.join(', ')}</h3>
        <h2 className="card-book_title">{title}</h2>
        <h3 className="card-book_authors">{authors?.join(', ')}</h3>
        {description && <section id="description" className="card-book_description" />}
      </div>
    </div>
  ) : (
    <Link to={`/details/${id}`} className="card-book">
      <figure className="card-book_img__wrapper">
        <img
          className="card-book_img"
          src={imageLinks?.thumbnail || imageLinks?.smallThumbnail}
          alt="img"
        />
      </figure>
      <h3 className="card-book_categories">{categories ? categories[0] : ''}</h3>
      <h2 className="card-book_title">{title}</h2>
      <h3 className="card-book_authors">{authors?.join(', ')}</h3>
    </Link>
  );
};

export default React.memo(Card);
