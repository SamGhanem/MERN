import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    // const createUser = (e) => {
    //     // we must prevent the default refresh of the browser to keep our state from being reset
    //     e.preventDefault();
    
        // create a javascript object to hold all of the values
    //     const newUser = { 
    //         firstName: firstName,
    //         lastName:lastName,
    //         email: email, 
    //         password: password,
    //     };
    //     console.log("Welcome", newUser);
    // };
    
    return(
    <div>
        
        <form>
            <div>
                <label>First name: </label> 
                <input type="text" onChange={ (e) => setfirstName(e.target.value) } />
            </div>
            <div>
                <label>Last name: </label> 
                <input type="text" onChange={ (e) => setlastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div>
            <h4>{firstName}</h4>
            <h4>{lastName}</h4>
            <h4>{email}</h4>
            <h4>{password}</h4>
            <h4>{password}</h4>
        </div>
    </div>
    );
};
    
export default UserForm;
