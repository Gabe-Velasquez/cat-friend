import React from "react";

//setting up card template for all users
const Card = ({name, email, id}) => {
    return(
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-4'>
            <img 
            src= {`https://robohash.org/${id}?set=set4?size=200x200`}
            alt='cat' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;