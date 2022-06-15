import React from 'react';
    
const Person  = (props) => {
    const {firstName, lastName, hair, age } =props;
    return (
        <div>
            <h1>
                {firstName} {lastName}
            </h1>
            <h4>Age: {age}</h4>
            <h4>Hair color: {hair}</h4>
        </div>
    )
}
    
export default Person;

