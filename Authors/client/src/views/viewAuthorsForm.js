import React,{useState} from "react";
import AuthorsForm from "../components/form";
import {Link} from 'react-router-dom';

const CreateAuthors = (props) => {
    const [author, setAuthor] = useState([]);

    return(
        <>
            <AuthorsForm/>
        </>
        
    )
}
export default CreateAuthors;