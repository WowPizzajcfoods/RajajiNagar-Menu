import { normalizeMenuItems, SearchableMenuItem } from "@/lib/menu";
import MenuItem from "../MenuItem";

export const desserItems = normalizeMenuItems([
  {
    name: "Brownie",
    desc: "Rich and fudgy chocolate brownie",
    img: "/categories/desserts/desserts1.png",
    isVeg: true,
    isSpicy: false,
    price: 49,
  },
  {
    name: "Choco Lava",
    desc: "Pure chocolate decadence with a velvety molten core",
    img: "/categories/desserts/ChocoLava.png",
    isVeg: true,
    isSpicy: false,
    price: 69,
  },
  {
    name: "Dutch Truffle Cake",
    desc: "Decadent chocolate cake with smooth truffle ganache",
    img: "/categories/desserts/desserts2.png",
    isVeg: true,
    isSpicy: false,
    price: 49,
  },
]);

type DessertsProps = {
  items: SearchableMenuItem[];
};

const Desserts = ({ items }: DessertsProps) => {
  const results = items;
  const hasResults = results.length > 0;

  if (!hasResults) return null;

  return (
    <div className="flex flex-col gap-4 bg-[#fff6f6]">
      <span className="text-3xl font-semibold bg-[#ed5a5a] text-white px-5 py-3 rounded-t-md">
        Desserts
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

export default Desserts;
