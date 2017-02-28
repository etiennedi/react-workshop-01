import React, { PropTypes } from 'react';

import FilterButton from './FilterButton';

const propTypes = {
    setFilter: PropTypes.func,
    currentFilter: PropTypes.string,
}

const FilterGroup = ({setFilter, currentFilter}) => (
    <div>
        <FilterButton
            onClick={() => setFilter('all')}
            active={currentFilter === 'all'}
        >
            Show all
        </FilterButton>
        <FilterButton
            onClick={() => setFilter('completed')}
            active={currentFilter === 'completed'}
        >
            Show completed
        </FilterButton>
        <FilterButton
            onClick={() => setFilter('open')}
            active={currentFilter === 'open'}
        >
            Show open
        </FilterButton>
    </div>

);

export default FilterGroup;
