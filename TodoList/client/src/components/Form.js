import React, {useState} from "react";

const Form = (props) => {
    const{addTodo,setAddTodo} = props;
    const [todo, setTodo] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setAddTodo([...addTodo,{
            title:todo,
            id:Math.floor(Math.random()*1000).toString(),
            markComplete: false
        } ]);
        
    };
    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>TODO</label>
            <input
                type="text"  
                onChange={handleChange}  />
            <button>ADD</button>
        </form>
    );
}

export default Form ;