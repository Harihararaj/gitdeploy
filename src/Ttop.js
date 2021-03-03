import React from 'react';

const Ttop=({a})=>{
	return(
		<div>
			<h1 className='i f1'>Enter the prefered laptop</h1>
			<input type='search'
			 placeholder="Enter the brandname" 
			 className="bg-green f2 ba" 
			 onChange={a}
			 />
		</div>
		);
}
export default Ttop;