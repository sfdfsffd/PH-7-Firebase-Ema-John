import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
	const { id, name, img, price, quantity } = product;
	return (
		<div className='Item'>
			<img src={img} alt='' />
		</div>
	);
};

export default ReviewItem;
