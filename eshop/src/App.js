import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {commerce} from "./lib/commerce";
import {Products, Navbar, Cart} from "./components";

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const handleAddToCart = async (productId, quantity) => {
        commerce.cart.add(productId, quantity).then((item) => {
            if (item) {
                setCart(item.cart);
            }
        });
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await commerce.products.list();
            setProducts(data);
        };

        const fetchCart = async () => {
            commerce.cart.retrieve().then((cart) => {
                if (cart) {
                    setCart(cart)
                }
            });
        };

        fetchProducts();
        fetchCart();
    }, []);

    return (
        <Router>
            <div>
                <Navbar totalItems={cart?.total_items ?? 0}/>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Products products={products} onAddToCart={handleAddToCart}/>}
                    />
                    <Route exact path="/cart" element={<Cart cart={cart}/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
