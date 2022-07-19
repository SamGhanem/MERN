import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';


const AuthorsForm = ({authorList, setAuthorList}) => {
    const [name, setName] = useState("");
    const navigator = useNavigate();
    //const [errors, setErrors] = useState(""); 
    const [errors, setErrors] = useState({}); 
    // {} = destructing and [ ] = is used for setting state!!!!


    const submitHandler =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/create",{
        name,
        
    })
    .then((res)=>{
        console.log("here")
        console.log(res);
        console.log(res.data.product);
        navigator("/")
    })
    .catch((err)=>{
        console.log(err)
        const errorResponse = err.response.data.error.errors.name.message;
        console.log(errorResponse )
        // const errorArr = [];
        // for (const key of Object.keys(errorResponse)) { 
        //     errorArr.push(errorResponse[key].name.message)
        // }
        
        //setErrors(errorResponse);
        setErrors({errorMsg: errorResponse});
        
    })
}
    return(
        <div>
            <h1>Fav Author</h1>
            <Link to={`/`}>GO HOME</Link>
            <header>NEW AUTHOR</header>
            <form onSubmit={submitHandler}>
            {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
            
            {errors.errorMsg && <p>{errors.errorMsg}</p>}
                <div>
                    <label>Name</label>
                    <input onChange={(e)=> setName(e.target.value)} value={name} name="name" type="text"/>
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    );
};

export default AuthorsForm;
