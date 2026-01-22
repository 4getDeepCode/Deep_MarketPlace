import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { colors } from "../../../data/Filter/color";
import { price } from "../../../data/Filter/price";
import { discount } from "../../../data/Filter/discount";
import { teal } from "@mui/material/colors";

const FilterSection = () => {
  const [expendColor, setExpendColor] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleExpendColor = () => {
    setExpendColor(!expendColor);
  };

  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    console.log("clearAllFilters", searchParams);
    searchParams.forEach((key: any) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);
  };

  return (
    <aside className="bg-white sticky top-20 h-full border-r border-gray-300">
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
        <h2 className="text-base font-semibold text-gray-800">Filters</h2>
        <Button
          size="small"
          onClick={clearAllFilters}
          className="!text-teal-600"
        >
          Clear all
        </Button>
      </div>

      <Divider />

      <div className="px-6 py-6 space-y-8">
        {/* COLOR */}

        <section>
          <FormControl sx={{ zIndex: 0 }}>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                pb: "14px",
                color: teal[600],
              }}
              className="text-sm font-semibold uppercase text-gray-700"
              id="color"
            >
              Color
            </FormLabel>
            <RadioGroup
              onChange={updateFilterParams}
              aria-labelledby="color"
              defaultValue=""
              name="color"
            >
              {colors.slice(0, expendColor ? colors.length : 5).map((item) => (
                <FormControlLabel
                  sx={{ fontSize: "12px" }}
                  key={item.name}
                  value={item.name}
                  control={<Radio size="small" />}
                  label={
                    <div className="flex items-center gap-3">
                      <p>{item.name}</p>
                      <span
                        style={{ backgroundColor: item.hex }}
                        className={` h-5 w-5 rounded-full ${
                          item.name === "White" ? "border" : "border"
                        }`}
                      ></span>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>

          <div>
            <button
              onClick={handleExpendColor}
              className="text-teal-600 cursor-pointer hover:text-teal-900 flex items-center"
            >
              {expendColor ? "hide" : `+ ${colors.length - 5} more`}
            </button>
          </div>
        </section>

        <Divider />

        {/* PRICE */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                pb: "14px",
                color: teal[600],
              }}
              className="text-sm font-semibold uppercase text-gray-700 mt-3"
              id="price"
            >
              Price
            </FormLabel>
            <RadioGroup
              name="price"
              onChange={updateFilterParams}
              aria-labelledby="price"
              defaultValue=""
            >
              {price.map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>

        <Divider />

        {/* DISCOUNT */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                pb: "14px",
                color: teal[600],
              }}
              className="text-sm font-semibold uppercase text-gray-700 mt-3"
              id="brand"
            >
              Discount
            </FormLabel>
            <RadioGroup
              name="discount"
              onChange={updateFilterParams}
              aria-labelledby="brand"
              defaultValue=""
            >
              {discount.map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>

      </div>
    </aside>
  );
};

export default FilterSection;
