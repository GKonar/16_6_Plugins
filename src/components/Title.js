import React from 'react';

const Title = props =>  //props zawsze dostajemy od parenta
	<div>
		<h1>{props.title}</h1> 
		<h2>{props.tasks}</h2>
	</div>

export default Title;