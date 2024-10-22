import { useState } from 'react';

// import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
// import { FaSearch } from 'react-icons/fa';

const Sidebar = ({  onFilterChange }) => {
  
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedValue, setSelectedValue] = useState('');



   

   // Handle the radio button change for sorting options (Relevance, Fastest, Distance)
   const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);

    // Apply the correct filter based on the selected value
    if (value === 'element2') {
        onFilterChange('fastest');
    } else if (value === 'element3') {
        onFilterChange('distance'); // This will filter by 20 minutes or less distance
    } else {
        onFilterChange(''); // Reset the filter for "Relevance"
    }
};

// Handle quick filter change
const handleFilterChange = (filterType) => {
    if (filterType === 'rating') {
        onFilterChange('rating'); // Apply the rating filter
    } else {
        onFilterChange(''); // Reset filters
    }
};


    const handleRadioChange2 = (e) => {
        setSelectedItem(e.target.value);
    };



    return (
        <div
            className="hidden md:block w-[220px] border-r border-gray-300 p-5 flex flex-col overflow-y-auto"
            style={{ maxHeight: '100vh' }}
        >
            <b className="text-xl mb-6">Filter</b>
            <br />
            <span className="text-sm font-semibold">Sort by</span>

            {/* Scrollable content */}
            <div className="flex-grow">
                <ul className="mb-4">
                    <li className="p-2 list-none">
                        <input
                            type="radio"
                            name="element"
                            className="mr-3"
                            value="element1"
                            id="element1"
                            onChange={handleRadioChange}
                            defaultChecked
                        />
                        <label htmlFor="element1" className="font-semibold">
                            Relevance
                        </label>
                    </li>
                    <li className="p-2 list-none">
                        <input
                            type="radio"
                            name="element"
                            className="mr-3"
                            value="element2"
                            id="element2"
                           
                        />
                        <label htmlFor="element2" className="font-semibold">
                            Fastest delivery
                        </label>
                    </li>
                    <li className="p-2 list-none">
                        <input
                            type="radio"
                            name="element"
                            className="mr-3"
                            value="element3"
                            id="element3"
                            onChange={handleRadioChange}

                        />
                        <label htmlFor="element3" className="font-semibold">
                            Distance
                        </label>
                    </li>
                </ul>

                {/* Quick filters */}
                <span className="text-sm font-semibold">Quick filters</span>

                <button
                    onClick={() => handleFilterChange('rating')}
                    className="bg-white border border-gray-200 rounded-3xl px-2 py-2 hover:bg-gray-100 w-[60%] mt-2 font-semibold"
                >
                    Rating 4+
                </button>

                <button  className="bg-white border border-gray-200 rounded-3xl px-2 py-2 hover:bg-gray-100 w-full mt-2 font-semibold flex items-center mb-3">
                    {/* <FontAwesomeIcon icon={faStar} size="lg" className="mr-2" /> */}
                    Top restaurant
                </button>

                {/* Offers */}
                <span className="text-sm font-semibold mt-4">Offers</span>

                <div className="pt-2">
                    <label className="inline-flex items-center space-x-2 cursor-pointer text-sm font-semibold mt-2">
                        <input
                            type="radio"
                            name="option"
                            value="option1"
                            checked={selectedValue === 'option1'}
                            onChange={handleRadioChange}
                            className="appearance-none w-6 h-6 border-4 hover:border-black border-black-500 checked:border-black rounded-sm"
                        />
                        <span>Free delivery</span>
                    </label>

                    <label className="inline-flex items-center space-x-2 cursor-pointer text-sm font-semibold mt-2">
                        <input
                            type="radio"
                            name="option"
                            value="option2"
                            checked={selectedValue === 'option2'}
                            onChange={handleRadioChange}
                            className="appearance-none w-6 h-6 border-4 hover:border-black border-black-500 checked:border-black rounded-sm"
                        />
                        <span>Accepts vouchers</span>
                    </label>
                    <label className="inline-flex items-center space-x-2 cursor-pointer text-sm font-semibold mt-2 mb-4">
                        <input
                            type="radio"
                            name="option"
                            value="option3"
                            checked={selectedValue === 'option3'}
                            onChange={handleRadioChange}
                            className="appearance-none w-6 h-6 border-4 hover:border-black border-black-500 checked:border-black rounded-sm"
                        />
                        <span>Deals</span>
                    </label>
                </div>

                {/* Search bar */}
                <span className="text-sm font-semibold mt-4">Cuisines</span>
                <div className="relative w-full mt-2">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {/* <FaSearch className="text-gray-400" /> */}
                    </div>
                    <input
                        type="text"
                        placeholder="Search for cuisines"
                        className="w-full border border-gray-200 text-bold rounded-3xl pl-10 pr-2 py-2 hover:bg-gray-100 focus:outline-none"
                    />
                </div>

                <div className="pt-2">
                    <label className="inline-flex items-center space-x-2 cursor-pointer text-sm font-semibold mt-2">
                        <input
                            type="radio"
                            name="American"
                            value="American"
                            checked={selectedItem === 'American'}
                            onChange={handleRadioChange2}
                            className="appearance-none w-6 h-6 border-4 hover:border-black border-black-500 checked:border-black rounded-sm"
                        />
                        <span>American</span>
                    </label>
                    <label className="inline-flex items-center space-x-2 cursor-pointer text-sm font-semibold mt-2">
                        <input
                            type="radio"
                            name="Continental"
                            value="Continental"
                            checked={selectedItem === 'Continental'}
                            onChange={handleRadioChange2}
                            className="appearance-none w-6 h-6 border-4 hover:border-black border-black-500 checked:border-black rounded-sm"
                        />
                        <span>Continental Item</span>
                    </label>
                    <label className="inline-flex items-center space-x-2 cursor-pointer text-sm font-semibold mt-2">
                        <input
                            type="radio"
                            name="Cakes & Bakery"
                            value="Cakes & Bakery"
                            checked={selectedItem === 'Cakes & Bakery'}
                            onChange={handleRadioChange2}
                            className="appearance-none w-6 h-6 border-4 hover:border-black border-black-500 checked:border-black rounded-sm"
                        />
                        <span>Cakes & Bakery</span>
                    </label>

                    <label className="inline-flex items-center mb-4 space-x-2 cursor-pointer text-sm font-semibold mt-2">
                        <input
                            type="radio"
                            name="Karahi & Handi"
                            value="Karahi & Handi"
                            checked={selectedItem === 'Karahi & Handi'}
                            onChange={handleRadioChange2}
                            className="appearance-none w-6 h-6 border-4 hover:border-black border-black-500 checked:border-black rounded-sm"
                        />
                        <span>Karahi & Handi</span>
                    </label>
                </div>

                <span className="text-sm font-semibold mt-4">Price</span>
                <div className="flex justify-between mt-2">
                    <button className="border border-gray-300 rounded-full px-4 py-2 bg-white hover:bg-gray-100 font-semibold flex-1 mr-1">
                        $
                    </button>
                    <button className="border border-gray-300 rounded-full px-4 py-2 bg-white hover:bg-gray-100 font-semibold flex-1 mx-1">
                        $$
                    </button>
                    <button className="border border-gray-300 rounded-full px-4 py-2 bg-white hover:bg-gray-100 font-semibold flex-1 ml-1">
                        $$$
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
