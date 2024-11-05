import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const FeaturedCard = ({ cardsData, type, title, isDropdownOpen }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
      navigate(`/shop-now/${id}`);
  };

  return (
      <div className='py-5'>
          <h1 className='text-4xl font-bold pb-10'>{title}</h1>
          <div className={`justify-center grid grid-cols-3 gap-y-6 ${isDropdownOpen ? 'pointer-events-none' : ''}`}>
              {cardsData.map(card => (
                  <Card key={card.id} className="col-span-1" onClick={() => handleCardClick(card.id)}>
                      <CardContent className="relative">
                          <img
                              src={card.imageUrl}
                              alt={`Image for ${card.name}`}
                              className="w-full h-auto rounded-md"
                          />
                          {type === 'Trade Deals' ? (
                              <h3 className='bg-black text-white rounded-xl w-max p-1 px-5 absolute bottom-0 left-0 mb-2 ml-2'>
                                  Downgrade
                              </h3>
                          ) : type === 'Bidding Zone' ? (
                              <h3 className='bg-white text-black rounded-xl w-max p-1 px-5 absolute bottom-0 left-0 mb-2 ml-2'>
                                  1hr 2m 3s left
                              </h3>
                          ) : (
                              <div />
                          )}
                      </CardContent>
                      <CardFooter>
                          <h1 className='text-3xl'>{card.name}</h1>

                          {type === 'Trade Deals' ? (
                              <div className='flex justify-between'>
                                  <h5 className='font-normal text-xl'>Trade Item</h5>
                                  <h5 className='font-normal text-xl'>{card.price}</h5>
                              </div>
                          ) : type === 'Bidding Zone' ? (
                              <div className='flex justify-between'>
                                  <h5 className='font-normal text-xl'>Trade Item</h5>
                                  <h5 className='font-normal text-xl'>P 0.00 - 0.00</h5>
                              </div>
                          ) : (
                              <h5 className='font-normal text-xl'>{card.price}</h5>
                          )}
                      </CardFooter>
                  </Card>
              ))}
          </div>
      </div>
  );
};

export default FeaturedCard;
