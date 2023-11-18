import { useState } from "react";

function ListGroup() {
    let items = [
        'New York',
        'Vancouver',
        'Toronto',
        'Sofia',
        'London'
    ];

    // hook function: allows to tap into built in features in react
    // using the state hook we can tell react that this component will
    // have data or a state change over time
    
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => <li 
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
                key={item} 
                onClick={() => {setSelectedIndex(index)}}>
                    {item}
                </li>)}
            </ul>
        </>
    );
}

export default ListGroup;
