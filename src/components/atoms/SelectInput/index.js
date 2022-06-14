import React from "react";

import PropTypes from 'prop-types';
import classname from 'classnames';

// material UI
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './styles.scss';

const SelectInput = ({
    className,
    value,
    onChange,
    options,
    label,
    helperText
}) => {
    const classNames = classname('a-select-input', className);
    return (
        <div className={classNames}>
            <TextField 
                select
                label={label}
                value={value}
                onChange={onChange}
                helperText={helperText}
            >
                {options.map((data) => (
                    <MenuItem 
                        key={data.value}
                        value={data.value}
                    >
                        {data.label}
                    </MenuItem>
                ))}

            </TextField>
        </div>
    )
}

SelectInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array,
    label: PropTypes.string,
    helperText: PropTypes.string
};

SelectInput.defaultProps = {
    className: '',
    value: '',
    onChange: () => {},
    options: [],
    label: '',
    helperText: ''
};

export default SelectInput;