import React, { Component } from 'react';

function ListItem(props) {
    return <li>{props.value}</li>;
}


function NumberList(props) {
    let items = props.numbers.map(n => (
        <ListItem key={n.toString()} value={n}/>
    ));
    return (<ul>{items}</ul>);
}

class List extends Component {
    render() {
        return (<NumberList numbers={[1, 2, 3, 4, 5]}/>)
    }
}

export default List;