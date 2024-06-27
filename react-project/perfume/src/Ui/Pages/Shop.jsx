import React, { useEffect, useState } from "react";
import shopdata from "../../Ui/Components/shopdata.json";
import { Dropdown } from "flowbite-react";
import Cardcom from "../Components/Cardcom";
import Footer from "../Components/Footer";
import { instanceApi } from "../Api/axiosconfig";
import { toast } from "react-toastify";

export default function Shop() {
    let [allData, setAllData] = useState([]);
    let [filter, setFilter] = useState({
        mainCategory: "",
        size: [],
        brand: "",
        gender: "",
        price: {
            gt: 0,
            lt: 10000000,
        },
        discountPercentage: {
            gt: 0,
            lt: 100,
        },
    });

    useEffect(() => {
        async function getData() {
            try {
                let response = await instanceApi("/product/getAll", {
                    params: filter,
                });
                setAllData(response.data.data);
            } catch (error) {
                toast.error("Something went wrong");
            }
        }
        getData();
    }, [filter]);

    const handleSizeChange = (e) => {
        const sizeValue = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setFilter({ ...filter, size: [...filter.size, sizeValue] });
        } else {
            setFilter({ ...filter, size: filter.size.filter(size => size !== sizeValue) });
        }
    };

    return (
        <>
            <h1>{allData.length}</h1>
            <div className="my-4 flex space-x-2 justify-center">
                <Dropdown
                    label="Sort By Brand"
                    className="bg-white border border-black"
                >
                    <Dropdown.Item onClick={() => setFilter({ ...filter, brand: "" })}>
                        All
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter({ ...filter, brand: "newArrivals" })}>
                        New Arrivals
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter({ ...filter, brand: "summerSale" })}>
                        Summer Sale
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter({ ...filter, brand: "diwaliSale" })}>
                        Diwali Sale
                    </Dropdown.Item>
                </Dropdown>

                <Dropdown
                    label="Category"
                    className="bg-white border border-black"
                >
                    <Dropdown.Item
                        onClick={() => setFilter({ ...filter, mainCategory: "" })}
                    >
                        All
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => setFilter({ ...filter, mainCategory: "attar" })}
                    >
                        Attar
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => setFilter({ ...filter, mainCategory: "bodyMist" })}
                    >
                        Body Mist
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => setFilter({ ...filter, mainCategory: "bodySpray" })}
                    >
                        Body Spray
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => setFilter({ ...filter, mainCategory: "gift" })}
                    >
                        Gift
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => setFilter({ ...filter, mainCategory: "combo" })}
                    >
                        Combos
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => setFilter({ ...filter, mainCategory: "perfume" })}
                    >
                        Perfumes
                    </Dropdown.Item>
                </Dropdown>

                <Dropdown label="Size" className="bg-white border border-black">
                    <div className="px-4 py-2">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" value="all" checked={filter.size.includes("all")} onChange={handleSizeChange} />
                            <span>all</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" value="10ml" checked={filter.size.includes("10ml")} onChange={handleSizeChange} />
                            <span>10 ml</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" value="50ml" checked={filter.size.includes("50ml")} onChange={handleSizeChange} />
                            <span>50 ml</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" value="100ml" checked={filter.size.includes("100ml")} onChange={handleSizeChange} />
                            <span>100 ml</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" value="150ml" checked={filter.size.includes("150ml")} onChange={handleSizeChange} />
                            <span>150 ml</span>
                        </label>
                    </div>
                </Dropdown>

                <Dropdown label="Price" className="bg-white border border-black">
                    <Dropdown.Item
                        onClick={() =>
                            setFilter({ ...filter, price: { gt: 0, lt: 10000000 } })
                        }
                    >
                        All
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() =>
                            setFilter({ ...filter, price: { gt: 1000, lt: 2000 } })
                        }
                    >
                        1000-2000
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() =>
                            setFilter({ ...filter, price: { gt: 2000, lt: 3000 } })
                        }
                    >
                        2000-3000
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() =>
                            setFilter({ ...filter, price: { gt: 3000, lt: 4000 } })
                        }
                    >
                        3000-4000
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() =>
                            setFilter({ ...filter, price: { gt: 4000, lt: 5000 } })
                        }
                    >
                        4000-5000
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() =>
                            setFilter({ ...filter, price: { gt: 5000, lt: 6000 } })
                        }
                    >
                        5000-6000
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() =>
                            setFilter({ ...filter, price: { gt: 6000, lt: 7000 } })
                        }
                    >
                        6000-7000
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() =>
                            setFilter({ ...filter, price: { gt: 7000, lt: 8000 } })
                        }
                    >
                        7000-8000
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() =>
                            setFilter({ ...filter, price: { gt: 8000, lt: 9000 } })
                        }
                    >
                        8000-9000
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() =>
                            setFilter({ ...filter, price: { gt: 9000, lt: 10000 } })
                        }
                    >
                        9000-10000
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() =>
                            setFilter({ ...filter, price: { gt: 10000, lt: 20000 } })
                        }
                    >
                        10000 & Above
                    </Dropdown.Item>
                </Dropdown>

                <Dropdown
                    label="Display Gender"
                    dismissOnClick={false}
                    className="bg-white border border-black"
                >
                    <Dropdown.Item onClick={() => setFilter({ ...filter, gender: "" })}>All</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter({ ...filter, gender: "male" })}>Male</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter({ ...filter, gender: "female" })}>Female</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter({ ...filter, gender: "kids" })}>Kids</Dropdown.Item>
                </Dropdown>
            </div>
            <div className="container mx-auto px-4 py-3">
                <div className="relative pb-4 ">
                    <img
                        src="../../public/shop.png"
                        alt="Shop Image"
                        className="w-full "
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <i className="text-white text-5xl font-bold title"> SHOP </i>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {allData.map((item) => (
                        <Cardcom key={item._id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
