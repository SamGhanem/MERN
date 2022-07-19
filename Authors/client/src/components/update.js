import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const [name, setName] = useState('');
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.authors.name);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct= (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name,    // this is shortcut syntax for firstName: firstName,,// this is shortcut syntax for lastName: lastName
        })
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch(err => setErrors(err.response.data.error.errors.name.message))
    }
    return (
        <div>
            <h1>Update an Author</h1>
            <Link to={`/`}>GO HOME</Link>
            <form onSubmit={updateProduct}>
            {errors && <p>{errors}</p>}
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;