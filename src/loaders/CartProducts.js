import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
	const loadedProducts = await fetch("products.json");
	const products = await loadedProducts.json();

	const storedCart = getShoppingCart();
	let savedCart = [];
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
	return savedCart;
};

export default cartProductsLoader;
