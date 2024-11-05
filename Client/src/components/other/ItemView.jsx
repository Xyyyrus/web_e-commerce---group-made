import { useNavigate, useParams } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import BackIcon from '../../assets/icons/back.png';
import { toast } from "@/hooks/use-toast";
import ConfirmAddToCart from "./cartConfirmation";
import { useAddToCart } from "@/hooks/cart";

const ItemView = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState([]);
    const [quantity, setQuantity] = useState(1); // New state for quantity
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const { mutate } = useAddToCart();

    const FeaturedCardsData = [
        { id: 1, name: "Sample Item 1", price: "P 100.00", sellerName: 'Seller Name', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', imageUrl: "https://via.placeholder.com/400x300" },
        { id: 2, name: "Sample Item 2", price: "P 200.00", sellerName: 'Seller Name', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', imageUrl: "https://via.placeholder.com/400x300" },
        { id: 3, name: "Sample Item 3", price: "P 350.00", sellerName: 'Seller Name', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', imageUrl: "https://via.placeholder.com/400x300" },
    ];

    useEffect(() => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);

        // Find the item in FeaturedCardsData based on the id from the URL
        const foundItem = FeaturedCardsData.find(item => item.id === parseInt(id));
        setSelectedItem(foundItem);
    }, [id]);

    const handleBack = () => {
        navigate(-1);
    };

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAdd = () => {
        if (!selectedItem) {
            console.error("No item selected");
            return;
          }
        
          // Prepare the item data to be added to the cart
          const itemData = {
            ProductName: selectedItem.name,
            Details: selectedItem.details,
            Quantity: quantity,
            Price: parseFloat(selectedItem.price.replace(/[^0-9.-]+/g, "")), // Convert price to a number
            ImageUrl: selectedItem.imageUrl,
            SellerName: selectedItem.sellerName,
          };
        
          mutate(
            { itemData },
              {
                  onSuccess:  () => {
                      toast({
                          variant: 'success',
                          title: "Added to Cart Successful",
                          description: "You have successfully Added a new product in your cart!",
                      });
      
                      
                
                     
                  },
                  onError: (error) => {
                      toast({
                          variant: 'failed',
                          title: "Add to cart Failed",
                          description: error.response?.data?.message || "An error occurred. Please try again.",
                      });
                  },
              }
          );
    }



    return (
        <div>
            <button onClick={handleBack} className="flex items-center py-3 focus:outline-none" type="button">
                <img src={BackIcon} alt="Back" className="w-4 h-4 mt-1 cursor-pointer" />
                <h1 className="text-lg pl-1">Back</h1>
            </button>

            <div className="flex">
                {selectedItem && (
                    <>
                        <img
                            src={selectedItem.imageUrl}
                            alt={`Image for ${selectedItem.name}`}
                            className="w-1/2 h-auto rounded-md"
                        />
                        <div className="p-5 pt-10 w-1/2">
                            <div className="flex justify-between w-full">
                                <div>
                                    <h1 className="text-4xl font-bold">{selectedItem.name}</h1>
                                    <h1 className="text-2xl">{selectedItem.sellerName}</h1>
                                </div>
                                <h1 className="text-4xl font-bold">{selectedItem.price}</h1>
                            </div>

                            <div className="flex justify-between w-full mt-12 items-center">
                                <h1 className="text-2xl">Quantity</h1>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={handleDecrease}
                                        className="px-3 py-1 text-xl font-bold border rounded"
                                    >
                                        -
                                    </button>
                                    <h1 className="text-xl">{quantity}</h1>
                                    <button
                                        onClick={handleIncrease}
                                        className="px-3 py-1 text-xl font-bold border rounded"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between w-full mt-6 h-14">
                                <p className="text-lg text-justify">{selectedItem.details}</p>
                            </div>

                            <div className="flex flex-col w-full mt-32 space-y-3">
                                <Button rounded="lg" className="text-lg py-2">Checkout</Button>
                                <Button rounded="lg" className="text-lg py-2" variant="secondary" onClick={() => setIsDialogOpen(true)}>Add to Cart</Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div>
                <FeaturedCard cardsData={FeaturedCardsData} type='Featured Products' title='SIMILAR PRODUCTS' />
            </div>

            <ConfirmAddToCart 
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onAdd={handleAdd}
            />
        

        </div>


    );
};

export default ItemView;
