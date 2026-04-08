export type MenuItemData = {
  img: string;
  name: string;
  desc: string;
  isSpicy: boolean;
  price?: number;
  isVeg?: boolean;
};

export type SearchableMenuItem = MenuItemData & {
  searchText: string;
};

export const normalizeMenuItems = <T extends MenuItemData>(
  items: readonly T[],
): SearchableMenuItem[] =>
  items.map((item) => ({
    ...item,
    searchText: `${item.name} ${item.desc}`.toLowerCase(),
  }));

export const filterMenuItems = <T extends SearchableMenuItem>(
  items: readonly T[],
  searchQuery: string,
  vegOnly: boolean,
) =>
  items.filter(
    (item) => (!vegOnly || item.isVeg) && (searchQuery === "" || item.searchText.includes(searchQuery)),
  );