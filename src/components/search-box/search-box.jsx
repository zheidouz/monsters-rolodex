// @flow
import * as React from 'react';
import './search-box.css';

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <div>
            <input
                className='search'
                type="search"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    );
};