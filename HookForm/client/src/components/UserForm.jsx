import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setconfirmPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values

        const newUser = { 
            firstName: firstName,
            lastName:lastName,
            email: email, 
            password: password,
            confirmPassword: confirmPassword,
        };
        console.log("Welcome", newUser);
    };
    
    return(
    <div>
        
        <form onSubmit={createUser}>
            <div>
                {firstName.length > 0 && firstName.length < 2 ? (
                    <p style={{color: 'blue'}}>First name must be 2 characters long</p>
                ): null}
                <label>First name: </label> 
                <input type="text" onChange={ (e) => setfirstName(e.target.value) } />
            </div>
            <div>
            {lastName.length > 0 && lastName.length < 2 ? (
                    <p style={{color: 'blue'}}>last name must be 2 characters long</p>
                ): null}
                <label>Last name: </label> 
                <input type="text" onChange={ (e) => setlastName(e.target.value) } />
            </div>
            <div>
            {email.length > 0 && email.length < 5 ? (
                    <p style={{color: 'blue'}}>Email must be 5 characters long</p>
                ): null}
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
            {password.length > 0 && password.length < 8 ? (
                    <p style={{color: 'blue'}}>Password must be 8 characters long</p>
                ): null}
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
            {(confirmPassword.length > 0 && confirmPassword.length < 8)? (
                    <p style={{color: 'blue'}}>Confim Password must be 8 characters long</p>
                ): null}
                {confirmPassword !== password ? (
                    <p style={{color: 'red'}}>Passwords must match</p>
                ): null}
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        {/* <div>
            <h4>{firstName}</h4>
            <h4>{lastName}</h4>
            <h4>{email}</h4>
            <h4>{password}</h4>
            <h4>{confirmPassword}</h4>
        </div> */}
    </div>
    );
};
    
export default UserForm;
