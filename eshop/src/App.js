import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {commerce} from "./lib/commerce";
import {Products, Navbar, Cart, Checkout} from "./components";
//import { commerce } from "@chec/commerce.js";


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleAddToCart = async (productId, quantity) => {
        await commerce.cart.add(productId, quantity);
        const cartData = await commerce.cart.retrieve();
        setCart(cartData);
      };

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await commerce.products.list();
            setProducts(data);
        };

        const fetchCart = async () => {
            setCart(await commerce.cart.retrieve());
        };

       

        fetchProducts();
        fetchCart();
    }, []);


    const handleUpdateCartQty = async (productId, quantity) => {
        const cart = await commerce.cart.update(productId, {quantity});
        setCart(cart);
    };

    const handleRemoveFromCart = async (productId) => {
        const cart = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const cart = await commerce.cart.empty();

        setCart(cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
    
        setCart(newCart);
      };
    
    
    
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    
          setOrder(incomingOrder);
    
          refreshCart();
        } catch (error) {
          setErrorMessage(error.data.error.message);
        }
      };



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
                    <Route exact path="/cart" element={<Cart
                            cart={cart}
                            onUpdateCartQty={handleUpdateCartQty} 
                            onRemoveFromCart={handleRemoveFromCart} 
                            onEmptyCart={handleEmptyCart}/> } />
                    <Route exact path="/checkout" element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>}/>
                    
                </Routes>
            </div>
        </Router>
    );
};

export default App;
