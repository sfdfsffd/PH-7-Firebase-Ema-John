import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const OrderReview = () => {
	const cart = useLoaderData();
	console.log(cart);
	return (
		<div className='shop-container'>
			<div className='products-container'>Orders {cart.length}</div>
			<div className='cart-container'>
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default OrderReview;
