import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderReview.css";

const OrderReview = () => {
	const cart = useLoaderData();
	console.log(cart);
	return (
		<div className='shop-container'>
			<div className='review-container'>
				{cart.map((product) => (
					<ReviewItem key={product.id} product={product} />
				))}
			</div>
			<div className='cart-container'>
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default OrderReview;
