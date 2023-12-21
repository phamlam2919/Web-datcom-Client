import React from "react";
import Header from "../../Commons/header/Header";
import { InputNumber } from "antd";
import Footer from "../../Commons/footer/Footer";

function Order() {
    const onChange = (value) => {
        console.log("changed", value);
    };
    return (
        <div>
            <Header />
            <div
                className="flex gap-5 mb-10 mt-5"
                style={{ padding: "12px 60px" }}
            >
                <div className="w-1/2">
                    <div className=" mb-10">
                        <h1 className="text-2xl font-bold uppercase mb-5">
                            Danh sách món ăn
                        </h1>
                        <>
                            <select
                                id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected="">Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </>
                    </div>

                    <div className="flex gap-5 flex-wrap">
                        <div className="w-[47%]">
                            <div
                                className="p-2 rounded-lg"
                                style={{ border: "1px solid black" }}
                            >
                                <div className="flex gap-5 justify-between items-center">
                                    <div className="flex gap-5 items-center">
                                        <div className="w-[120px]">
                                            <img
                                                className="w-full rounded-lg"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuII-gcB7vnNGai3UjeD9k6laxIF1zo6Spg&usqp=CAU"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold">
                                                Bánh mì thịt
                                            </h4>
                                            <p className="mt-1 mb-1">20.000đ</p>
                                            <InputNumber
                                                min={1}
                                                max={10}
                                                defaultValue={1}
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[47%]">
                            <div
                                className="p-2 rounded-lg"
                                style={{ border: "1px solid black" }}
                            >
                                <div className="flex gap-5 justify-between items-center">
                                    <div className="flex gap-5 items-center">
                                        <div className="w-[120px]">
                                            <img
                                                className="w-full rounded-lg"
                                                src="https://static.vinwonders.com/production/pho-bo-ha-noi.jpeg"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold">
                                                Phở bò Việt Nam
                                            </h4>
                                            <p className="mt-1 mb-1">50.000đ</p>
                                            <InputNumber
                                                min={1}
                                                max={10}
                                                defaultValue={1}
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[47%]">
                            <div
                                className="p-2 rounded-lg"
                                style={{ border: "1px solid black" }}
                            >
                                <div className="flex gap-5 justify-between items-center">
                                    <div className="flex gap-5 items-center">
                                        <div className="w-[120px]">
                                            <img
                                                className="w-full rounded-lg"
                                                src="https://static.vinwonders.com/production/pho-bo-ha-noi.jpeg"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold">
                                                Phở bò Việt Nam
                                            </h4>
                                            <p className="mt-1 mb-1">50.000đ</p>
                                            <InputNumber
                                                min={1}
                                                max={10}
                                                defaultValue={1}
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 mt-12">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right  ">
                            <thead className="text-xs  uppercase border-b">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">Silver</td>
                                    <td className="px-6 py-4">Laptop</td>
                                    <td className="px-6 py-4">$2999</td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">White</td>
                                    <td className="px-6 py-4">Laptop PC</td>
                                    <td className="px-6 py-4">$1999</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Order;
