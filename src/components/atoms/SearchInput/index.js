// Search Input Component 
// --------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

// material UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './styles.scss';

const SearchInput = ({
    className,
    label,
    value,
    variant,
    onChange,
    onSearch
}) => {

    const classNames = classname('a-search-input', className);

    return (
        <div className={classNames}>
            <TextField 
                label={label} 
                variant={variant} 
                value={value} 
                onChange={onChange}
            />
            <Button variant="contained" onClick={onSearch}>Search</Button>
        </div>
    )
};

SearchInput.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    variant: PropTypes.string,
    onChange: PropTypes.func,
    onSearch: PropTypes.func
};

SearchInput.defaultProps = {
    classname: '',
    label: '',
    value: '',
    variant: '',
    onChange: () => {},
    onSearch: () => {}
};

export default SearchInput;