import aboutBanner from '../../assets/images/about-banner.png';
import OfferPhoto from '../../assets/images/offer.png';
import TradingPhoto from '../../assets/images/trading.png';
import BiddingPhoto from '../../assets/images/bidding.png';
import ShoppingPhoto from '../../assets/images/shopping.png';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const About = () => {
  return (
    <div>
        <div
          className="cursor-pointer w-full h-96 rounded-3xl text-white p-14 py-10 mb-12" 
          style={{
              backgroundImage: `url(${aboutBanner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
          }}
      >
        <h1 className='font-bold text-6xl mt-5'>Tara Auct</h1>
        <p className='font-thin text-3xl w-1/2 mt-2 mb-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <button className='bg-white text-black text-2xl rounded-3xl p-2 px-5'>Shop Now</button>
      </div>

      <div className='flex flex-col justify-center items-center mb-12'>
          <h1 className='font-bold text-7xl'>What We Offer</h1>
          <img src={OfferPhoto} alt="User" className="w-3/4 cursor-pointer" />
      </div>

      <div className='flex flex-col justify-center items-center p-10 bg-gray-100  w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
        <h1 className='font-bold text-7xl'>What We Do</h1>
        
          <div className='flex mt-10 items-center justify-end w-3/4'>
            <img src={TradingPhoto} alt="User" className="w-1/4 cursor-pointer" />
            <p className='bg-black text-white p-12 text-2xl rounded-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore....</p>
          </div>

          <div className='flex items-center justify-end w-3/4'>
            <p className='bg-black text-white p-12 text-2xl rounded-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore....</p>
            <img src={BiddingPhoto} alt="User" className="w-1/5 cursor-pointer" />
          </div>

          <div className='flex items-center justify-end w-3/4'>
            <img src={ShoppingPhoto} alt="User" className="w-1/4 cursor-pointer" />
            <p className='bg-black text-white p-12 text-2xl rounded-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore....</p>
          </div>

      </div>

      <div className='p-10'>
        <h1 className='font-bold text-5xl mb-10'>Frequently Asked Questions</h1>
        <div className='flex justify-around'>
          <div className='w-1/2 pr-52'>
            <p className='text-2xl mb-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore......
            </p>
            <button className='bg-gray-200 text-2xl font-semibold text-black border border-black p-3 px-8 rounded-3xl'>
              Contact Us
            </button>
          </div>

          <div className='w-1/2'>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" >
              <AccordionTrigger className='bg-black text-white hover:bg-gray-900'>Bidding vs Trading</AccordionTrigger>
              <AccordionContent className='bg'>
              Bidding is the process of making an offer to purchase an item at a specific price, while trading generally refers to buying and selling assets in a market.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I place a bid on an Item?</AccordionTrigger>
              <AccordionContent>
              Bidding is the process of making an offer to purchase an item at a specific price, while trading generally refers to buying and selling assets in a market.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I place a bid on an Item?</AccordionTrigger>
              <AccordionContent>
              Bidding is the process of making an offer to purchase an item at a specific price, while trading generally refers to buying and selling assets in a market.
              </AccordionContent>
            </AccordionItem>
          </Accordion>


          </div>
        </div>
      </div>

    </div>
    
  );
};

export default About;
