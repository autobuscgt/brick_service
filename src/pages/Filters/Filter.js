import React from 'react';

function Filter({sizeOfOneDotFour,sizeOfOne}) {
    return (
        <div className='filter-container'>
                <input placeholder='1 НФ' type='radio'></input>
                <input placeholder='1.4 НФ' type='radio'></input>
        </div>
    );
}

export default Filter;