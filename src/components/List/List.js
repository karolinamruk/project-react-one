import styles from './List.module.scss';
import Column from '../Column/Column.js';
// import { useState } from 'react';
import ColumnForm from '../ColumnForm/ColumnForm';
// import shortid from 'shortid';
import { useSelector } from 'react-redux';
// import { getAllColumns } from '../../redux/store';
import { getListById, getColumnsByList } from '../../redux/store';
import { useParams, Navigate } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';

const List = () => {
  const { listId } = useParams();
  const listData = useSelector((state) => getListById(state, listId));
  const columns = useSelector((state) => getColumnsByList(state, listId));

  if (!listData) return <Navigate to="/" />;

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData ? listData.title : ''}</h2>
      </header>
      <p className={styles.description}>
        {listData ? listData.description : ''}
      </p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
