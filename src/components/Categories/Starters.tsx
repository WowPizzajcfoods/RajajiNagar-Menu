import { normalizeMenuItems, SearchableMenuItem } from "@/lib/menu";
import MenuItem from "../MenuItem";

export const starterItems = normalizeMenuItems([
  {
    name: "Garlic Bread",
    desc: "Toasted garlic bread topped with melted cheese",
    img: "/categories/starters/GarlicBread.png",
    isVeg: true,
    isSpicy: false,
    price: 59,
  },
  {
    name: "Cheese Garlic Bread",
    desc: "Toasted garlic bread topped with melted cheese",
    img: "/categories/starters/starter1.png",
    isVeg: true,
    isSpicy: false,
    price: 89,
  },
  {
    name: "French Fries",
    desc: "Crispy golden fries, the classic irresistible side",
    img: "/categories/starters/starter4.png",
    isVeg: true,
    isSpicy: false,
    price: 79,
  },
  {
    name: "Potato Chilli Pops",
    desc: "Crispy bite-sized potato pops seasoned with chili and spices",
    img: "/categories/starters/starter2.png",
    isVeg: true,
    isSpicy: false,
    price: 69,
  },

  {
    name: "Peri Peri Fries",
    desc: "Spicy peri peri seasoned fries with a fiery kick.",
    img: "/categories/starters/starter5.png",
    isVeg: true,
    isSpicy: true,
    price: 79,
  },
  {
    name: "Potato Wedges",
    desc: "Thick-cut, crispy-on-the-outside, tender-on-the-inside wedges",
    img: "/categories/starters/starter6.png",
    isVeg: true,
    isSpicy: false,
    price: 79,
  },
  {
    name: "Veg Fingers",
    desc: "Crispy breaded vegetables shaped into snackable fingers",
    img: "/categories/starters/VegFingers.png",
    isVeg: true,
    isSpicy: false,
    price: 89,
  },
  {
    name: "Onion Rings",
    desc: "Golden-fried battered onion rings served crisp",
    img: "/categories/starters/OnionRings.png",
    isVeg: true,
    isSpicy: false,
    price: 79,
  },
  {
    name: "Garlic Bread + Toppings",
    desc: "Chilly Onion, Corn, Jalapno",
    img: "/categories/starters/garlictoppingsveg.png",
    isVeg: true,
    isSpicy: false,
    price: 120,
  },
  {
    name: "Garlic Bread + Toppings",
    desc: "Chicken Tikka, Grilled Chicken, Spicy Peri Peri",
    img: "/categories/starters/garlictoppingsnon.png",
    isVeg: false,
    isSpicy: false,
    price: 130,
  },
  {
    name: "Chicken Fingers",
    desc: "Tender strips of breaded chicken fried to perfection",
    img: "/categories/starters/ChickenFingers.png",
    isVeg: false,
    isSpicy: false,
    price: 99,
  },
  {
    name: "Chicken Nuggets",
    desc: "Classic bite-sized breaded chicken nuggets",
    img: "/categories/starters/ChickenNuggets.png",
    isVeg: false,
    isSpicy: false,
    price: 99,
  },
  {
    name: "Chicken Cheese Balls",
    desc: "Savory chicken bites stuffed with a gooey cheese center",
    img: "/categories/starters/ChickenCheeseBalls.png",
    isVeg: false,
    isSpicy: false,
    price: 119,
  },
  {
    name: "Chicken Popcorn",
    desc: "Small, crunchy pieces of seasoned chicken breast",
    img: "/categories/starters/starter3.png",
    isVeg: false,
    isSpicy: false,
    price: 99,
  },
  {
    name: "Veg Stuffed Calzone",
    desc: "Freshly baked dough stuffed with vegetables and melted cheese",
    img: "/categories/starters/VegStuffedCalzone.png",
    isVeg: true,
    isSpicy: true,
    price: 129,
  },
  {
    name: "Non-Veg Stuffed Calzone",
    desc: "Freshly baked dough stuffed with seasoned meat and cheese",
    img: "/categories/starters/NonVegStuffedCalzone.png",
    isVeg: false,
    isSpicy: true,
    price: 129,
  },
]);

type StartersProps = {
  items: SearchableMenuItem[];
};

const Starters = ({ items }: StartersProps) => {
  const results = items;
  const hasResults = results.length > 0;

  if (!hasResults) return null;

  return (
    <div className="flex flex-col gap-4 bg-[#fff6f6]">
      <span className="text-3xl font-semibold bg-[#ed5a5a] text-white px-5 py-3 rounded-t-md">
        Starters
      </span>
      {results.map((item) => (
        <div className="px-4 pb-4 flex" key={`${item.name}-${item.img}`}>
          <MenuItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default Starters;
