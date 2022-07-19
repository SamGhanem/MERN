import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const AuthorList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {authorList, setAuthorList, removeFromDom } = props
    //{} = destructing and [ ] = is used for setting state!!!!
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/authors")
    	.then((res)=>{
	    console.log(res.data);
        console.log("this is a check zone ", res.data.authors);
        setAuthorList(res.data.authors);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [setAuthorList]);

    const deleteAuthors = (_id) => 
axios.delete('http://localhost:8000/api/authors/' + _id)
.then(res => {
    removeFromDom(_id)
    })

.catch(err => console.log(err))
    
    return (
        <div>
            <Link to={`/authors/create`}>Add New Author</Link>
            <table class="table table-bordered border-primary">
                <tr>
                    <th>
                        Author
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
                <tbody>{
                authorList.map((author, index)=>{
                return <tr>
                <Link key={index} to={`/authors/${author._id}`}>
                    <td> {author.name}</td>
                    
                </Link>
                <td>
                <Link to={`/authors/update/${author._id}`}>Update</Link>
                <button onClick={(e) =>deleteAuthors (author._id)}>Delete</button>
                </td>
                </tr>
                })
            }
                </tbody>
            </table>
        </div>
    )
}
export default AuthorList;