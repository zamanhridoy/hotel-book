import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Book = () => {
    const {bedType} = useParams();
    console.log(bedType);
    return (
        <div style={{textAlign:'center'}}>
            <h1>Youre Booking <span style={{color:'tomato'}}>{bedType}</span> Room</h1>
            <p>Change in Mind? <Link to='/home'> Select Other Option</Link></p>
        </div>
    );
};

export default Book;