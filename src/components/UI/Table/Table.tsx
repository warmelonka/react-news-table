import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridRowsProp,
} from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

const initialTableState = {
  pagination: { paginationModel: { page: 0, pageSize: 5 } },
};

const StyledDataGrid = styled(DataGrid)(() => ({
  '--DataGrid-containerBackground': '#141414',
  '--DataGrid-rowBorderColor': 'rgba(255, 255, 255, 0.1)',
  fontFamily: 'Noto Sans',
  border: 'none',
  color: 'white',
  '& .MuiDataGrid-columnSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeader': {
    pointerEvents: 'none',
    padding: '16px',
    fontSize: '16px',
  },
  '& .MuiDataGrid-cell': {
    padding: '0 16px',
  },
  '& .MuiDataGrid-cell:focus': {
    outline: 'none',
  },
  '& .MuiDataGrid-footerContainer': {
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  '& .MuiTablePagination-toolbar': {
    fontSize: '12px',
    color: 'white',
  },
  '& .MuiTablePagination-selectLabel': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiTablePagination-selectIcon': {
    fill: 'white',
  },
  '& .MuiIconButton-root.Mui-disabled ': {
    color: 'white',
  },
  '& .MuiDataGrid-row:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

interface Props {
  rows: GridRowsProp;
  columns: GridColDef[];
  onClick?: (params: GridRowParams) => void;
}

const pageSizeOptions = [5, 10];

function Table(props: Props) {
  const { rows, columns, onClick } = props;

  return (
    <StyledDataGrid
      rows={rows}
      columns={columns}
      onRowClick={onClick}
      initialState={initialTableState}
      pageSizeOptions={pageSizeOptions}
      disableRowSelectionOnClick
    />
  );
}

export default Table;
