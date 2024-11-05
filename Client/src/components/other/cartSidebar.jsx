import { useFetchCartById } from "@/hooks/cart";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const CartSheetContent = () => {
    const { data, error, isLoading, isSuccess } = useFetchCartById();
    const [cart, setCart] = useState();

    useEffect(() => {
        if (isSuccess) {
            setCart({
                buyerId: data.foundCart.BuyerId,
                Products: data.foundCart.Products,
                TotalPrice: data.foundCart.TotalPrice
            });

            console.log(data);
        }
    }, [isSuccess, data]);
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {isSuccess && cart && (
                <div>
                    <h3 className="mb-4">Products:</h3>
                    {cart.Products.length > 0 ? (
                        <>
                            <ul className="ml-2">
                                {cart.Products.map((product, index) => (
                                    <li key={index} className="flex items-center mb-3">
                                        <img 
                                            src={product.ImageUrl} 
                                            alt={product.ProductName} 
                                            className="w-16 h-16 object-cover mr-4" 
                                        />
                                        <div>
                                            <strong className="block">{product.ProductName}</strong>
                                            <span className="block">Quantity: {product.Quantity}</span>
                                            <span className="block">Price: P{product.Price}</span>
                                        </div>
                                    </li>
                                    
                                ))}
                            </ul>

                            <hr/>
                            <div className="p-5">
                                <strong>Total Price: {cart.TotalPrice}</strong>
                            </div>
                            <hr/>
                            <Button className="mt-5">Checkout</Button>
                        </>
                    ) : (
                        <p>No products in the cart.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default CartSheetContent;
