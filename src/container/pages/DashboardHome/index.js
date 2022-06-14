/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import classname from 'classnames';

import { SearchInput, SelectInput, TableUser } from '../../../components';
import Button from '@mui/material/Button';

// constant
import { dataGender , tableHead } from '../DashboardHome/thisComponents'

// API
import { getUser } from '../../../services';

// style
import './styles.scss';

const  DashboardHome = () =>  {
    const classNames = classname('p-dashboard', 'container');

    const [valueSearch, setValueSearch] = useState('');
    const [valueSelect, setValueSelect] = useState('all');
    const [listUser, setListUser] = useState([]);
    const [isLoadData, setIsLoadData] = useState(false);
    const [page, setPage] = useState(1);
    const [dataHead, setDataHead] = useState(tableHead);
    const [menuSorting, setMenuSorting] = useState('');
    const [orderBy, setOrderBy] = useState('');

    const getUrl = () => {
        return `?page=${page}&results=10${valueSelect !== 'all' ? `&gender=${valueSelect}` : ''}${valueSearch !== '' ? `&keyword=${valueSearch}` : ''}${menuSorting !== '' ? `&sortBy=${menuSorting}` : ''}${orderBy !== '' ? `&sortOrder=${orderBy}` : ''}`
    }

    useEffect(() => {
        getListUser();
    }, [valueSelect, page, menuSorting, orderBy])

    const getListUser = () => {
        setIsLoadData(true);
        getUser(getUrl()).then(res => {
            setListUser(res.data.results);
            setIsLoadData(false);
        }).catch((error) => {
            alert('Terjadi Kesalahan', error)
        });
    };
    
    const handleChangeSearch = (e) => {
        setValueSearch(e.target.value);
    };

    const handleSearch = () => {
        getListUser();
    };

    const handleSelect = (e) => {
        setValueSelect(e.target.value);
    };

    const handleReset = () => {
        setValueSelect('all');
        setValueSearch('');
    };

    const handleChangePaggination = (e, page) => {
        setPage(page);
    }
    
      
    const handleSort = (index) => {
        tableHead[index].isActive = true;
        setMenuSorting(tableHead[index].id);
        setOrderBy('ascend');

        if (menuSorting === dataHead[index].id) {
            if(dataHead[index].orderBy === 'asc') {
                tableHead[index].orderBy = 'desc'
                setOrderBy('descend');
            } else {
                tableHead[index].orderBy = 'asc';
                setOrderBy('ascend');
            }

        }

        setDataHead(tableHead);
    }

    return (
        <div className={classNames}>
            <div className={'p-dashboard__header'}>
                <SearchInput
                    className={'search-user'}
                    variant={'outlined'}
                    label={'Search'}
                    onChange={handleChangeSearch}
                    onSearch={handleSearch}
                    value={valueSearch}
                />
                
                <SelectInput
                    className={'select-user'}
                    value={valueSelect}
                    onChange={handleSelect}
                    options={dataGender}
                />

                <Button 
                    variant='outlined' 
                    onClick={handleReset} 
                    style={{marginLeft: 10}}
                >
                    Reset Filter
                </Button>

            </div>

            <TableUser 
                className={'table'}
                isLoading={isLoadData}
                listUser={listUser}
                onChangePaggination={handleChangePaggination}
                dataTableHead={dataHead}
                onClickSort={(index) => handleSort(index)}
            />
        </div>
        
    );
};

export default DashboardHome;