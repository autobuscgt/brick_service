
function FilterButtons({ onFilterChange }) {
  return (
    <div className='filter-container'>
      <button onClick={() => onFilterChange('all')}>Все</button>
      <button onClick={() => onFilterChange('1 НФ')}>1 НФ</button>
      <button onClick={() => onFilterChange('1.4 НФ')}>1.4 НФ</button>
    </div>
  );
}

export default FilterButtons;