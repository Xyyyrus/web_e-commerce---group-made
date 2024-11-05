import FeaturedCard from "@/components/other/FeaturedCard";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";


const BiddingZone = () => {
  const navigate = useNavigate();

  const FeaturedCardsData = [
    { id: 1, name: "Sample Item 1", price: "P 100.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 2, name: "Sample Item 2", price: "P 200.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 3, name: "Sample Item 3", price: "P 300.00", imageUrl: "https://via.placeholder.com/400x300" },
  ];

  const CardsData = [
    { id: 1, name: "Sample Item 1", price: "P 100.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 2, name: "Sample Item 2", price: "P 200.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 3, name: "Sample Item 3", price: "P 300.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 4, name: "Sample Item 4", price: "P 400.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 5, name: "Sample Item 5", price: "P 500.00", imageUrl: "https://via.placeholder.com/400x300" },
  ];

  const handleCardClick = (id) => {
    navigate(`/shop-now/${id}`); // Pass the ID in the navigation path
  }


  return (
    <div>
    <FeaturedCard cardsData={FeaturedCardsData} type='Bidding Zone' title='UPCOMING BIDS' />

    <div className='py-5'>
      <h1 className='text-4xl font-bold pb-10'>SHOP &quot;HOME & FURNITURE&quot;</h1> 
      
      <div className="grid grid-cols-3 gap-y-6"> 
        {CardsData.map(card => (
          <Card key={card.id} className="col-span-1" onClick={() => handleCardClick(card.id)}> {/* Pass the card ID on click */}
            <CardContent className="relative">
              <img 
                src={card.imageUrl}
                alt={`Image for ${card.name}`}
                className="w-full h-auto rounded-md" 
              />
              <h3 className='bg-white text-black rounded-xl w-max p-1 px-5 absolute bottom-0 left-0 mb-2 ml-2'>
                1hr 2m 3s left
              </h3>
            </CardContent>
            <CardFooter>
              <h1 className='text-3xl'>{card.name}</h1>
              <div className='flex justify-between'>
                <h5 className='font-normal text-xl'>Trade Item</h5>
                <h5 className='font-normal text-xl'>P 0.00 - 0.00</h5>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </div>

    
  );
};

export default BiddingZone;

