import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
	const { id, name, img, price, quantity } = product;
	return (
		<div className='Item'>
			<img src={img} alt='' />
			<div className='review-details'>
				<p>{name}</p>
				<p>
					Price: <span className='text-orange'>${price}</span>
				</p>
				<p>
					Order Quantity: <span className='text-orange'>{quantity}</span>
				</p>
			</div>
			<button className='btn-delete'>Del</button>
		</div>
	);
};

export default ReviewItem;
