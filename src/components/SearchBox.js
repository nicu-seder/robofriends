import React from "react";


const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                id="name"
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                aria-describedby="name-desc"
                placeholder='search robots'
                onChange={searchChange}/>
        </div>
    )
};

export default SearchBox;