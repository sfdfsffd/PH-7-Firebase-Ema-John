const cartProductsLoader = async () => {
	const loadedProducts = await fetch("products.json");
	const products = await loadedProducts.json();
	return products;
};

export default cartProductsLoader;
