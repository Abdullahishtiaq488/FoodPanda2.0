// import image1 from '../public/chapati.jpeg';
// import image2 from '../public/image2.webp';
// import image3 from '../public/image3.jpeg';
// import cityImage from '../public/islamabad.webp';
// import restaurantLogo from '../public/subwaylogo.png';
// import restaurantimage1 from '../public/subwayimage.jpeg'


// //Interface for Deals
// export interface Deal {
//     heading: string;
//     description: string;
// }

// export interface CityData {
//     id: number;
//     image: any;
//     cityName: string;
// }


// // Unique City Data
// export const cityData: CityData[] = [
//     {
//         id: 1,
//         image: cityImage,
//         cityName: 'Lahore',
//     },
//     {
//         id: 2,
//         image: cityImage,
//         cityName: 'Karachi',
//     },
//     {
//         id: 3,
//         image: cityImage,
//         cityName: 'Islamabad',
//     },
//     {
//         id: 4,
//         image: cityImage,
//         cityName: 'Peshawar',
//     },
// ];

// // data/cardData.tsx

// // Define the type for restaurant data
// export interface RestaurantData {
//     id: number;
//     cityId: number;
//     name: string;
//     image: any;
//     logo:any;
//     cuisine: string;
//     tags: string[];
//     rating: number;
//     address: string;
//     deals: Deal[];
//     closed?: boolean;
// }

// // Export the restaurant data
// export const restaurantData: RestaurantData[] = [
    
//     { 
//     id: 2,
//     cityId: 1,
//     name: "Subway - Faisal Town",
//     cuisine: "Pakistani",
//     image: restaurantimage1,
//     logo: restaurantLogo,
//     tags: ["Sandwitches", "American", "Healthy Food", "Western"],
//     rating: 4.5,
//     address: "Shop No 64 - B, Block A, Faisal Town, Lahore 8526.6 km away. ",
//     deals: [
//         {
//             heading: 'Rs. 298.84 off',
//             description: 'Min. order Rs. 298.84. Valid for selected items. Auto applied.',
//         },
//         {
//             heading: '20% off (MC20)',
//             description: 'Min. order Rs. 500. Valid for all items. Use in cart.',
//         },
//         {
//             heading: '30% off (MC30)',
//             description: 'New and existing customers. Valid for all items.',
//         },
//         {
//             heading: '5% off (MC30)',
//             description: 'Just a test deal.',
//         },
//     ],},

//     { id: 1,
//         cityId: 1,
//         name: "Amaltas Cant",
//         cuisine: "Pakistani",
//         image: image2,
//         logo: image2,
//         tags: ["Sandwitches", "American", "Healthy Food", "Western"],
//         rating: 4.5,
//         address: "Shop No 64 - B, Block A, Faisal Town, Lahore 8526.6 km away. ",
//         deals: [
//             {
//                 heading: 'Rs. 298.84 off',
//                 description: 'Min. order Rs. 298.84. Valid for selected items. Auto applied.',
//             },
//             {
//                 heading: '20% off (MC20)',
//                 description: 'Min. order Rs. 500. Valid for all items. Use in cart.',
//             },
//             {
//                 heading: '30% off (MC30)',
//                 description: 'New and existing customers. Valid for all items.',
//             },
//         ],},

//         { id: 3,
//             cityId: 1,
//             name: "Madina Restaurant",
//             cuisine: "Pakistani",
//             image: image1,
//             logo: image1,
//             tags: ["Sandwitches", "American", "Healthy Food", "Western"],
//             rating: 4.5,
//             address: "Shop No 64 - B, Block A, Faisal Town, Lahore 8526.6 km away. ",
//             closed: false,
//             deals: [
//                 {
//                     heading: 'Rs. 298.84 off',
//                     description: 'Min. order Rs. 298.84. Valid for selected items. Auto applied.',
//                 },
//                 {
//                     heading: '20% off (MC20)',
//                     description: 'Min. order Rs. 500. Valid for all items. Use in cart.',
//                 },
//                 {
//                     heading: '30% off (MC30)',
//                     description: 'New and existing customers. Valid for all items.',
//                 },
//             ],},

//             { id: 4,
//                 cityId: 4,
//                 name: "Royal Homemade Kitchen - Branch 1",
//                 cuisine: "Pakistani",
//                 image: image3,
//                 logo: image3,
//                 tags: ["Sandwitches", "American", "Healthy Food", "Western"],
//                 rating: 4.5,
//                 address: "Shop No 64 - B, Block A, Faisal Town, Lahore 8526.6 km away. ",
//                 closed: true,
//                 deals: [
//                     {
//                         heading: 'Rs. 298.84 off',
//                         description: 'Min. order Rs. 298.84. Valid for selected items. Auto applied.',
//                     },
//                     {
//                         heading: '20% off (MC20)',
//                         description: 'Min. order Rs. 500. Valid for all items. Use in cart.',
//                     },
//                     {
//                         heading: '30% off (MC30)',
//                         description: 'New and existing customers. Valid for all items.',
//                     },
//                 ],},

// ]
