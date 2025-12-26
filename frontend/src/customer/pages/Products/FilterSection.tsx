import {
    Button,
    Divider,
    FormControlLabel,   
    Radio,
    RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { colors } from "../../../data/Filter/color";
import { price } from "../../../data/Filter/price";
import { discount } from "../../../data/Filter/discount";

const FilterSection = () => {
    const [expandColor, setExpandColor] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const getParam = (key) => searchParams.get(key) || "";

    const updateFilterParams = (name, value) => {
        const params = new URLSearchParams(searchParams.toString());

        // allow toggle off
        if (params.get(name) === value) {
            params.delete(name);
        } else {
            params.set(name, value);
        }

        setSearchParams(params);
    };

    const clearAllFilters = () => {
        setSearchParams({});
    };

    return (
        <aside className="bg-white sticky top-20 h-full border-r">

            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
                <h2 className="text-base font-semibold text-gray-800">
                    Filters
                </h2>
                <Button
                    size="small"
                    onClick={clearAllFilters}
                    className="!text-teal-600"
                >
                    Clear all
                </Button>
            </div>

            <div className="px-6 py-6 space-y-8">

                {/* COLOR */}
        
                <section>
                    <h3 className="text-sm font-semibold uppercase text-gray-700 ">
                        Color
                    </h3>

                    <RadioGroup
                        key={getParam("color")}   // 🔑 forces rerender
                        value={getParam("color")}
                          name="radio-buttons-group"
                    >
                        {colors
                            .slice(0, expandColor ? colors.length : 5)
                            .map((item) => (
                                <FormControlLabel
                                    key={item.name}
                                    value={item.name}
                                    control={<Radio size="small" />}
                                    onClick={() =>
                                        updateFilterParams("color", item.name)
                                    }
                                    label={
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="h-4 w-4 rounded-full border"
                                                style={{ backgroundColor: item.hex }}
                                            />
                                            <span className="text-sm">
                                                {item.name}
                                            </span>
                                        </div>
                                    }
                                />
                            ))}
                    </RadioGroup>

                    {colors.length > 5 && (
                        <button
                            onClick={() => setExpandColor(!expandColor)}
                            className="text-sm text-teal-600 mt-2 cursor-pointer"
                        >
                            {expandColor
                                ? "Show less"
                                : `+ ${colors.length - 5} more`}
                        </button>
                    )}
                </section>

                <Divider />

                {/* PRICE */}
                <section>
                    <h3 className="text-sm font-semibold uppercase text-gray-700 mt-3">
                        Price
                    </h3>

                    <RadioGroup
                        name="price"
                        onChange={updateFilterParams}
                        aria-labelledby="price"
                        defaultValue=""
                        

                    >
                        {price
                            .map((item) => (
                                <FormControlLabel
                                    key={item.name}
                                    value={item.value}
                                    control={<Radio size="small" />}
                                    label={item.name}
                                />
                            ))}
                    </RadioGroup>
                </section>

                <Divider />

                {/* DISCOUNT */}
                <section>
                    <h3 className="text-sm font-semibold uppercase text-gray-700 mt-3">
                        Discount
                    </h3>

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
                </section>

            </div>
        </aside>
    );
};

export default FilterSection;
