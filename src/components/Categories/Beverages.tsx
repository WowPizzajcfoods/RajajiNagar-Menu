import { normalizeMenuItems, SearchableMenuItem } from "@/lib/menu";
import MenuItem from "../MenuItem";

export const beverageItems = normalizeMenuItems([
  {
    name: "Water",
    desc: "",
    img: "/categories/beverages/Water.png",
    isVeg: true,
    isSpicy: false,
  },
  {
    name: "Coke/Fanta/Sprite/Thumbs-Up",
    desc: "Chilled fizzy soft drink",
    img: "/categories/beverages/beverage1.png",
    isVeg: true,
    isSpicy: false,
  },
  {
    name: "Goli Soda",
    desc: "Lime, Blue Berry, Paneer, Orange, Ginger",
    img: "/categories/beverages/beverage3.png",
    isVeg: true,
    isSpicy: false,
    price: 25,
  }
]);

type BeveragesProps = {
  items: SearchableMenuItem[];
};

const Beverages = ({ items }: BeveragesProps) => {
  const results = items;
  const hasResults = results.length > 0;

  if (!hasResults) return null;

  return (
    <div className="flex flex-col gap-4 bg-[#fff6f6]">
      <span className="text-3xl font-semibold bg-[#ed5a5a] text-white px-5 py-3 rounded-t-md">Beverages</span>
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

export default Beverages;
