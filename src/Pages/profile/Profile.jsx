import Header from "../../Commons/header/Header";
import Footer from "../../Commons/footer/Footer";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Input, Modal } from "antd";
function Profile() {
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
                className=" flex justify-center gap-5"
                style={{ padding: "60px 60px" }}
            >
                <>
                    <div className="bg-[#eee] w-[30%] p-6 rounded-lg shadow-md">
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
                        <div className="mt-4 flex justify-center flex-wrap ">
                            <button
                                onClick={showModal}
                                className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Chỉnh sửa thông tin
                            </button>
                            <button
                                onClick={showModal1}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Đổi mật khẩu
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
                        <div className="flex gap-4 mb-5">
                            <p className="font-semibold w-[100px]">Address:</p>
                            <p>Bay Area, San Francisco, CA</p>
                        </div>
                        <div>
                            <Link to="/host">
                                <button className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Quản lý sản phẩm
                                </button>
                            </Link>
                            <Link to="/debt">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    Quản lý dư nợ
                                </button>
                            </Link>
                        </div>
                    </div>
                </>
            </div>
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ className: "bg-blue-500" }}
            >
                <div>
                    <h1 className="text-2xl font-bold uppercase mb-5">
                        Chỉnh sửa thông tin
                    </h1>
                    <div className="mb-3">
                        <h2 className="text-lg mb-1">Họ và tên:</h2>
                        <Input placeholder="Họ và tên" />
                    </div>

                    <div className="mb-3">
                        <h2 className="text-lg mb-1">Email:</h2>
                        <Input placeholder="Email" />
                    </div>

                    <div className="mb-3">
                        <h2 className="text-lg mb-1">Số điện thoại:</h2>
                        <Input placeholder="Số điện thoại" />
                    </div>

                    <div className="mb-7">
                        <h2 className="text-lg mb-1">Địa chỉ:</h2>
                        <Input placeholder="Địa chỉ" />
                    </div>
                </div>
            </Modal>

            <Modal
                open={isModalOpen1}
                onOk={handleOk1}
                onCancel={handleCancel1}
                okButtonProps={{ className: "bg-blue-500" }}
            >
                <div>
                    <h1 className="text-2xl font-bold uppercase mb-5">
                        Đổi mật khẩu
                    </h1>
                    <div className="mb-3">
                        <h2 className="text-lg mb-1">Nhập lại mật khẩu cũ:</h2>
                        <Input />
                    </div>
                    <div className="mb-3">
                        <h2 className="text-lg mb-1">Mật khẩu mới:</h2>
                        <Input />
                    </div>
                    <div className="mb-7">
                        <h2 className="text-lg mb-1">Xác nhận mật khẩu:</h2>
                        <Input />
                    </div>
                </div>
            </Modal>

            <Footer />
        </div>
    );
}

export default Profile;
