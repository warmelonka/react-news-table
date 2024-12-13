import { useState } from 'react';
import { GridColDef, GridRowParams } from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import Table from '../../UI/Table/Table.tsx';
import { NewsType } from '../../../types';
import { news } from './mockData.ts';
import Button from '../../UI/Button/Button.tsx';
import styles from './tableNews.module.css';

const columns: GridColDef<NewsType>[] = [
  {
    field: 'time',
    headerName: 'Время',
    minWidth: 325,
    sortable: false,
  },
  {
    field: 'headline',
    headerName: 'Заголовок',
    flex: 1,
    sortable: false,
  },
];

function TableNews() {
  const [selectedNews, setSelectedNews] = useState<null | NewsType>(null);

  const handleRowClick = (params: GridRowParams) => {
    setSelectedNews(params.row);
  };

  const handleClose = () => {
    setSelectedNews(null);
  };

  return (
    <div>
      <Table rows={news} columns={columns} onClick={handleRowClick} />

      {selectedNews && (
        <Modal
          open={Boolean(selectedNews)}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className={styles.tableNews_modal}>
            <div className={styles.tableNews_head}>
              <span className={styles.tableNews_time}>{selectedNews.time}</span>

              <Button className={styles.tableNews_close} onClick={handleClose}>
                Закрыть
              </Button>
            </div>

            <h2 id="modal-title" className={styles.tableNews_title}>
              {selectedNews.headline}
            </h2>

            <p id="modal-description" className={styles.tableNews_description}>
              {selectedNews.description}
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default TableNews;
