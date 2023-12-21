import Header from "../../Commons/header/Header";
import Footer from "../../Commons/footer/Footer";
import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Button, Modal } from "antd";
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
};
function Host() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }
        if (info.file.status === "done") {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const showModal1 = () => {
        setIsModalOpen1(true);
    };
    const handleOk1 = () => {
        setIsModalOpen1(false);
    };
    const handleCancel1 = () => {
        setIsModalOpen1(false);
    };
    return (
        <div>
            <Header />
            <div
                className="mt-10 "
                style={{
                    padding: "0px 60px",
                }}
            >
                <div className="">
                    <div className="flex gap-5">
                        <h1 className="text-2xl font-bold uppercase">
                            Danh sách món ăn
                        </h1>
                        <Button onClick={showModal1}>
                            <h1 className="text-xl font-bold uppercase mb-5">
                                Thêm mới món ăn
                            </h1>
                        </Button>
                    </div>
                    <div className="flex gap-6 flex-wrap">
                        <div className="w-[330px] bg-white border border-gray-200 rounded-lg shadow dark:bg-[#FFFFFF] mt-10">
                            <div className="w-full h-[246px]">
                                <img
                                    className="rounded-t-lg w-full h-full"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuII-gcB7vnNGai3UjeD9k6laxIF1zo6Spg&usqp=CAU"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 flex gap-5 items-center justify-between">
                                <div>
                                    <h4 className="text-2xl font-semibold">
                                        Bánh mì thịt
                                    </h4>
                                    <p>20.000đ</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        className="border-none w-[40px] h-[40px] rounded-full leading-[30px] p-0.5"
                                        style={{
                                            border: "1px solid black",
                                        }}
                                        onClick={showModal}
                                    >
                                        <i className="fa-solid fa-pen-to-square text-base"></i>
                                    </Button>
                                    <div
                                        className="w-[40px] h-[40px] rounded-full text-center leading-[40px]"
                                        style={{ border: "1px solid black" }}
                                    >
                                        <i className="fa-solid fa-trash text-base hover:text-red-500"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[330px] bg-white border border-gray-200 rounded-lg shadow dark:bg-[#FFFFFF] mt-10">
                            <div className="w-full h-[246px]">
                                <img
                                    className="rounded-t-lg w-full h-full"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuII-gcB7vnNGai3UjeD9k6laxIF1zo6Spg&usqp=CAU"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 flex gap-5 items-center justify-between">
                                <div>
                                    <h4 className="text-2xl font-semibold">
                                        Bánh mì thịt
                                    </h4>
                                    <p>20.000đ</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        className="border-none w-[40px] h-[40px] rounded-full leading-[30px] p-0.5"
                                        style={{
                                            border: "1px solid black",
                                        }}
                                        onClick={showModal}
                                    >
                                        <i className="fa-solid fa-pen-to-square text-base"></i>
                                    </Button>
                                    <div
                                        className="w-[40px] h-[40px] rounded-full text-center leading-[40px]"
                                        style={{ border: "1px solid black" }}
                                    >
                                        <i className="fa-solid fa-trash text-base hover:text-red-500"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className=""
                style={{
                    padding: "60px 60px",
                }}
            >
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
            <Footer />
            <Modal
                open={isModalOpen1}
                onOk={handleOk1}
                onCancel={handleCancel1}
                okButtonProps={{ className: "bg-blue-500" }}
            >
                <div className="">
                    <h1 className="text-2xl font-bold uppercase mb-5">
                        Thêm mới món ăn
                    </h1>
                    <div>
                        <textarea
                            id="message"
                            rows={10}
                            className="w-full block p-2.5 text-sm text-gray-200 bg-gray-50 rounded-lg border  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black "
                            placeholder="Write your thoughts here..."
                            defaultValue={""}
                        />
                    </div>
                    <div className=" mt-5">
                        <input
                            className="w-full rounded-md h-12 p-2.5"
                            placeholder="Giá tiền"
                            type="text"
                            style={{ border: "1px solid black" }}
                        />
                    </div>
                    <div className="flex gap-5 items-center">
                        <>
                            <Upload
                                name="avatar"
                                listType="picture-circle"
                                className="avatar-uploader mt-5"
                                showUploadList={false}
                                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt="avatar"
                                        style={{
                                            width: "100%",
                                        }}
                                    />
                                ) : (
                                    uploadButton
                                )}
                            </Upload>
                        </>
                        <button className="text-white bg-[#E25319] w-[150px] rounded-2xl h-[54px]">
                            Lưu
                        </button>
                    </div>
                </div>
            </Modal>

            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ className: "bg-blue-500" }}
            >
                <h1 className="text-2xl mb-4 font-semibold">
                    Chỉnh sửa món ăn
                </h1>
                <p className="mb-1 text-lg">Tên món ăn:</p>
                <input
                    type="text"
                    className="w-full rounded-md h-8 p-2.5 mb-4"
                    style={{ border: "1px solid black" }}
                />

                <p className="mb-1 text-lg">Giá tiền:</p>
                <input
                    type="text"
                    className="w-full rounded-md h-8 p-2.5 mb-4"
                    style={{ border: "1px solid black" }}
                />
            </Modal>
        </div>
    );
}

export default Host;
