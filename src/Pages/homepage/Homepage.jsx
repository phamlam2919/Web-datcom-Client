import React, { useEffect, useState } from "react";
import Header from "../../Commons/header/Header";
import Homepage1 from "./Homepage1";
import Homepage2 from "./Homepage2";
import Homepage3 from "./Homepage3";
import Footer from "../../Commons/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Homepage() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");


  const loadHost = async () => {
    if (!token) {
      console.log("Không tìm thấy mã thông báo");
      return;
    }

    const headers = { Authorization: `Bearer ${token}` };
    try {
      const response = await instance.get("hosts", { headers });
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
      if (err.response.data.message === "Hết hạn đăng nhập.") {
        toast.warning(err.response.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        localStorage.removeItem("token");
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      loadHost();
    }
  }, [token, navigate]);


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={500}
        closeOnClick
        pauseOnHover
        draggable={false}
      />
      <div>
        <Header
        // userName={users.userName}
        />
        <Homepage1 />
        <div className="relative">
          <Homepage2 />
          <div
            className="absolute top-0 left-0 w-full"
            style={{ padding: "0 150px" }}
          >
            <h1 className="text-4xl font-semibold mb-4 mt-5">Thương hiệu</h1>
            <h2 className="text-xl font-medium">
              Thương hiệu đa dạng, thỏa sức lựa chọn!
            </h2>

            <div className="flex justify-between gap-5">
              <div className="max-w-[330px] bg-white border border-gray-200 rounded-lg shadow dark:bg-[#FFFFFF] mt-10">
                <Link to="/order">
                  <div>
                    <img
                      className="rounded-t-lg"
                      src="https://images.deliany.co/hc-RWIJNJN5VoTqaV9pCniqjbtqBdCfWH85q_a8j2AU/rs:fill:1000:600:false/g:ce:0:0/czM6Ly9tYWZmaWFjby1jYXJhdmFuLWltYWdlcy1wcm9kdWN0aW9uL2F0dGFjaG1lbnRzL2I3YzM0YmY0LWY2NzgtNDE0Ni1iMWVlLTZiNTkwZmU4Mzk2MC0zNzk5NDE0NzktNjk4MTE1MTM5MDE3ODY0LTUyNzcyOTgzODg0OTU0Mjc1Mjctbi5qcGc.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10">
                        <img
                          className="rounded-full"
                          src="https://images.deliany.co/KZZ0BvWhiZ8ax59O1fzK4a2mDAhzxZvv43Zv7TiMXMM/rs:fill:300:300:false/g:ce:0:0/czM6Ly9tYWZmaWFjby1jYXJhdmFuLWltYWdlcy1wcm9kdWN0aW9uL2F0dGFjaG1lbnRzLzcxOThmOGI0LWRlNDgtNGQ1ZS1hZTEwLTA1ODY3NjU0ZjdmYS16dW13aGVyZS1sb2dvLTIuanBn.jpg"
                          alt=""
                        />
                      </div>
                      <span className="mb-2 text-xl font-bold tracking-tight ">
                        Zumwhere
                      </span>
                    </div>
                    <p className="mb-3 font-normal text-sm text-[#596a4d]">
                      Zumwhere - nơi bắt đầu cuộc vui sau giờ làm với những món
                      ăn fusion đa dạng, những ly bia thủ công, rượu và cocktail
                      phong phú giúp mọi người gần nhau hơn.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="max-w-[330px] bg-white border border-gray-200 rounded-lg shadow dark:bg-[#FFFFFF] mt-10">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="https://images.deliany.co/hc-RWIJNJN5VoTqaV9pCniqjbtqBdCfWH85q_a8j2AU/rs:fill:1000:600:false/g:ce:0:0/czM6Ly9tYWZmaWFjby1jYXJhdmFuLWltYWdlcy1wcm9kdWN0aW9uL2F0dGFjaG1lbnRzL2I3YzM0YmY0LWY2NzgtNDE0Ni1iMWVlLTZiNTkwZmU4Mzk2MC0zNzk5NDE0NzktNjk4MTE1MTM5MDE3ODY0LTUyNzcyOTgzODg0OTU0Mjc1Mjctbi5qcGc.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10">
                      <img
                        className="rounded-full"
                        src="https://images.deliany.co/KZZ0BvWhiZ8ax59O1fzK4a2mDAhzxZvv43Zv7TiMXMM/rs:fill:300:300:false/g:ce:0:0/czM6Ly9tYWZmaWFjby1jYXJhdmFuLWltYWdlcy1wcm9kdWN0aW9uL2F0dGFjaG1lbnRzLzcxOThmOGI0LWRlNDgtNGQ1ZS1hZTEwLTA1ODY3NjU0ZjdmYS16dW13aGVyZS1sb2dvLTIuanBn.jpg"
                        alt=""
                      />
                    </div>
                    <span className="mb-2 text-xl font-bold tracking-tight ">
                      Zumwhere
                    </span>
                  </div>
                  <p className="mb-3 font-normal text-sm text-[#596a4d]">
                    Zumwhere - nơi bắt đầu cuộc vui sau giờ làm với những món ăn
                    fusion đa dạng, những ly bia thủ công, rượu và cocktail
                    phong phú giúp mọi người gần nhau hơn.
                  </p>
                </div>
              </div>

              <div className="max-w-[330px] bg-white border border-gray-200 rounded-lg shadow dark:bg-[#FFFFFF] mt-10">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="https://images.deliany.co/hc-RWIJNJN5VoTqaV9pCniqjbtqBdCfWH85q_a8j2AU/rs:fill:1000:600:false/g:ce:0:0/czM6Ly9tYWZmaWFjby1jYXJhdmFuLWltYWdlcy1wcm9kdWN0aW9uL2F0dGFjaG1lbnRzL2I3YzM0YmY0LWY2NzgtNDE0Ni1iMWVlLTZiNTkwZmU4Mzk2MC0zNzk5NDE0NzktNjk4MTE1MTM5MDE3ODY0LTUyNzcyOTgzODg0OTU0Mjc1Mjctbi5qcGc.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10">
                      <img
                        className="rounded-full"
                        src="https://images.deliany.co/KZZ0BvWhiZ8ax59O1fzK4a2mDAhzxZvv43Zv7TiMXMM/rs:fill:300:300:false/g:ce:0:0/czM6Ly9tYWZmaWFjby1jYXJhdmFuLWltYWdlcy1wcm9kdWN0aW9uL2F0dGFjaG1lbnRzLzcxOThmOGI0LWRlNDgtNGQ1ZS1hZTEwLTA1ODY3NjU0ZjdmYS16dW13aGVyZS1sb2dvLTIuanBn.jpg"
                        alt=""
                      />
                    </div>
                    <span className="mb-2 text-xl font-bold tracking-tight ">
                      Zumwhere
                    </span>
                  </div>
                  <p className="mb-3 font-normal text-sm text-[#596a4d]">
                    Zumwhere - nơi bắt đầu cuộc vui sau giờ làm với những món ăn
                    fusion đa dạng, những ly bia thủ công, rượu và cocktail
                    phong phú giúp mọi người gần nhau hơn.
                  </p>
                </div>
              </div>
              <div className="max-w-[330px] bg-white border border-gray-200 rounded-lg shadow dark:bg-[#FFFFFF] mt-10">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="https://images.deliany.co/hc-RWIJNJN5VoTqaV9pCniqjbtqBdCfWH85q_a8j2AU/rs:fill:1000:600:false/g:ce:0:0/czM6Ly9tYWZmaWFjby1jYXJhdmFuLWltYWdlcy1wcm9kdWN0aW9uL2F0dGFjaG1lbnRzL2I3YzM0YmY0LWY2NzgtNDE0Ni1iMWVlLTZiNTkwZmU4Mzk2MC0zNzk5NDE0NzktNjk4MTE1MTM5MDE3ODY0LTUyNzcyOTgzODg0OTU0Mjc1Mjctbi5qcGc.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10">
                      <img
                        className="rounded-full"
                        src="https://images.deliany.co/KZZ0BvWhiZ8ax59O1fzK4a2mDAhzxZvv43Zv7TiMXMM/rs:fill:300:300:false/g:ce:0:0/czM6Ly9tYWZmaWFjby1jYXJhdmFuLWltYWdlcy1wcm9kdWN0aW9uL2F0dGFjaG1lbnRzLzcxOThmOGI0LWRlNDgtNGQ1ZS1hZTEwLTA1ODY3NjU0ZjdmYS16dW13aGVyZS1sb2dvLTIuanBn.jpg"
                        alt=""
                      />
                    </div>
                    <span className="mb-2 text-xl font-bold tracking-tight ">
                      Zumwhere
                    </span>
                  </div>
                  <p className="mb-3 font-normal text-sm text-[#596a4d]">
                    Zumwhere - nơi bắt đầu cuộc vui sau giờ làm với những món ăn
                    fusion đa dạng, những ly bia thủ công, rượu và cocktail
                    phong phú giúp mọi người gần nhau hơn.
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <h1 className="text-3xl font-bold text-center mt-14  ">
                Vì sao chọn cơm RA?
              </h1>
              <div className="flex justify-center mt-5 mb-5">
                <img
                  className="w-[150px]"
                  src="https://anzi.com.vn/images/icon/graphic-nomal.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center mb-10">
                <p className="text-center w-[800px]">
                  Đến với Anzi, bạn không cần bận tâm các vấn đề vệ sinh an toàn
                  thực phẩm. Với nguyên tắc "Cái đức đặt lên hàng đầu", thức ăn
                  từ khâu chọn lọc đến khâu chế biến đều được đội ngũ bếp chăm
                  chút kỹ lưỡng !
                </p>
              </div>
              <div className="flex justify-between">
                <div
                  className="flex flex-col items-center text-center w-[400px]"
                  style={{
                    borderRight: "1px dashed #ccc",
                    // borderBottom: "1px dashed #ccc",
                    padding: "20px 20px 0",
                  }}
                >
                  <div>
                    <img
                      className="w-[100px]"
                      src="https://anzi.com.vn/upload/post/why/02102018231203.png"
                      alt=""
                    />
                  </div>
                  <p className="text-xl text-[#303030] font-bold mb-4 mt-4">
                    Nguồn thực phẩm tươi, sạch
                  </p>
                  <p>
                    Thực phẩm chọn lọc kỹ càng, cam kết không sử dụng các hoá
                    chất nhầm mục đích lợi nhuận{" "}
                  </p>
                </div>

                <div
                  className="flex flex-col items-center text-center w-[400px]"
                  style={{
                    borderRight: "1px dashed #ccc",
                    // borderBottom: "1px dashed #ccc",
                    padding: "20px 20px 0",
                  }}
                >
                  <div>
                    <img
                      className="w-[100px]"
                      src="https://anzi.com.vn/upload/post/why/02102018231222.png"
                      alt=""
                    />
                  </div>
                  <p className="text-xl text-[#303030] font-bold mb-4 mt-4">
                    Đặt trưng hương vị miền tây
                  </p>
                  <p>
                    Món ăn chế biến khẩu vị đậm đà, đặc trưng hương vị Miền Tây
                    vừa miệng nhiều thực khách
                  </p>
                </div>

                <div
                  className="flex flex-col items-center text-center w-[400px]"
                  style={{
                    // borderRight: "1px dashed #ccc",
                    // borderBottom: "1px dashed #ccc",
                    padding: "20px 20px 0",
                  }}
                >
                  <div>
                    <img
                      className="w-[100px]"
                      src="https://anzi.com.vn/upload/post/why/02102018231244.png"
                      alt=""
                    />
                  </div>
                  <p className="text-xl text-[#303030] font-bold mb-4 mt-4">
                    Thực đơn đổi mới mỗi ngày
                  </p>
                  <p>
                    Thực đơn mới mỗi ngày, thường xuyên có các món mới lạ, không
                    gây cảm giác gây ngán ăn
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-7">
                <div
                  className="flex flex-col items-center text-center w-[400px]"
                  style={{
                    borderRight: "1px dashed #ccc",
                    padding: "20px 20px 0",
                  }}
                >
                  <div>
                    <img
                      className="w-[100px]"
                      src="https://anzi.com.vn/upload/post/why/02102018231316.png"
                      alt=""
                    />
                  </div>
                  <p className="text-xl text-[#303030] font-bold mb-4 mt-4">
                    Giao nhanh chóng, đúng giờ
                  </p>
                  <p>
                    Cố gắng giao thức ăn đến tay khách hàng nhanh nhất, món ăn
                    vẫn còn nóng. Shipper dễ thương
                  </p>
                </div>

                <div
                  className="flex flex-col items-center text-center w-[400px]"
                  style={{
                    borderRight: "1px dashed #ccc",
                    // borderBottom: "1px dashed #ccc",
                    padding: "20px 20px 0",
                  }}
                >
                  <div>
                    <img
                      className="w-[100px]"
                      src="https://anzi.com.vn/upload/post/why/02102018231341.png"
                      alt=""
                    />
                  </div>
                  <p className="text-xl text-[#303030] font-bold mb-4 mt-4">
                    Phần cơm đầy đủ chất dinh dưỡng
                  </p>
                  <p>
                    Mỗi phần cơm RK gồm có: cơm, món mặn, canh, rau xào, trái
                    cây tráng miệng, tăm và khăn ước
                  </p>
                </div>

                <div
                  className="flex flex-col items-center text-center w-[400px]"
                  style={{
                    // borderRight: "1px dashed #ccc",
                    // borderBottom: "1px dashed #ccc",
                    padding: "20px 20px 0",
                  }}
                >
                  <div>
                    <img
                      className="w-[100px]"
                      src="	https://anzi.com.vn/upload/post/why/02102018231401.png"
                      alt=""
                    />
                  </div>
                  <p className="text-xl text-[#303030] font-bold mb-4 mt-4">
                    Luôn lắng nghe khách hàng
                  </p>
                  <p>
                    Đội ngũ RK luôn lắng nghe mọi ý kiến khách hàng để cải thiện
                    chất lượng dịch vụ
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Homepage3 />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
