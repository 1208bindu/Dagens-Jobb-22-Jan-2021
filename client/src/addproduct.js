import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const AddNewProduct =() =>{

	
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  
				

	const handleSubmit =(e)=> {
		e.preventDefault();
		const addProd={uuid: uuidv4(),
			name: name,
			category:category,
			price:price }
		
		fetch('http://localhost:3001/addProduct', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
					},
			body: JSON.stringify(addProd),
		})
		.then( resp => console.log(resp) );
		setName('');
		setCategory('');
		setPrice(0);
	}

	

	
		return(
			<form onSubmit={handleSubmit}>
				<label>Product name
					<input name='name' type='text' value={name} onChange={ e => setName(e.target.value )} />
				</label> 
				<label>Category
					<input name='category' type='text' value={category} onChange={ e => setCategory( e.target.value )} />
				</label>
				<label>Price
					<input name='price' type='number' value={price} onChange={e => setPrice(e.target.value)} />
				</label><br/><br/>
				<button type='submit'>Create product</button>
			</form>
		);
	}

	export default AddNewProduct
