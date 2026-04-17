import ImageWithLoading from "./ImageWithLoading";
import { memo } from "react";
import { StaticImageData } from "next/image";

type MenuItemData = {
  img: string | StaticImageData;
  name: string;
  desc: string;
  isSpicy: boolean;
  price?: any;
  isVeg?: boolean;
};

type MenuItemProps = {
  item: MenuItemData;
};

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <div className="w-80 flex-1 flex items-center gap-3 md:gap-4 group">
      <div className="p-2 relative h-20 w-20 sm:h-24 sm:w-24 md:h-24 md:w-24 rounded-2xl shadow-md overflow-hidden shrink-0">
        <div className="absolute inset-0">
          <ImageWithLoading
            alt={item.name}
            src={item.img}
            className="p-2 bg-red-100"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <label
          className="text-base md:text-lg font-semibold flex items-center gap-1"
          htmlFor="item"
        >
          <div className="p-0.75 relative h-5 w-5 shrink-0">
            <ImageWithLoading alt={item.isVeg ? "veg" : "nonveg"} src={item.isVeg ? "/icons/veg.svg" : "/icons/nonveg.svg"} />
          </div>
          <span className="truncate">{item.name}</span>
          {item.isSpicy && (
            <div className="p-1 relative h-5 w-5 shrink-0">
              <ImageWithLoading alt="spicy" src="/icons/spicy.svg" />
            </div>
          )}
        </label>
        <span className="text-sm md:text-base text-gray-600" id="item">
          {item.desc}
        </span>
      </div>
      <span className="text-xl md:text-2xl font-bold text-gray-800 shrink-0">
        {item.price ? `₹${item.price}` : `MRP`}
      </span>
    </div>
  );
};

export default memo(MenuItem);
