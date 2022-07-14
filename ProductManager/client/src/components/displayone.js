import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
const DisplayOne = (props) => {
    const navigator = useNavigate();
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
const deleteProduct = (id) => 
axios.delete('http://localhost:8000/api/product/' + id)
.then(res => {
    navigator("/")
    })

.catch(err => console.log(err))
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data.product);
            })
            .catch( err => console.log(err) )
    }, [])


    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
        </div>
    )
}




export default DisplayOne;