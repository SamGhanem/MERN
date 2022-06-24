import React, {useState} from "react";


function List(props){
    const {todo, setTodo} = props;
    const handMark = (task) =>{
        task.markComplete = !task.markComplete;
        setTodo([...todo]);
    }
    const styled = (markComplete) =>{
        // return (isMember ? '$2.00' : '$10.00');
        // Ternary operator:
        // if markComplete is True, (?) return True , else (:) return False
        // return( markComplete == True ? True : False  ) 

        if (markComplete ){
            return "completed"

        }else{
            return "notCompleted"
        }

    }
    const deleteTodo = (id) =>{
        setTodo(todo.filter((todo,i) =>  {
            return id !== i
        }
        ))
    }
    
    
    return(
        <div>
            {
            todo.map((todo,i) => (
                <div key={i}>
                    <p className={styled(todo.markComplete)}>{todo.title}</p>
                    <input type="checkbox" value={todo.markComplete} onChange={() => handMark(todo) }  />
                    {todo.markComplete ? 
                    <button onClick={() => deleteTodo(i) }>Delete</button>
                    : null
                }
                
                </div>
            )
    
    )
    }
        </div>
    )
}


export default List;
