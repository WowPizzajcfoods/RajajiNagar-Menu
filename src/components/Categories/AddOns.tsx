import { normalizeMenuItems, SearchableMenuItem } from "@/lib/menu";
import MenuItem from "../MenuItem";

export const addOnItems = normalizeMenuItems([
  {
    name: "Cheese",
    desc: "Extra layer of melted creamy cheese",
    img: "/categories/addons/addon1.png",
    isVeg: true,
    isSpicy: false,
    price: 35,
  },
  {
    name: "Veg Toppings",
    desc: "A variety of fresh seasonal vegetables",
    img: "/categories/addons/addon2.png",
    isVeg: true,
    isSpicy: false,
    price: 20,
  },
  {
    name: "BBQ Paneer/Mushroom",
    desc: "Your choice of paneer or mushrooms tossed in smoky BBQ sauce",
    img: "/categories/addons/BBQPaneerMushroom.png",
    isVeg: true,
    isSpicy: false,
    price: 30,
  },
  {
    name: "Non-Veg Toppings",
    desc: "Selection of premium meat toppings",
    img: "/categories/addons/addon3.png",
    isVeg: false,
    isSpicy: false,
    price: 30,
  },
]);

type AddOnsProps = {
  items: SearchableMenuItem[];
};

const AddOns = ({ items }: AddOnsProps) => {
  const results = items;
  const hasResults = results.length > 0;

  if (!hasResults) return null;

  return (
    <div className="flex flex-col gap-4 bg-[#fff6f6]">
      <span className="text-3xl font-semibold bg-[#ed5a5a] text-white px-5 py-3 rounded-t-md">
        Add Ons
      </span>
      {results.map(
        (item) => (
          <div className="px-4 pb-4 flex" key={`${item.name}-${item.img}`}>
            <MenuItem item={item} />
          </div>
        ),
      )}
    </div>
  );
};

export default AddOns;
