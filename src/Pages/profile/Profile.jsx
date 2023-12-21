import React from "react";
import Header from "../../Commons/header/Header";
import Footer from "../../Commons/footer/Footer";

function Profile() {
    return (
        <div>
            <Header />
            <div
                className=" flex justify-center gap-5"
                style={{ padding: "60px 60px" }}
            >
                <>
                    <div className="bg-[#eee] w-[20%] p-6 rounded-lg shadow-md">
                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h5 className="text-xl mt-4 text-center">John Smith</h5>
                        <p className="text-center text-gray-500">
                            Full Stack Developer
                        </p>
                        <p className="text-center text-gray-500">
                            Bay Area, San Francisco, CA
                        </p>
                        <div className="mt-4 flex justify-center">
                            <button className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Follow
                            </button>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Message
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#eee] w-[40%] p-6 rounded-lg shadow-md">
                        <div className="flex gap-4 mb-4">
                            <p className="font-semibold w-[100px]">
                                Full Name:
                            </p>
                            <p>Johnatan Smith</p>
                        </div>
                        <div className="flex gap-4 mb-4">
                            <p className="font-semibold w-[100px]">Email:</p>
                            <p>example@example.com</p>
                        </div>
                        <div className="flex gap-4 mb-4">
                            <p className="font-semibold w-[100px]">Phone:</p>
                            <p>(097) 234-5678</p>
                        </div>
                        <div className="flex gap-4 mb-4">
                            <p className="font-semibold w-[100px]">Mobile:</p>
                            <p>(098) 765-4321</p>
                        </div>
                        <div className="flex gap-4">
                            <p className="font-semibold w-[100px]">Address:</p>
                            <p>Bay Area, San Francisco, CA</p>
                        </div>
                    </div>
                </>
            </div>
            <div
                className=""
                style={{
                    padding: "0px 60px 60px",
                }}
            >
                <h1 className="text-2xl font-bold uppercase px-6 py-3">
                    Quản lý dư nợ
                </h1>
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
                            <tr className=" border-b ">
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
                            <tr className=" border-b ">
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
            <Footer />
        </div>
    );
}

export default Profile;
