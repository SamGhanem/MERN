import React from 'react';
    
const Person  = (props) => {
    const {firstName, lastName, hair, age } =props;
    return (
        <div>
            <h1>
                {firstName} {lastName}
            </h1>
            <h2>Age: {age}</h2>
            <h2>Hair color: {hair}</h2>
        </div>
    )
}
    
export default Person;

