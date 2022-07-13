import React, {useState} from "react";
import axios from "axios";

const Product = ({productList, setProductList}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    // {} = destructing and [ ] = is used for setting state!!!!


    const submitHandler =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/product",{
        title,
        price,
        description,
        
    })
    .then((res)=>{
        console.log("here")
        console.log(res);
        console.log(res.data.product);
        setTitle("");
        setPrice("");
        setDescription("");
        setProductList([ ...productList,res.data.product])
    })
    .catch((err)=>{
        console.log(err)
    })
}
    return(
        <div>
            <header>Product Manager</header>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input onChange={(e)=> setTitle(e.target.value)} value={title} name="title" type="text"/>
                </div>
                <div>
                    <label>Price</label>
                    <input onChange={(e)=> setPrice(e.target.value)} value={price} name="price" type="text"/>
                </div>
                <div>
                    <label>Description</label>
                    <input onChange={(e)=> setDescription(e.target.value)} value={description} name="description" type="text"/>
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    );
};

export default Product;

