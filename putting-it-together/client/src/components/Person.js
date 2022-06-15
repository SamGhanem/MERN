import React, { useState } from 'react';


    
const Person  = (props) => {
    const {firstName, lastName, hair, age } =props;
    const  [state, setState ] = useState({
        clickCount: age
    });
    const handleClick = () => {
        setState({
            clickCount: state.clickCount + 1
        });
    }



    return (
        <div>
            <h1>
                {firstName} {lastName}
            </h1>
            <h4>Age: {state.clickCount}</h4>
            <h4>Hair color: {hair}</h4>
            <button onClick={handleClick}>ADD A YEAR</button>
        </div>
    )
}
    
export default Person;