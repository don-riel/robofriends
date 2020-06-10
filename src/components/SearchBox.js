import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robot' 
            onChange={searchChange} //runs the function if there is a change in input
            />
            
        </div>
        
    )
}

export default SearchBox;