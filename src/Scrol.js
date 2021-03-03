import React from 'react';

const Scrol=(props)=>{
	return(
		<div style={{overflowY:'scroll' ,height:'800px', border:'10px black solid'}}>
			{props.children}
		</div>
		);
};

export default Scrol;