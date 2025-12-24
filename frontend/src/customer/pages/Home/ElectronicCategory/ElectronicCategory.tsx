
import ElectronicCategoryCard from "./ElectronicCategoryCard";

const ElectronicCategory = () => {

    const electronics = [

        {
            section: "ELECTRIC_CATEGORIES",
            name: "Laptop",
            image:
                "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/a/g/p/-original-imahgwkqughzkwt3.jpeg?q=70",

            categoryId: "laptops"
        },
        {
            section: "ELECTRIC_CATEGORIES",

            name: "Mobile",
            image:
                "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/s/k/-original-imahf42ux9g6gvum.jpeg?q=70",

            categoryId: "mobiles"
        },
        {
            section: "ELECTRIC_CATEGORIES",
            name: "Smartwatch",
            image:
                "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/x/j/s/-original-imah4eddxhvzpxhc.jpeg?q=70",

            categoryId: "smart_watches"
        },
        {
            section: "ELECTRIC_CATEGORIES",
            name: "Headphones",
            image:
                "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/n/a/z/-original-imah8syzx9x49v8g.jpeg?q=70",

            categoryId: "headphones_headsets"
        },
        {
            section: "ELECTRIC_CATEGORIES",
            name: "Speaker",
            image:
                "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/h/r/y/-original-imahczhjr4byeawt.jpeg?q=70",

            categoryId: "speakers"
        },
        {
            section: "ELECTRIC_CATEGORIES",
            name: "Tv",
            image:
                "https://rukminim2.flixcart.com/image/312/312/xif0q/television/n/d/e/-original-imahcsfhfmxa5kwk.jpeg?q=70",

            categoryId: "television"
        },
        {
            section: "ELECTRIC_CATEGORIES",
            name: "Camera",
            image:
                "https://rukminim2.flixcart.com/image/612/612/l5fnhjk0/dslr-camera/f/t/m/eos-r10-24-2-r10-canon-original-imagg42fsbgv79da.jpeg?q=70",

            categoryId: "cameras"
        },
    ];


    return (
        <section className="border-b bg-white">
            <div className="mx-auto max-w-7xl px-4 py-6">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6">
                    {electronics.map((item) => (
                        <ElectronicCategoryCard key={item.categoryId} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ElectronicCategory;
