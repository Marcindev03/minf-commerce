"use client";
import { useCategoriesQuery } from "@modules/api/client";
import { homepageImage } from "@modules/assets";
import { CustomNextImage } from "@modules/common";
import { ProductsSection } from "@modules/products";

const HomePage = () => {
  const { data } = useCategoriesQuery();

  return (
    <>
      <CustomNextImage
        src={homepageImage}
        alt="homepage image"
        width={1280}
        className="max-h-96 object-cover"
      />

      <ProductsSection title="Najnowsze produkty" />

      {data?.data.map((category) => (
        <ProductsSection
          key={category.category_id}
          title={category.name}
          category={category.name}
        />
      ))}
    </>
  );
};

export default HomePage;
