import React, {useState} from "react";
import AuthorList from "../components/authorList";
import AuthorsForm from "../components/form";



const Home = (props) =>{
    const [authorList, setAuthorList] = useState([]);
    const removeFromDom = id => {
        setAuthorList(authorList.filter(authorList => authorList._id !== id));
    }
    return(
        <>
        {/* <AuthorsForm authorList={authorList} setAuthorList={setAuthorList} /> */}
        <AuthorList authorList={authorList} setAuthorList={setAuthorList} removeFromDom={removeFromDom}/>
        </>
    )
}

export default Home;