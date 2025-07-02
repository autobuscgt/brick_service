import { useState } from 'react';
import FilterButtons from './FilterButtons';

function Filter({ filtered, children }) {
  const [filteredData, setFilteredData] = useState(filtered);

  const filterByType = (type) => {
    if (type === 'all') {
      setFilteredData(filtered);
    } else {
      const newData = filtered.filter(item => item.type === type);
      setFilteredData(newData);
    }
  };

  return (
    <>
      <FilterButtons onFilterChange={filterByType} />
      {children(filteredData)}
    </>
  );
}

export default Filter;