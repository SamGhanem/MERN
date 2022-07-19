import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
import Author from './form';


const DisplayOne = (props) => {
    const navigator = useNavigate();
    const [authors, setAuthor] = useState({})
    const {id} = useParams(); 
const deleteAuthor = (id) => 
axios.delete('http://localhost:8000/api/authors/' + id)
.then(res => {
    navigator("/")
    })

.catch(err => console.log(err))
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then( res => {
                console.log(res.data);
                setAuthor(res.data.authors);
            })
            .catch( err => console.log(err) )
    }, [])


    
    return (
        <div>
            <Link to={`/`}>GO HOME</Link>
            <p>Name: {authors.name}</p>
            <button onClick={(e) => deleteAuthor(authors.id)}>Delete</button>
        </div>
    )
}




export default DisplayOne;