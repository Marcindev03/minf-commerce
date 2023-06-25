import { getCategories as getBaselinkerCategories } from "@minf-commerce/baselinker";

export const getCategories = async () => {
  const categories = await getBaselinkerCategories();

  return categories;
};
