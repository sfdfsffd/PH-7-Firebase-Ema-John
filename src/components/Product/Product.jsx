import React from "react";
import "./Product.css";

const Product = (props) => {
	const { img, name, seller, price, quantity, ratings, id } = props.product;

const handleBtnAddToCard = props.handleBtnAddToCard
	return (
		<div className='product'>
			<div className='details'>
				<img src={img} alt='' />

				<h6 className='product-name'>{name}</h6>
				<h4 className='product-price'>Price: ${price}</h4>
				<p className='seller-info'>Manufacturers: {seller}</p>
				<p className='seller-info'>Ratings: {ratings} star</p>
			</div>
			<button className='btn-cart' onClick={() => handleBtnAddToCard(id)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
