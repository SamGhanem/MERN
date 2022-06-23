import React from "react";
import Box from "./Box";

function List(props) {
    const {boxArray} = props;
    return(
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin:'30px 10px',
    }}

    >
    {boxArray.map((box,i) => (
        <Box key={i} box={box} />
    ))}
    </div>
    );
}


export default List;