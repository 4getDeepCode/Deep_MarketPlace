
const GridItem = ({ image, col, row } : any) => {
    return (
        <div className={`${col} ${row} group relative overflow-hidden rounded-2xl`}>

            <img
                src={image}
                alt="fashion"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute bottom-5 left-5 translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <button className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-gray-900 hover:bg-white">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

const Grid = () => {
    return (
        <section className="bg-white py-6">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid h-auto grid-cols-12 grid-rows-12 gap-4 lg:h-[600px]">

                    <GridItem
                        col="col-span-12 md:col-span-3"
                        row="row-span-12"
                        image="https://www.arunvastrabhandar.com/images/cat/sherwani/1.jpg"
                    />

                    <GridItem
                        col="col-span-6 md:col-span-2"
                        row="row-span-6"
                        image="https://5.imimg.com/data5/SELLER/Default/2020/9/WT/OE/CS/102816206/sherwani-shoes-1000x1000.jpg"
                    />

                    <GridItem
                        col="col-span-6 md:col-span-4"
                        row="row-span-6"
                        image="https://www.oorvidesai.co.uk/cdn/shop/files/OMJ_1415_800x.jpg?v=1730135631"
                    />

                    <GridItem
                        col="col-span-12 md:col-span-3"
                        row="row-span-12"
                        image="https://kundansbridalcouture.com/cdn/shop/files/NL21.jpg?v=1713865805&width=720"
                    />

                    <GridItem
                        col="col-span-6 md:col-span-4"
                        row="row-span-6"
                        image="https://images-static.nykaa.com/media/catalog/product/4/5/459410fn73395_1.jpg"
                    />

                    <GridItem
                        col="col-span-6 md:col-span-2"
                        row="row-span-6"
                        image="https://img.weddingbazaar.com/photos/pictures/003/005/009/new_large/ss20211110-24241-1wepuhh.jpg?1636542531"
                    />

                </div>
            </div>
        </section>
    );
};

export default Grid;
