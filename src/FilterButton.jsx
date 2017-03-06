// @flow

import React from 'react';

type Props = {
    onClick: Function,
    children?: any, // eslint-disable-line react/require-default-props
    // issue in flow: https://github.com/facebook/flow/issues/1964
    active: boolean,
}

const FilterButton = ({ onClick, children, active } : Props) => (
  <button
    onClick={onClick}
    className={active && 'filter-active'}
  >
    {children}
  </button>
);

export default FilterButton;
