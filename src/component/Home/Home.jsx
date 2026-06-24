import React from "react";
import biryani from "../../assets/chicken-biryani.jpg";
import butterChicken from "../../assets/Butter-Chicken.jpg";
import champ from "../../assets/cham-cham.jpg";
import channaBatura from "../../assets/channa-bhatura.jpg";
import chicken65 from "../../assets/chicken-65.jpg";
import chickenHandi from "../../assets/Chicken-Handi.jpg";
import gajarHalwa from "../../assets/Gajar-Ka-Halwa.jpg";
import gulabJamun from "../../assets/Gulab-Jamun.jpg";
import misalpav from "../../assets/Misal-Pav.webp";
import matarpaneer from "../../assets/Matar-Paneer.jpg";
import nonvegthali from "../../assets/Non-Veg-thali.jpg";
import pavbhaji from "../../assets/Pav-Bhaji.jpg";
import rasmalai from "../../assets/Rasmalai.jpg";
import vadapav from "../../assets/Vada-Pav.webp";
import white from "../../assets/white_sauce_pasta.jpg";
import Card from "../Card/Card";
//import useState from react
import { useState } from "react";
import { FcSearch } from "react-icons/fc";

//import card.css file here

const Home = ({ addToCart }) => {
  let cardData = [
    {
      id: 1,
      name: "Chicken Biryani",
      image: biryani,
      price: 200,
    },
    {
      id: 2,
      name: "Butter Chicken",
      image: butterChicken,
      price: 250,
    },
    {
      id: 3,
      name: "Cham Cham",
      image: champ,
      price: 150,
    },
    {
      id: 4,
      name: "Channa Batura",
      image: channaBatura,
      price: 100,
    },
    {
      id: 5,
      name: "Chicken 65",
      image: chicken65,
      price: 180,
    },
    {
      id: 6,
      name: "Chicken Handi",
      image: chickenHandi,
      price: 220,
    },
    {
      id: 7,
      name: "Gajar Halwa",
      image: gajarHalwa,
      price: 120,
    },
    {
      id: 8,
      name: "Gulab Jamun",
      image: gulabJamun,
      price: 80,
    },
    {
      id: 9,
      name: "Misal Pav",
      image: misalpav,
      price: 90,
    },
    {
      id: 10,
      name: "Matar Paneer",
      image: matarpaneer,
      price: 160,
    },
    {
      id: 11,
      name: "Non Veg Thali",
      image: nonvegthali,
      price: 300,
    },
    {
      id: 12,
      name: "Pav Bhaji",
      image: pavbhaji,
      price: 110,
    },
    {
      id: 13,
      name: "Rasmalai",
      image: rasmalai,
      price: 130,
    },
    {
      id: 14,
      name: "Vada Pav",
      image: vadapav,
      price: 50,
    },
    {
      id: 15,
      name: "Chicken Biryani",
      image: biryani,
      price: 200,
    },
    {
      id: 16,
      name: "White Sauce Pasta",
      image: white,
      price: 140,
    },
  ];

  //define state variable to store the filtered data
  const [search, setSearch] = useState("");

  let filteredData = cardData.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <div className="search">
        <div className="searchBar">
          <FcSearch />
          <input
            type="text"
            placeholder="Search for food items"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <Card cardData={filteredData} addToCart={addToCart} />
    </div>
  );
};

export default Home;
