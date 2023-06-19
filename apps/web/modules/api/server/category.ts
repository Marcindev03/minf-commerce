import { getCategories as getBaselinkerCategories } from "@modules/baselinker";

export const getCategories = async () => {
  const categories = await getBaselinkerCategories();

  return categories;
};
