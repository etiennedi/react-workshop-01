import React, { PropTypes } from 'react';

const propTypes = {
    onClick: PropTypes.func,
    chidlren: PropTypes.node,
    active: PropTypes.bool,
}

const FilterButton = ({onClick, children, active}) => (
    <button
        onClick={onClick}
        className={active && 'filter-active'}
    >
        {children}
    </button>
);

export default FilterButton;
