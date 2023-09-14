import {
  GET_PRODUCTS,
  FILTER_ITEMS_BY_CATEGORY,
  FILTER_ITEMS_BY_PRICE_RANGE,
  FILTER_ITEMS_BY_RATING,
  CLEAR_ALL_FILTERS,
} from "../actions/actionTypes";

const initialState = {
  products: [
    {
      name: "MacBook Pro",
      price: 1299,
      category: "Electronics",
      rating: 4.5,
      id: 1,
    },
    {
      name: "iPhone 13",
      price: 799,
      category: "Electronics",
      rating: 4.7,
      id: 2,
    },
    {
      name: "Sony WH-1000XM4",
      price: 349,
      category: "Electronics",
      rating: 4.8,
      id: 3,
    },
    {
      name: "Keurig K-Elite",
      price: 149,
      category: "Appliances",
      rating: 4.6,
      id: 4,
    },
    {
      name: "Nike Air Zoom Pegasus",
      price: 120,
      category: "Sports & Outdoors",
      rating: 4.4,
      id: 5,
    },
    {
      name: "Canon EOS 5D Mark IV",
      price: 2499,
      category: "Electronics",
      rating: 4.9,
      id: 6,
    },
    {
      name: "Samsung QLED Q90T",
      price: 1499,
      category: "Electronics",
      rating: 4.7,
      id: 7,
    },
    {
      name: "LG French Door",
      price: 1799,
      category: "Appliances",
      rating: 4.6,
      id: 8,
    },
    {
      name: "Maytag Front Load",
      price: 799,
      category: "Appliances",
      rating: 4.5,
      id: 9,
    },
    {
      name: "PlayStation 5",
      price: 499,
      category: "Electronics",
      rating: 4.8,
      id: 10,
    },
    {
      name: "iPad Air",
      price: 499,
      category: "Electronics",
      rating: 4.7,
      id: 11,
    },
    {
      name: "Baratza Virtuoso+",
      price: 249,
      category: "Appliances",
      rating: 4.6,
      id: 12,
    },
    {
      name: "Dyson V11",
      price: 599,
      category: "Home & Kitchen",
      rating: 4.9,
      id: 13,
    },
    {
      name: "Ashley Furniture Couch",
      price: 799,
      category: "Furniture",
      rating: 4.5,
      id: 14,
    },
    {
      name: "Trek FX 2",
      price: 549,
      category: "Sports & Outdoors",
      rating: 4.4,
      id: 15,
    },
    {
      name: "Vitamix E310",
      price: 349,
      category: "Appliances",
      rating: 4.8,
      id: 16,
    },
    {
      name: "Toyota Camry",
      price: 26795,
      category: "Automotive",
      rating: 4.7,
      id: 17,
    },
    {
      name: "Dell XPS 8940",
      price: 999,
      category: "Electronics",
      rating: 4.6,
      id: 18,
    },
    {
      name: "Panasonic Inverter",
      price: 149,
      category: "Appliances",
      rating: 4.5,
      id: 19,
    },
    {
      name: "Salomon Quest 4D GTX",
      price: 230,
      category: "Sports & Outdoors",
      rating: 4.6,
      id: 20,
    },
    {
      name: "Fender Stratocaster",
      price: 999,
      category: "Musical Instruments",
      rating: 4.8,
      id: 21,
    },
    {
      name: "DJI Mavic Air 2",
      price: 799,
      category: "Electronics",
      rating: 4.7,
      id: 22,
    },
    {
      name: "NordicTrack Commercial 1750",
      price: 1799,
      category: "Sports & Outdoors",
      rating: 4.6,
      id: 23,
    },
    {
      name: "Breville Smart Oven",
      price: 249,
      category: "Appliances",
      rating: 4.5,
      id: 24,
    },
    {
      name: "North Face Recon",
      price: 99,
      category: "Fashion",
      rating: 4.7,
      id: 25,
    },
    {
      name: "KitchenAid Artisan",
      price: 349,
      category: "Appliances",
      rating: 4.8,
      id: 26,
    },
    {
      name: "Apple Watch Series 6",
      price: 399,
      category: "Electronics",
      rating: 4.7,
      id: 27,
    },
    {
      name: "Yamaha Clavinova",
      price: 3999,
      category: "Musical Instruments",
      rating: 4.9,
      id: 28,
    },
    {
      name: "UPPAbaby Vista Stroller",
      price: 899,
      category: "Baby & Kids",
      rating: 4.8,
      id: 29,
    },
    {
      name: "Cuisinart Food Processor",
      price: 149,
      category: "Appliances",
      rating: 4.7,
      id: 30,
    },
    {
      name: "Kindle Paperwhite",
      price: 129,
      category: "Electronics",
      rating: 4.6,
      id: 31,
    },
    {
      name: "Sony 65-Inch 4K TV",
      price: 999,
      category: "Electronics",
      rating: 4.7,
      id: 32,
    },
    {
      name: "Fitbit Versa 3",
      price: 229,
      category: "Electronics",
      rating: 4.5,
      id: 33,
    },
    {
      name: "Weber Genesis II E-310 Grill",
      price: 799,
      category: "Outdoor Living",
      rating: 4.9,
      id: 34,
    },
    {
      name: "Samsung Galaxy Tab S7",
      price: 649,
      category: "Electronics",
      rating: 4.6,
      id: 35,
    },
    {
      name: "Dyson Cyclone V10 Vacuum",
      price: 499,
      category: "Home & Kitchen",
      rating: 4.8,
      id: 36,
    },
    {
      name: "Leather Sofa",
      price: 999,
      category: "Furniture",
      rating: 4.7,
      id: 37,
    },
    {
      name: "Frigidaire Dishwasher",
      price: 699,
      category: "Appliances",
      rating: 4.5,
      id: 38,
    },
    {
      name: "Asus ROG Gaming Laptop",
      price: 1499,
      category: "Electronics",
      rating: 4.7,
      id: 39,
    },
    {
      name: "Garmin Forerunner 245",
      price: 299,
      category: "Sports & Outdoors",
      rating: 4.6,
      id: 40,
    },
    {
      name: "Instant Pot Duo Plus",
      price: 129,
      category: "Appliances",
      rating: 4.8,
      id: 41,
    },
    {
      name: "Canon PIXMA Pro-100 Printer",
      price: 379,
      category: "Electronics",
      rating: 4.7,
      id: 42,
    },
    {
      name: "Outdoor Hammock",
      price: 59,
      category: "Outdoor Living",
      rating: 4.5,
      id: 43,
    },
    {
      name: "Electric Scooter",
      price: 299,
      category: "Sports & Outdoors",
      rating: 4.4,
      id: 44,
    },
    {
      name: "JBL Flip 5 Bluetooth Speaker",
      price: 99,
      category: "Electronics",
      rating: 4.6,
      id: 45,
    },
    {
      name: "LG OLED CX Series TV",
      price: 1999,
      category: "Electronics",
      rating: 4.9,
      id: 46,
    },
    {
      name: "Crock-Pot Slow Cooker",
      price: 49,
      category: "Appliances",
      rating: 4.7,
      id: 47,
    },
    {
      name: "Oak Dining Table",
      price: 799,
      category: "Furniture",
      rating: 4.6,
      id: 48,
    },
  ],
  filteredItems: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return state;

    case FILTER_ITEMS_BY_CATEGORY:
      const categoryFilteredItems = state.products.filter(
        (item) => action.payload.toString().includes(item.category)
      );
      return { ...state, filteredItems: categoryFilteredItems };

    case FILTER_ITEMS_BY_PRICE_RANGE:
      const { minPrice, maxPrice } = action.payload;
      const priceFilteredItems = state.products.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
      return { ...state, filteredItems: priceFilteredItems };

    case FILTER_ITEMS_BY_RATING:
      const ratingFilteredItems = state.products.filter(
        (item) => item.rating >= action.payload
      );
      return { ...state, filteredItems: ratingFilteredItems };

    case CLEAR_ALL_FILTERS:
      return { ...state, filteredItems: [] };

    default:
      return state;
  }
};

export default shopReducer;
