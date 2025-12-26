
import React from "react";
import FilterSection from "./FilterSection";
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  const [sort, setSort] = React.useState("price_low");

  const handleSortProduct = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className="mt-10 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="mb-3">
        <h1 className="text-center  text-2xl md:text-3xl font-semibold tracking-wide text-gray-800 uppercase ">
          Women Sarees
        </h1>
      </div>

      <div className="lg:flex max-w-[1400px] mx-auto">
        {/* Filters */}
        <aside className="hidden lg:block w-[22%] bg-white px-4 py-6">
          <FilterSection />
        </aside>

        {/* Products */}
        <main className="w-full lg:w-[78%] px-4 lg:px-6 space-y-6">
          {/* Sort Bar */}
          <div className="flex justify-between items-center bg-white rounded-lg px-4 py-3 shadow-sm">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold">6</span> products
            </p>

            <FormControl size="small" className="min-w-[180px]">
              <InputLabel>Sort</InputLabel>
              <Select
                value={sort}
                label="Sort"
                onChange={handleSortProduct}
              >
                <MenuItem value="price_low">Price : Low → High</MenuItem>
                <MenuItem value="price_high">Price : High → Low</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Divider />

          {/* Product Grid */}
          <section
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 
                       gap-4 md:gap-6 mt-5"
          >
            {[1, 1, 1, 1, 1, 1].map((_, index) => (
              <ProductCard key={index} item={{
                images: [
                  "https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/green-tissue-saree-with-bead-and-cutdana-embroidery-sg338770-1.jpg?v=1757674612",
                  "https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/green-tissue-saree-with-bead-and-cutdana-embroidery-sg338770-4.jpg?v=1757674612",
                  "https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/green-tissue-saree-with-bead-and-cutdana-embroidery-sg338770-3.jpg?v=1757674612",
                ],
                seller: {
                  businessDetails: { businessName: "Deep Clothing" },
                },
              }} />
            ))}

           
          </section>

           <div className="flex justify-center pt-10">
            <Pagination/>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Products;
