import "./globals.css";
import { Inter } from "next/font/google";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { Providers } from "@modules/providers";
import { ContentContainer, Footer, Navbar } from "@modules/layout";
import {
  fetchCategories,
  fetchProducts,
  getQueryClient,
  useCategoriesQueryKey,
  useProductsQueryKey,
} from "@modules/api/client";
import { Category } from "@modules/api/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MinfCommerce",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([useCategoriesQueryKey], fetchCategories);

  const categories = queryClient.getQueryData([useCategoriesQueryKey]) as {
    data: Category[];
  };

  await Promise.all(
    categories.data.map(
      async ({ name }) =>
        await queryClient.prefetchQuery({
          queryKey: [useProductsQueryKey, name, ""],
          queryFn: () => fetchProducts(),
        })
    )
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Hydrate state={dehydratedState}>
            <Navbar />
            <ContentContainer>
              <main>{children}</main>
            </ContentContainer>
            <Footer />
          </Hydrate>
        </Providers>
      </body>
    </html>
  );
}
