import { normalizeMenuItems, SearchableMenuItem } from "@/lib/menu";
import MenuItem from "../MenuItem";

export const mealBoxItems = normalizeMenuItems([
  {
    name: "Veg Classic",
    desc: "Mini Cheese Garlic Bread, French Fries/Potato Chilly Pops & Coke",
    img: "/categories/mealbox/VegClassic.png",
    isVeg: true,
    isSpicy: false,
    price: 199,
  },
  {
    name: "Veg Supreme Meal Box",
    desc: "Paneer Tikka Pizza, Mini Cheese Garlic Bread, French Fries/Potato Chilly Pops & Coke",
    img: "/categories/mealbox/VegSupreme.png",
    isVeg: true,
    isSpicy: false,
    price: 249,
  },
  {
    name: "Non Veg Classic",
    desc: "Chicken Salmani Pizza, Mini Cheese Garlic Bread, French Fries/Chicken Popcorn & Coke",
    img: "/categories/mealbox/NonVegClassic.png",
    isVeg: false,
    isSpicy: false,
    price: 249,
  },
  {
    name: "Non Veg Supreme Meal Box",
    desc: "Chicken Tikka Pizza, Mini Cheese Garlic Bread, French Fries/Chicken Popcorn & Coke",
    img: "/categories/mealbox/NonVegSupreme.png",
    isVeg: false,
    isSpicy: false,
    price: 259,
  },
]);

type MealBoxProps = {
  items: SearchableMenuItem[];
};

const MealBox = ({ items }: MealBoxProps) => {
  const results = items;
  const hasResults = results.length > 0;

  if (!hasResults) return null;

  return (
    <div className="flex flex-col gap-4 bg-[#fff6f6]">
      <span className="text-3xl font-semibold bg-[#ed5a5a] text-white px-5 py-3 rounded-t-md">
        Meal Box
      </span>
      {results.map((item) => (
        <div className="px-4 pb-4 flex" key={`${item.name}-${item.img}`}>
          <MenuItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default MealBox;
