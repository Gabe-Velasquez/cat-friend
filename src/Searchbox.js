import React from "react";

const  Searchbox= ({searchfield, searchChange}) => {
    return(
        <div className="pa2">
            <input
                className="pa3 ba b--blue bg-lightest-green"
                type='search'
                placeholder="Search Kitty Cats"
                onChange={searchChange} />
        </div>
    );
}

export default Searchbox;