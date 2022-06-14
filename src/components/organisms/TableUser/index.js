import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Pagination from '@mui/material/Pagination';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';

import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const TableUser = ({
  className,
  isLoading,
  listUser,
  onChangePaggination,
  dataTableHead,
  onClickSort
})=> {

  const classNames = classname('o-table-user', className);
  return (
    <div className={classNames}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {dataTableHead.map((data, i) => 
                <TableCell key={i}>
                  <TableSortLabel
                    active={data.isActive}
                    direction={data.orderBy}
                    onClick={() => onClickSort(i)}
                    >
                    {data.label}
                    <Box component="span" sx={visuallyHidden}>
                      sorted descending
                    </Box>
                  </TableSortLabel>
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <>
                {Array(10).fill("").map((data, i) => (
                   <TableRow
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Skeleton variant="text" />
                    </TableCell>
                    <TableCell><Skeleton variant="text" /></TableCell>
                    <TableCell><Skeleton variant="text" /></TableCell>
                    <TableCell><Skeleton variant="text" /></TableCell>
                    <TableCell><Skeleton variant="text" /></TableCell>
                  </TableRow>
                ))}
              </>
              
            ) : (
              <>
                {listUser.map((data, i) => (
                  <TableRow
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {data.login.username}
                    </TableCell>
                    <TableCell>{data.name.first} {data.name.last}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.gender}</TableCell>
                    <TableCell>{data.registered.date}</TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={100} color="primary" onChange={onChangePaggination}/>
    </div>
  );
};

TableUser.propsTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  listUser: PropTypes.array,
  onChangePaggination: PropTypes.func,
  dataTableHead: PropTypes.array,
  onClickSort: PropTypes.func
};

TableUser.defaultProps = {
  className: '',
  isLoading: false,
  listUser: [],
  onChangePaggination: () => {},
  dataTableHead: [],
  onClickSort: () => {}
};

export default TableUser;