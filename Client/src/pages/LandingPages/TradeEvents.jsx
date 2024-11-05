import EventBanner from '../../assets/images/event-banner.png';

import {
  Card,
  CardContent,
} from "@/components/ui/card"

const TradeEvents = () => {

  const cardEventsData = [ //change to actual data
    { id: 1, name: "Event Name 1", location: "Sample Location", date: 'September 14, 2024', time: '10:00 am', imageUrl: "https://via.placeholder.com/400x400" },
    { id: 2, name: "Event Name 2", location: "Sample Location", date: 'September 14, 2024', time: '10:00 am', imageUrl: "https://via.placeholder.com/400x400" },
    { id: 3, name: "Event Name 3", location: "Sample Location", date: 'September 14, 2024', time: '10:00 am', imageUrl: "https://via.placeholder.com/400x400" },
    { id: 4, name: "Event Name 4", location: "Sample Location", date: 'September 14, 2024', time: '10:00 am', imageUrl: "https://via.placeholder.com/400x400" },
    { id: 5, name: "Event Name 5", location: "Sample Location", date: 'September 14, 2024', time: '10:00 am', imageUrl: "https://via.placeholder.com/400x400" },
    { id: 6, name: "Event Name 6", location: "Sample Location", date: 'September 14, 2024', time: '10:00 am', imageUrl: "https://via.placeholder.com/400x400" },
  ];
  return (
    <div>
      <div
          className="cursor-pointer w-full h-96 rounded-3xl text-white p-14 py-10 mb-12" 
          style={{
              backgroundImage: `url(${EventBanner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
          }}
      >
        <h1 className='font-bold text-6xl w-1/2 mt-2 mb-5'>&quot;Get ready and get your best products and offers in our trade events!&quot;</h1>
        <button className='bg-white text-black text-2xl rounded-3xl p-2 px-5'>Shop Now</button>
      </div>

      <div className="grid grid-cols-3 gap-y-6 justify-center py-5">
        {cardEventsData.map(card => (
          <Card key={card.id}>
            <CardContent className="relative ">
            <h1 className='absolute top-0 pt-5 pl-5 font-bold text-4xl mb-6'>{card.name}</h1>
              <img 
                  src={card.imageUrl}
                  alt={`Image for ${card.name}`}
                  className="w-full h-auto rounded-md" // Use h-auto for responsive height
              />
              <div className='absolute bottom-12 left-4'>
                <h3 className='text-white font-normal text-2xl w-max px-8'>
                  {card.location}
                </h3>    
                <h3 className='text-white font-normal text-2xl w-max px-8'>
                  {card.date}
                </h3>  
                <h3 className='text-white font-normal text-2xl w-max  px-8'>
                  {card.time}
                </h3>      
              </div>
            </CardContent>     
          </Card>
        ))}
      

      </div>
    </div>
  );
};

export default TradeEvents;

