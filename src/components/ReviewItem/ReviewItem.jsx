import React from "react";
import "./ReviewItem.css";
import { BeakerIcon, TrashIcon } from "@heroicons/react/24/solid";

const ReviewItem = ({ product, handleToDelete }) => {
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
			<button className='btn-delete' onClick={() => handleToDelete(id)}>
				<TrashIcon className=' btn-icon text-white' />
			</button>
		</div>
	);
};

export default ReviewItem;
