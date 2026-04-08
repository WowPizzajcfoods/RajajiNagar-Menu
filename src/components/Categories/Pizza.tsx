import { normalizeMenuItems, SearchableMenuItem } from "@/lib/menu";
import MenuItem from "../MenuItem";

export const pizzaClassic = normalizeMenuItems([
  {
    name: "Margherita",
    desc: "Topped with layer of cheese",
    img: "/categories/pizzas/pizza1.png",
    isVeg: true,
    isSpicy: false,
    price: 99,
  },
  {
    name: "Simple Veggie",
    desc: "Onion & Capsicum",
    img: "/categories/pizzas/pizza2.png",
    isVeg: true,
    isSpicy: false,
    price: 109,
  },
  {
    name: "Country Fresh",
    desc: "Onion & Tomato",
    img: "/categories/pizzas/CountryFresh.png",
    isVeg: true,
    isSpicy: false,
    price: 109,
  },
  {
    name: "Garden Fresh",
    desc: "Onion, Capcuim, Jalpeno & Roased Garlic",
    img: "/categories/pizzas/GardenFresh.png",
    isVeg: true,
    isSpicy: false,
    price: 109,
  },
  {
    name: "Indian Hot",
    desc: "Onion, Capsicum, Jalapeno, Roasted Garlic",
    img: "/categories/pizzas/pizza5.png",
    isVeg: true,
    isSpicy: true,
    price: 129,
  },
  {
    name: "Garlic Mashroom",
    desc: "Mushroom, Tomato & Roasted Garlic",
    img: "/categories/pizzas/Garlic Mashroom.png",
    isVeg: true,
    isSpicy: true,
    price: 129,
  },
  {
    name: "Sausage Crunch",
    desc: "Chicken Sausage, Onion & Seasoning",
    img: "/categories/pizzas/SausageCrunch.png",
    isVeg: false,
    isSpicy: true,
    price: 129,
  },
  {
    name: "Checken Salamri",
    desc: "Onion, Salami & Red Capscium",
    img: "/categories/pizzas/CheckenSalamri.png",
    isVeg: false,
    isSpicy: false,
    price: 139,
  },
  {
    name: "Sheek Special",
    desc: "Onion, Checken Sheek, Tomato & Green Chilly",
    img: "/categories/pizzas/SheekSpecial.png",
    isVeg: false,
    isSpicy: false,
    price: 139,
  },
]);
export const pizzaSupreme = normalizeMenuItems([
  {
    name: "Veg Feast",
    desc: "Onion, Capsicum, Grilled Chicken, Chicken Tikka & Seasoning",
    img: "/categories/pizzas/pizza6.png",
    isVeg: true,
    isSpicy: false,
    price: 149,
  },
  {
    name: "Red Devil",
    desc: "BBQ Mushroom, Red Capcium & Red Peprika",
    img: "/categories/pizzas/RedDevil.png",
    isVeg: true,
    isSpicy: true,
    price: 149,
  },
  {
    name: "Jugal Bandi",
    desc: "Sweet Corn, Red Paprika, Paneer & Tomato",
    img: "/categories/pizzas/JugalBandi.png",
    isVeg: true,
    isSpicy: false,
    price: 149,
  },
  {
    name: "Paneer Tikka",
    desc: "BBQ Paneer, Onion, Tomato & Green Chilly",
    img: "/categories/pizzas/PaneerTikka.png",
    isVeg: true,
    isSpicy: false,
    price: 149,
  },
  {
    name: "Peppery Paneer Special",
    desc: "Onion, Capcium, Pepper Paneer, Pepper Mushroom, Red Paprika",
    img: "/categories/pizzas/PepperyPaneerSpecial.png",
    isVeg: true,
    isSpicy: false,
    price: 149,
  },
  {
    name: "Veg Supreme",
    desc: "Onion, Sweet Corn, Jalapeno, Red Paprika, Olives & Red Capsicum",
    img: "/categories/pizzas/VegSupreme.png",
    isVeg: true,
    isSpicy: false,
    price: 149,
  },
  {
    name: "Chicken Tikka",
    desc: "Onion, Checken Tikka & Green Chilly",
    img: "/categories/pizzas/ChickenTikka.png",
    isVeg: false,
    isSpicy: false,
    price: 149,
  },
  {
    name: "Super Combo",
    desc: "Onion, Capsicum, Grilled Checken & Olives",
    img: "/categories/pizzas/SuperCombo.png",
    isVeg: false,
    isSpicy: false,
    price: 149,
  },
  {
    name: "Spicy Peri Peri",
    desc: "Peri Peri Checken, Jalapeno, Tomato, Peri Peri Seasoning",
    img: "/categories/pizzas/SpicyPeriPeri.png",
    isVeg: false,
    isSpicy: true,
    price: 159,
  },
  {
    name: "Chicken Supreme",
    desc: "Onion, Tomato, Salami, Chicken Tikka & Red Paprika",
    img: "/categories/pizzas/ChickenSupreme.png",
    isVeg: false,
    isSpicy: true,
    price: 159,
  },
  {
    name: "Chicken Pepper Special",
    desc: "Onion, Capsicum, Pepper Chicke, Pepper Mushroom & Red Paprika",
    img: "/categories/pizzas/ChickenPepperSpecial.png",
    isVeg: false,
    isSpicy: false,
    price: 169,
  },
  {
    name: "Meaty Feast",
    desc: "Salami, Chicken Tikka, Grilled Chicken, Sheek & Red Paprika",
    img: "/categories/pizzas/MeatyFeast.png",
    isVeg: false,
    isSpicy: false,
    price: 169,
  },
]);

type PizzaProps = {
  classicItems: SearchableMenuItem[];
  supremeItems: SearchableMenuItem[];
};

const Pizza = ({ classicItems, supremeItems }: PizzaProps) => {
  const classicResults = classicItems;
  const supremeResults = supremeItems;
  const hasResults = classicResults.length > 0 || supremeResults.length > 0;

  if (!hasResults) return null;

  return (
    <>
      {classicResults.length > 0 && <div className="flex flex-col gap-4 bg-[#fff6f6] rounded-b-2xl">
        <span className="text-3xl font-semibold bg-[#ed5a5a] text-white px-5 py-3 rounded-t-md">
          Pizzas Classic
        </span>
        {classicResults.map(
          (item) => (
            <div className="px-4 pb-4 flex" key={`${item.name}-${item.img}`}>
              <MenuItem item={item} />
            </div>
          ),
        )}
      </div>}
      {classicResults.length > 0 && supremeResults.length > 0 && <br />}
      {supremeResults.length > 0 && <div className="flex flex-col gap-4 bg-[#fff6f6] rounded-b-2xl">
        <span className="text-3xl font-semibold bg-[#ed5a5a] text-white px-5 py-3 rounded-t-xl">
          Pizzas Supreme
        </span>
        {supremeResults.map(
          (item) => (
            <div className="px-4 pb-4 flex" key={`${item.name}-${item.img}`}>
              <MenuItem item={item} />
            </div>
          ),
        )}
      </div>}
    </>
  );
};

export default Pizza;
