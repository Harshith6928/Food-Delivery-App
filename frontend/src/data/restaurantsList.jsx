import image10 from '../assets/restaurants/res9.jpg';

const restaurantsList = [
  {
    id: 1,
    name: "Paradise Biryani",
    cuisine: "Hyderabadi Biryani",
    menu: [
      { id: 1, name: "Hyderabadi Chicken Biryani", price: 380, image: image10  },
      { id: 2, name: "Mutton Biryani", price: 420, image: image10  },
      { id: 3, name: "Paneer Biryani", price: 350, image: image10  },
      { id: 4, name: "Chicken 65", price: 300, image: image10  },
      { id: 5, name: "Mirchi Ka Salan", price: 180, image: image10  },
    ],
  },
  {
    id: 2,
    name: "Bawarchi",
    cuisine: "Hyderabadi Cuisine",
    menu: [
      { id: 1, name: "Special Chicken Biryani", price: 390, image: image10  },
      { id: 2, name: "Mutton Haleem", price: 450, image: image10  },
      { id: 3, name: "Hyderabadi Dum Biryani", price: 400, image: image10  },
      { id: 4, name: "Shami Kebab", price: 250 , image: image10 },
      { id: 5, name: "Double Ka Meetha", price: 200, image: image10  },
    ],
  },
  {
    id: 3,
    name: "Shah Ghouse",
    cuisine: "Mughlai & Biryani",
    menu: [
      { id: 1, name: "Mutton Biryani", price: 400, image: image10  },
      { id: 2, name: "Chicken Majestic", price: 320, image: image10  },
      { id: 3, name: "Tandoori Chicken", price: 350, image: image10  },
      { id: 4, name: "Haleem", price: 450, image: image10  },
      { id: 5, name: "Butter Naan", price: 120, image: image10  },
    ],
  },
  {
    id: 4,
    name: "Pista House",
    cuisine: "Haleem & Biryani",
    menu: [
      { id: 1, name: "Chicken Haleem", price: 400, image: image10  },
      { id: 2, name: "Mutton Haleem", price: 450, image: image10  },
      { id: 3, name: "Special Hyderabadi Biryani", price: 420, image: image10  },
      { id: 4, name: "Khubani Ka Meetha", price: 180 , image: image10 },
      { id: 5, name: "Double Ka Meetha", price: 160, image: image10  },
    ],
  },
  {
    id: 5,
    name: "Chutneys",
    cuisine: "South Indian",
    menu: [
      { id: 1, name: "Ghee Idli", price: 150, image: image10  },
      { id: 2, name: "Butter Dosa", price: 180, image: image10  },
      { id: 3, name: "Poori with Aloo Kurma", price: 190, image: image10  },
      { id: 4, name: "MLA Pesarattu", price: 200, image: image10  },
      { id: 5, name: "Filter Coffee", price: 120, image: image10  },
    ],
  },
  {
    id: 6,
    name: "Rayalaseema Ruchulu",
    cuisine: "Andhra & Telangana",
    menu: [
      { id: 1, name: "Natu Kodi Pulusu", price: 400, image: image10  },
      { id: 2, name: "Gutti Vankaya Curry", price: 300, image: image10  },
      { id: 3, name: "Ragi Sangati", price: 250 , image: image10 },
      { id: 4, name: "Pesarapappu Charu", price: 220 , image: image10 },
      { id: 5, name: "Prawn Fry", price: 450, image: image10  },
    ],
  },
  {
    id: 7,
    name: "Almond House",
    cuisine: "Sweets & Snacks",
    menu: [
      { id: 1, name: "Badam Halwa", price: 350, image: image10  },
      { id: 2, name: "Motichoor Ladoo", price: 280, image: image10  },
      { id: 3, name: "Kaju Katli", price: 400, image: image10  },
      { id: 4, name: "Rasmalai", price: 320, image: image10  },
      { id: 5, name: "Dry Fruit Mysore Pak", price: 450, image: image10  },
    ],
  },
  {
    id: 8,
    name: "Minerva Coffee Shop",
    cuisine: "South Indian",
    menu: [
      { id: 1, name: "Filter Coffee", price: 120, image: image10  },
      { id: 2, name: "Masala Dosa", price: 180, image: image10  },
      { id: 3, name: "Ghee Pongal", price: 200, image: image10  },
      { id: 4, name: "Mysore Bonda", price: 150, image: image10  },
      { id: 5, name: "Rava Kesari", price: 160, image: image10  },
    ],
  },
  {
    id: 9,
    name: "Ohri’s 70MM",
    cuisine: "Multi-Cuisine Buffet",
    menu: [
      { id: 1, name: "Live Pasta Counter", price: 500, image: image10  },
      { id: 2, name: "Hyderabadi Dum Biryani", price: 450, image: image10  },
      { id: 3, name: "Assorted Desserts", price: 350, image: image10  },
      { id: 4, name: "Chaat Platter", price: 280, image: image10  },
      { id: 5, name: "Tandoori Starters", price: 400, image: image10  },
    ],
  },
  {
    id: 10,
    name: "Cafe Bahar",
    cuisine: "Hyderabadi Biryani",
    menu: [
      { id: 1, name: "Mutton Biryani", price: 420, image: image10  },
      { id: 2, name: "Chicken Biryani", price: 390, image: image10  },
      { id: 3, name: "Apollo Fish", price: 350, image: image10  },
      { id: 4, name: "Chicken Tikka", price: 320 , image: image10 },
      { id: 5, name: "Haleem", price: 400 , image: image10 },
    ],
  },
  {
    id: 11,
    name: "Jewel of Nizam",
    cuisine: "Royal Hyderabadi Cuisine",
    menu: [
      { id: 1, name: "Shikampur Kebab", price: 450, image: image10  },
      { id: 2, name: "Dum Pukht Biryani", price: 500, image: image10  },
      { id: 3, name: "Raan E Nizam", price: 600 , image: image10 },
      { id: 4, name: "Khubani Ka Meetha", price: 250 , image: image10 },
      { id: 5, name: "Sheermal", price: 200, image: image10  },
    ],
  },
  {
    id: 12,
    name: "Tatva",
    cuisine: "Vegetarian Fine Dining",
    menu: [
      { id: 1, name: "Malai Kofta", price: 400, image: image10  },
      { id: 2, name: "Paneer Lababdar", price: 420, image: image10  },
      { id: 3, name: "Tandoori Platter", price: 450 , image: image10 },
      { id: 4, name: "Dal Makhani", price: 350 , image: image10 },
      { id: 5, name: "Stuffed Kulcha", price: 250 , image: image10 },
    ],
  },
  {
    id: 13,
    name: "Zafraan Exotica",
    cuisine: "North Indian & Mughlai",
    menu: [
      { id: 1, name: "Murgh Musallam", price: 480, image: image10  },
      { id: 2, name: "Paneer Tikka Masala", price: 420, image: image10  },
      { id: 3, name: "Lachha Paratha", price: 100, image: image10  },
      { id: 4, name: "Mutton Rogan Josh", price: 500 , image: image10 },
      { id: 5, name: "Tandoori Prawns", price: 550, image: image10  },
    ],
  },
  {
    id: 14,
    name: "Ulavacharu",
    cuisine: "Telugu Traditional",
    menu: [
      { id: 1, name: "Raju Gari Kodi Pulao", price: 450 , image: image10 },
      { id: 2, name: "Gongura Mutton", price: 500, image: image10  },
      { id: 3, name: "Chepala Pulusu", price: 400, image: image10  },
      { id: 4, name: "Nellore Fish Fry", price: 480, image: image10  },
      { id: 5, name: "Avakaya Biryani", price: 420 , image: image10 },
    ],
  },
];

export default restaurantsList;
