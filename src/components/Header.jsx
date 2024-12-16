import { useState } from 'react';

export const Header = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
	const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(item => item.id !== product.id);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	// Función para redirigir a otras páginas
	const handleNavigation = (path) => {
		window.location.href = path; // Cambia la URL a la página deseada
	};

	return (
		<header>
			{/* Barra de Navegación */}
			<nav
				style={{
					backgroundColor: '#f1f1f1',
					padding: '10px',
					marginBottom: '20px',
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
				<button
					style={{
						border: 'none',
						backgroundColor: '#1e3c72',
						color: 'white',
						padding: '10px 20px',
						borderRadius: '5px',
						cursor: 'pointer',
					}}
					onClick={() => handleNavigation('home.html')}
				>
					Home
				</button>
				<button
					style={{
						border: 'none',
						backgroundColor: '#2a5298',
						color: 'white',
						padding: '10px 20px',
						borderRadius: '5px',
						cursor: 'pointer',
					}}
					onClick={() => handleNavigation('/products.html')}
				>
					Productos
				</button>
				<button
					style={{
						border: 'none',
						backgroundColor: '#7a297a',
						color: 'white',
						padding: '10px 20px',
						borderRadius: '5px',
						cursor: 'pointer',
					}}
					onClick={() => handleNavigation('/contact.html')}
				>
					Contactos
				</button>
				{/* Botón adicional: About Us */}
				<button
					style={{
						border: 'none',
						backgroundColor: '#d9534f',
						color: 'white',
						padding: '10px 20px',
						borderRadius: '5px',
						cursor: 'pointer',
					}}
					onClick={() => handleNavigation('/about.html')}
				>
					acerca de nosotros
				</button>
				{/* Botón adicional: FAQs */}
				<button
					style={{
						border: 'none',
						backgroundColor: '#5cb85c',
						color: 'white',
						padding: '10px 20px',
						borderRadius: '5px',
						cursor: 'pointer',
					}}
					onClick={() => handleNavigation('/faqs.html')}
				>
					sugerencias
				</button>
			</nav>

			{/* Título */}
			<div id="tit">
				<h1>Artículos disponibles</h1>
			</div>

			{/* Icono del carrito */}
			<div className="container-icon">
				<div
					className="container-cart-icon"
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="icon-cart"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
						/>
					</svg>
					<div className="count-products">
						<span id="contador-productos">{countProducts}</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{allProducts.length ? (
						<>
							<div className="row-product">
								{allProducts.map(product => (
									<div className="cart-product" key={product.id}>
										<div className="info-cart-product">
											<span className="cantidad-producto-carrito">
												{product.quantity}
											</span>
											<p className="titulo-producto-carrito">
												{product.nameProduct}
											</p>
											<span className="precio-producto-carrito">
												${product.price}
											</span>
										</div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="icon-close"
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</div>
								))}
							</div>

							<div className="cart-total">
								<h3>Total:</h3>
								<span className="total-pagar">${total}</span>
							</div>

							<button className="btn-clear-all" onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className="cart-empty">El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
	);
};
