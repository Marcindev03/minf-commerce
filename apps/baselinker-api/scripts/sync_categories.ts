import "dotenv/config";
import { getCategories } from "@minf-commerce/baselinker";
import { saveCategory } from "@minf-commerce/database";

console.log("Categories syncing....");

const app = async () => {
  const categories = await getCategories();

  await Promise.all(
    categories.map((category) =>
      saveCategory({
        name: category.name,
        baselinkerCategoryId: category.category_id,
      })
    )
  );
};

app()
  .then(() => {
    console.log("Categories syncing done....");
  })
  .catch((err) => {
    console.log(err);
    console.log("Categories syncing error !");
  });
