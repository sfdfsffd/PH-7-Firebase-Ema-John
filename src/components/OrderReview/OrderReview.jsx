import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const OrderReview = () => {
	const products = useLoaderData();
	console.log(products);
	return (
		<div className='shop-container'>
			<div className='products-container'>Orders</div>
			<div className='cart-container'>
				<Cart cart={[]}></Cart>
			</div>
		</div>
	);
};

export default OrderReview;
