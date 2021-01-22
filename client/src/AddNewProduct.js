import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import './index.css';

const AddNewProduct =() =>{

	
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  
				

	const handleSubmit =(e)=> {
		e.preventDefault();
		const addProd={id: uuidv4(),
			name: name,
			category:category,
			price:price }

			const config={
				headers: {
					
					accept: 'application/json',
				  },
				  data: {},
				};

			axios.post('http://localhost:3001/addProduct', addProd,config)
    		.then(response => {
    				  // console.log(response);
   			 });
					
		setName('');
		setCategory('');
		setPrice(0);
		alert("The product has been added successfully")
	}
	
	

	
		return(
			<div className="container mainForm">
			
				<div className="card blue-grey lighten-4">
            <form onSubmit={handleSubmit} className="formM" >
                <h4 className="grey-text text-darken-3">Add a Product</h4>
                <div >
		
				 <div className="input-field ">
				<label >Product name</label>
					<input name='name' type='text' value={name} onChange={ e => setName(e.target.value )} />
				
				</div>
				<div className="input-field">
				<label className="label">Category</label>
					<input name='category' type='text' value={category} onChange={ e => setCategory( e.target.value )} />
				
				</div>
				<div className="input-field">
				<label className="label">Price</label>
					<input name='price' type='number' value={price} onChange={e => setPrice(e.target.value)} />
				
				</div>
				<div className="center">
				<button type='submit'>Create product</button>
				</div>
				</div>
			</form>
			</div>
			</div>
			
			
		);
	}

	export default AddNewProduct
