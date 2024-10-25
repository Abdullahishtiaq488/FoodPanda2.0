// "use client";
// import React, { useState } from 'react'
// import Sidebar from '../../components/RestaurantComponents/Sidebar';
// // import { FaSearch } from 'react-icons/fa';
// import LogoCarousel from '../../components/RestaurantComponents/LogoCarousel';
// import CuisinesCarousel from '../../components/RestaurantComponents/CuisinesCarousel';
// import SummerCarousel from '../../components/RestaurantComponents/SummerCarousel';
// import DeliveryCarousel from '../../components/RestaurantComponents/DeliveryCarousel';



// const Restaurants = () => {
//   const items = ['Item 1', 'Item 30', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5'];

//   // State to track selected filter from Sidebar
//   const [selectedFilter, setSelectedFilter] = useState('');
//   const [buttonFilter, setButtonFilter] = useState('');

//   // Function to update the filter based on selection
//   const handleFilterChange = (filter, newFilter) => {
//     setSelectedFilter(filter);
//     setButtonFilter(newFilter);
//   };



//   return (
//     <>
      
//       <div style={{ display: 'flex' }} className='bg-grey-900'>
//         {/* Ensure items are passed as a prop */}
//         <Sidebar items={items} className='' onFilterChange={handleFilterChange} />
//         {/* Main content area */}
//         <div style={{ marginLeft: '0px', padding: '10px', flexGrow: 1 }}>


//           {/* Main-div */}


//           <div className='bg-white  '>

//             <div className="relative lg:w-[800px] m-auto mt-4 lg:mt-2">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 {/* <FaSearch className="text-black" /> */}
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search for restaurants, cuisines, and dishes"
//                 className="w-full border border-gray-200 text-bold rounded-3xl pl-10 pr-2 py-4 hover:bg-gray-100 focus:outline-none"
//               />
//             </div>


//             <div className='container overflow-hidden mt-5'>
//               <LogoCarousel />
//               <DeliveryCarousel filter={selectedFilter} buttonFilter={buttonFilter} />
//               <CuisinesCarousel />
//               <SummerCarousel />
            

//             </div>
//           </div>


//           {/* Main-div-end */}

//         </div>
//       </div>

//     </>
//   )
// }

// export default Restaurants
