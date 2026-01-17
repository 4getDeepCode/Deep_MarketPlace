import { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProductCard from "./ProductCard/ProductCard";
import { useParams, useSearchParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { getAllProducts } from "../../../Redux Toolkit/Customer/ProductSlice";
import { FilterAlt } from "@mui/icons-material";
import * as React from "react";

const Products = () => {
  const [sort, setSort] = React.useState("");
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [showFilter, setShowFilter] = useState(false);
  const { categoryId } = useParams();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((store) => store);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const handleSortProduct = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  const handleShowFilter = () => {
    setShowFilter((prev) => !prev);
    console.log("showFilter   ", showFilter);
  };

  const handlePageChange = (value: any) => {
    setPage(value);
    console.log("page nummmberr ", value);
  };

  useEffect(() => {
    const [minPrice, maxPrice] = searchParams.get("price")?.split("-") || [];
    const newFilters = {
      brand: searchParams.get("brand") || "",
      color: searchParams.get("color") || "",
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      pageNumber: page - 1,
      minDiscount: searchParams.get("discount")
        ? Number(searchParams.get("discount"))
        : undefined,
    };

    dispatch(getAllProducts({ category: categoryId, sort, ...newFilters }));
  }, [searchParams, categoryId, sort, page]);

  return (
    <div className="mt-10 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="mb-3">
        <h1 className="text-center  text-2xl md:text-3xl font-semibold tracking-wide text-gray-800 uppercase ">
          {categoryId?.split("_").map((item) => (
            <span>{item}</span>
          ))}
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
            <div className="relative w-[50%]">
              {!isLarge && (
                <IconButton onClick={handleShowFilter}>
                  <FilterAlt />
                </IconButton>
              )}
              {showFilter && !isLarge && (
                <Box sx={{ zIndex: 3 }} className="absolute top-[60px]">
                  <FilterSection />
                </Box>
              )}
            </div>

            {/* <FormControl size="small" className="min-w-[180px]">
              <InputLabel id="sort">Sort</InputLabel>
              <Select
                labelId="sort"
                id="sort"
                value={sort}
                label="Sort"
                onChange={handleSortProduct}
              >
                <MenuItem value="price_low">Price : Low → High</MenuItem>
                <MenuItem value="price_high">Price : High → Low</MenuItem>
              </Select>
            </FormControl> */}

            <FormControl
              size="small"
              sx={{
                minWidth: 180,
                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                  top: "-2px",
                },
                "& .MuiInputLabel-shrink": {
                  top: "0",
                },
              }}
            >
              <InputLabel id="sort-label">Sort</InputLabel>
              <Select
                labelId="sort-label"
                id="sort"
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
          {products.products?.length > 0 ? (
            <section
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 
                       gap-4 md:gap-6 mt-5"
            >
              {products.products.map((item: any) => (
                <div key={item._id} className="">
                  <ProductCard item={item} categoryId={categoryId} />
                </div>
              ))}
            </section>
          ) : (
            <section className="items-center flex flex-col gap-5 justify-center h-[67vh] border border-gray-300">
              <img
                className="w-80"
                src="https://cdn.pixabay.com/photo/2022/05/28/10/45/oops-7227010_960_720.png"
                alt=""
              />
              <h1 className="font-bold text-xl text-center flex items-center gap-2">
                Product Not Found For{" "}
                <p className="text-primary-color flex gap-2 uppercase">
                  {" "}
                  {categoryId?.split("_").map((item) => (
                    <span>{item}</span>
                  ))}{" "}
                </p>{" "}
              </h1>
            </section>
          )}

          <div className="flex justify-center pt-10">
            <Pagination
              page={page}
              onChange={(_, value) => handlePageChange(value)}
              color="primary"
              count={products?.totalPages}
              shape="rounded"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
