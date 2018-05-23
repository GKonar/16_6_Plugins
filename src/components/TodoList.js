import React from 'react';

const TodoList = props => {
	const listItems = props.list.map(element => 
		<li key={element.id} onClick={() => props.removeLi(element.id)}>
			{element.text}
		</li>
		) 
	return (
		<ul>{listItems}</ul> 
	)
}

export default TodoList;