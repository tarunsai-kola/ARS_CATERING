import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Menu.css";

interface MenuItem {
  id: string;
  name: string[];
  description: string;
  image: string;
}

const MenuPage: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("southindian");

  const menuItems: MenuItem[] = [
    {
      id: "welcome-drinks",
      name: [
        "Fruit Punch",
        "Watermelon Juice",
        "Pulpy Grape Juice",
        "Mint Lime Juice",
        "Milk Shake (Optional)",
        "Cold Badam Milk",
        "Sugarcane Juice",
        "Hesaru Baayru",
        "Ragi Baayru",
        "Ellu Baayru",
      ],
      description: "Welcome Drinks (Any One)",
      image:
        "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "kosambari",
      name: [
        "Corn Pomegranate Kosambari",
        "Hesarubele Kosambari",
        "Kadalebele Kosambari",
        "Molake Kalu Kosambari",
        "Congress Kosambari",
        "Guava Kosambari",
      ],
      description: "Kosambari (Any One)",
      image:
        "https://www.indianveggiedelight.com/wp-content/uploads/2022/03/hesarubele-kosambari.jpg",
    },
    {
      id: "starters-veg",
      name: [
        "Hara Bhara Kabab",
        "French Fries",
        "Cheese Ball",
        "Babycorn Manchurian",
        "Mushroom Manchurian",
        "Veg Ball Manchurian",
        "Paneer Manchurian",
        "Gobi Manchurian",
        "Baby Corn Chilli",
        "Mushroom Pepper Dry",
        "Basil Corn Cake",
        "Shunti Burfi",
      ],
      description: "Starters (Any One)",
      image:
        "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "starters-south",
      name: [
        "Bajji (Varieties)",
        "Kaju Pakoda",
        "Sabakki Bonda",
        "Ambode",
        "Rava Banana",
        "Baby Corn Rava",
        "Jackfruit Kabab",
      ],
      description: "South Indian Starters (Any One)",
      image:
        "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "palya",
      name: [
        "Thondekai Kaju Palya",
        "Carrot Beans Palya",
        "Suvarnagadde Palya",
        "Mix Veg Palya",
        "Alasande Palya",
        "Bendi Palya",
        "Kabulchanna Palya",
      ],
      description: "Palya (Any Two)",
      image:
        "https://media.istockphoto.com/id/1549569369/photo/pakistani-famous-mix-vegetables.jpg?s=2048x2048&w=is&k=20&c=xmengezK9qhXa5jldhfkhU1yUaP4mWSn66sm91p5kFU=",
    },
    {
      id: "curry",
      name: [
        "Hitakbele Sagu",
        "Brinjal Ennegai",
        "Mix Veg Kurma",
        "Mix Veg Sagu",
        "Coconut Chutney",
        "Red Chutney",
      ],
      description: "Curry (Any Two)",
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "rice-bath",
      name: [
        "Veg Pulav",
        "Veg Biriyani",
        "Vangi Bath",
        "Methi Bath",
        "Pudina Bath",
        "Besibele Bath",
        "Tomato Bath",
        "Palak Rice Bath",
      ],
      description: "Rice Bath (Any One)",
      image:
        "https://images.pexels.com/photos/17910326/pexels-photo-17910326.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "breads",
      name: [
        "Puri",
        "Palak Puri",
        "Phulka",
        "Akki Rotti",
        "Ragi Rotti",
        "Bele Holige",
        "Masala Dosa",
        "Neer Dosa",
        "Kotte Kadubu",
      ],
      description: "Breads (Any Two)",
      image:
        "https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "sambar",
      name: [
        "Mix Veg Sambar",
        "Aloo Drumstick Sambar",
        "Mangalore Cucumber Sambar",
        "Soppu Sambar",
        "Andra Pappu With Ghee",
      ],
      description: "Sambar (Any One)",
      image:
        "https://images.pexels.com/photos/4109991/pexels-photo-4109991.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "rasam",
      name: [
        "Madras Rasam",
        "Udupi Rasam",
        "Mysore Rasam",
        "Pepper Rasam",
        "Tomato Rasam",
      ],
      description: "Rasam (Any One)",
      image:
        "https://media.istockphoto.com/id/1154132903/photo/traditional-pesrian-cousine-iran.jpg?s=2048x2048&w=is&k=20&c=dMtyK9ka-XyOa1VEZa1jLSfWTzdud7YyBW4WulJGfFI=",
    },
    {
      id: "payasa",
      name: [
        "Karjura Payasa",
        "Akki Payasa",
        "Kadalebele Payasa",
        "Broken Wheat Payasa",
        "Shavige Payasa",
        "Sabakki Payasa",
        "Shavige Sabakki Payasa",
      ],
      description: "Payasa (Any One)",
      image:
        "https://media.istockphoto.com/id/692446072/photo/most-famous-indian-sweet-pudding-kheer-or-semiya-khir-in-a-bowl-selective-focus.jpg?s=2048x2048&w=is&k=20&c=UQk0SlqEU0xfkwY3XLXixhMKVzXHGKSFpeHGNY32UvI=",
    },
    {
      id: "sweets",
      name: [
        " ",
        "Jilebi / Jahangir",
        "Badusha",
        "Spl Mysorepak",
        "Burfi / Rasmalai",
        "Badam Malai Sandwich",
        "Champakali / Cham",
        "Gulab Jamun",
        "Bele Holige / Coconut Holige",
        "Peni / Chiroti",
        "Carrot Halwa",
        "Kashi Halwa",
        "Ragi Manni",
      ],
      description: "Sweets (Any Two)",
      image:
        "https://images.pexels.com/photos/18488310/pexels-photo-18488310.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "ice-cream",
      name: [
        "Vanilla",
        "Strawberry",
        "Mango",
        "Butterscotch",
        "Pista",
        "Chocolate",
      ],
      description: "Ice Cream (Any One)",
      image:
        "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  // Track which book is open
  // Removed openBookId state, no longer needed

  return (
    <div
      className="min-h-screen py-12 text-center"
      style={{
        backgroundColor: "white",
      }}
    >
      {/* ✅ Menu Buttons */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          className={`px-6 py-2 rounded-lg text-white font-semibold ${
            activeMenu === "southindian"
              ? "bg-orange-600"
              : "bg-gray-400 hover:bg-orange-500"
          }`}
          onClick={() => setActiveMenu("southindian")}
        >
          🍛 South Indian Menu
        </button>
        <button
          className={`px-6 py-2 rounded-lg text-white font-semibold ${
            activeMenu === "buffet"
              ? "bg-orange-600"
              : "bg-gray-400 hover:bg-orange-500"
          }`}
          onClick={() => setActiveMenu("buffet")}
        >
          🍽️ Buffet Menu
        </button>
      </div>

      {/* ✅ Heading */}
      <motion.h1
        className="text-4xl font-bold mb-10 text-gray-900"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {activeMenu === "southindian"
          ? "🍛 ARS Caterers South Indian Menu"
          : "🍽️ ARS Caterers Buffet Menu"}
      </motion.h1>

      {/* ✅ Menu Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {menuItems.map((item) => (
          <div key={item.id}>
            {/* Section title above */}
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {item.description}
            </h2>

            {/* Book effect */}
            <div className="book">
              <div
                className="cover"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              <div className="page-content">
                <ul className="text-base space-y-1 text-gray-800 font-medium">
                  {item.name.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
