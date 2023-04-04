import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	useEffect(() => {
		const storedCart = getShoppingCart();
		let savedCart = [];
		// Step 1: get id
		for (const id in storedCart) {
			// Step 2: get the product using id
			const addedProducts = products.find((product) => product.id === id);
			if (addedProducts) {
				// Step 3: get quantity of the product
				const quantity = storedCart[id];
				addedProducts.quantity = quantity;
				// Step 4. Add the added product to the saved cart
				savedCart.push(addedProducts);
			}
		}
		// Step 5 : set the cart
		setCart(savedCart);
	}, [products]);

	const handleBtnAddToCard = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
		addToDb(product.id);
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
			<div className='cart-container'>
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
