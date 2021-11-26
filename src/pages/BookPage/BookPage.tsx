import React, { FC, useEffect } from 'react';
import { useGetBookQuery } from '../../api/fetchData';
import Spinner from '../../shared/Spinner';
import Card from '../../components/Card';
import { setIsFetching } from '../../redux/reducer';
import { useAppDispatch } from '../../redux/hooks';

interface BookPageProps {
  id: string;
}

const BookPage: FC<BookPageProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const { isFetching, error, data } = useGetBookQuery({
    id,
  });

  useEffect(() => {
    dispatch(setIsFetching(isFetching));
  }, [isFetching]);

  return (
    <main style={{ padding: '10px' }}>
      {error && <div style={{ textAlign: 'center' }}>Error: {error}</div>}
      {isFetching ? <Spinner size="80px" /> : <Card isPage id={id} {...data?.volumeInfo} />}
    </main>
  );
};

export default BookPage;
