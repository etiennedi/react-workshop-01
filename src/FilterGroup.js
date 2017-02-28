//@flow

import React, { PropTypes } from 'react';

import FilterButton from './FilterButton';

type Props = {
    setFilter: Function,
    currentFilter: string,
}

const FilterGroup = ({setFilter, currentFilter} : Props) => (
    <div className="filter-group">
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
