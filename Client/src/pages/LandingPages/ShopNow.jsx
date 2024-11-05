import FeaturedCard from "@/components/other/FeaturedCard";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useNavigate } from "react-router-dom";
import FilterIcon from '../../assets/icons/filter.png';
import { Dropdown } from "flowbite-react";
import { useState } from "react";

const ShopNow = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Home & Furniture');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Set number of items per page

  const onFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1); // Reset to the first page on filter change
  }

  const FeaturedCardsData = [ //change to actual data
    { id: 1, name: "Sample Item 1", price: "P 100.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 2, name: "Sample Item 2", price: "P 200.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 3, name: "Sample Item 3", price: "P 300.00", imageUrl: "https://via.placeholder.com/400x300" },
  ];

  const CardsData = [ //change to actual data
    { id: 1, name: "Sample Item 1", price: "P 100.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 2, name: "Sample Item 2", price: "P 200.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 3, name: "Sample Item 3", price: "P 300.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 4, name: "Sample Item 4", price: "P 400.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 5, name: "Sample Item 5", price: "P 500.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 6, name: "Sample Item 6", price: "P 600.00", imageUrl: "https://via.placeholder.com/400x300" },
    { id: 7, name: "Sample Item 7", price: "P 700.00", imageUrl: "https://via.placeholder.com/400x300" },
  ];

  const handleCardClick = (id) => {
    navigate(`/shop-now/${id}`);
  }

  // Calculate the items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CardsData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(CardsData.length / itemsPerPage);

  return (
    <div>
      <FeaturedCard cardsData={FeaturedCardsData} type='Featured Products' title='BEST SELLING' />
  
      <div className='py-5'>
        <div className="flex justify-between w-full">
          <h1 className='text-4xl font-bold pb-10'>SHOP &quot;{filter}&quot;</h1> 
          <Dropdown
            inline
            label={<img src={FilterIcon} alt="User" className="w-9 h-9 cursor-pointer" />}
            className="mx-2 outline-none focus:outline-none active:outline-none"
            arrowIcon={false}
          >
            <Dropdown.Item onClick={() => onFilterChange('Home & Furniture')}>
              Home & Furniture
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onFilterChange('Electronics')}>
              Electronics
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onFilterChange('Fashion & Accessories')}>
              Fashion & Accessories
            </Dropdown.Item>  
          </Dropdown>
        </div>

        <div className="grid grid-cols-3 gap-y-6"> 
          {currentItems.map(card => (
            <Card key={card.id} className="col-span-1" onClick={() => handleCardClick(card.id)}>
              <CardContent className="relative">
                <img 
                  src={card.imageUrl}
                  alt={`Image for ${card.name}`}
                  className="w-full h-auto rounded-md" 
                />
              </CardContent>
              <CardFooter>
                <h1 className='text-3xl'>{card.name}</h1>
                <h5 className='font-normal text-xl'>{card.price}</h5>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination Component */}
        <Pagination className='mt-24'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index + 1}>
                <PaginationLink
                  onClick={() => setCurrentPage(index + 1)}
                  className={currentPage === index + 1 ? 'font-bold' : ''}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

      </div>
    </div>
  );
};

export default ShopNow;
