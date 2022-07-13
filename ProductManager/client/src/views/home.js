import React, {useState} from "react";
import Product from '../components/form';
import ProductList  from '../components/productList'


const Home = (props) =>{
    const [productList, setProductList] = useState([]);
    return(
        <>
        <Product productList={productList} setProductList={setProductList} />
        <ProductList productList={productList} setProductList={setProductList}/>
        </>
    )
}

export default Home;