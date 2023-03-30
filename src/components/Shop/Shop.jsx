import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";


const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const handleBtnAddToCard = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
	};
	return (
		<div className='shop-container'>
			<div className='products-container'>
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						handleBtnAddToCard={handleBtnAddToCard}
					></Product>
				))}
			</div>
			<div>
				<h2>Cart</h2>
				<p>Selected Cart: {cart.length}</p>
			</div>
		</div>
	);
};

export default Shop;
