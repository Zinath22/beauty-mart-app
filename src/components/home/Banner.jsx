



"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const Banner = ({ products = [], activeCoupon = null }) => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // 🔥 Banner Slider Images
  const images = [
    "/assets/banner.png",
    "/assets/banner2.png",
    "/assets/banner3.png",
  ];

  const [current, setCurrent] = useState(0);

  // 🔥 Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 Search Function
  const handleSearch = (value) => {
    setSearch(value);

    if (!value.trim()) {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.title?.toLowerCase().includes(value.toLowerCase()) ||
product.category?.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  // 🔥 Build dynamic coupon text
  const getCouponText = () => {
    if (!activeCoupon) return null;

    const discountText =
      activeCoupon.discountType === "percentage"
        ? `${activeCoupon.discountValue}% OFF`
        : `TK ${activeCoupon.discountValue} OFF`;

    const minText =
      activeCoupon.minOrderAmount > 0
        ? `on orders over TK ${activeCoupon.minOrderAmount}`
        : "on your order";

    const remaining =
      activeCoupon.usageLimit > 0
        ? activeCoupon.usageLimit - activeCoupon.usedCount
        : null;

    const limitText = remaining
      ? `First ${remaining} customers only!`
      : "Limited time offer!";

    return { discountText, minText, limitText };
  };

  const couponInfo = getCouponText();

  return (
    <div className="w-full">

      {/* SEARCH BAR */}
      <div className="px-4 md:px-6 pb-5 relative">

        <div className="flex items-center border-4 border-red-500 rounded-full px-4 md:px-5 py-2 md:py-3 bg-white shadow-md">
          <Search size={22} className="text-gray-500" />

          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search your beauty products"
            className="ml-3 w-full outline-none text-sm md:text-lg"
          />
        </div>

        {/* SEARCH RESULT */}
        {search && (
          <div className="absolute left-4 right-4 md:left-6 md:right-6 bg-white shadow-xl rounded-2xl mt-2 z-50 max-h-72 overflow-y-auto border">

            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  onClick={() =>
                    router.push(`/products/${product._id}`)
                  }
                  className="flex items-center gap-3 p-3 border-b hover:bg-pink-50 transition cursor-pointer"
                >
                  <img
                    src={product.img || "/no-image.png"}
                    alt={product.title}
                    className="w-14 h-14 rounded-lg object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-sm md:text-base">
                      {product.title}
                    </h3>

                    <p className="text-orange-500 font-bold">
                      Tk{product.price}
                    </p>
                    {product.category && (
                        <span className="text-xs bg-orange-100 text-red-600 px-2 py-0.5 rounded-full">
                          {product.category}
                        </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="p-4 text-center text-gray-500">
                No products found
              </p>
            )}
          </div>
        )}
      </div>

      {/* 🏷️ COUPON OFFER BANNER — dynamic, only shows if active coupon exists */}
      {activeCoupon && couponInfo && (
        <div className="mx-4 md:mx-6 mb-4 bg-gradient-to-r from-red-500 to-orange-400 rounded-xl px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-3 shadow-md">

          <div className="flex items-center gap-3 text-white">
            <span className="text-3xl">🎉</span>
            <div>
              <p className="font-bold text-base md:text-lg">
                Get {couponInfo.discountText} {couponInfo.minText}!
              </p>
              <p className="text-sm md:text-base text-orange-100">
                {couponInfo.limitText} Grab it now! 🛍️
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg px-4 py-2 text-center">
              <p className="text-xs text-gray-500 font-medium">Coupon Code</p>
              <p className="text-red-500 font-extrabold text-lg tracking-widest">
                {activeCoupon.code}
              </p>
            </div>

            <button
              onClick={() => router.push("/cart")}
              className="bg-white text-red-500 font-bold px-4 py-2 rounded-lg hover:bg-pink-50 transition text-sm md:text-base whitespace-nowrap"
            >
              Shop Now →
            </button>
          </div>

        </div>
      )}

      {/* BANNER */}
      <div className="mx-4 md:mx-6 relative rounded-xl overflow-hidden h-[300px] md:h-[500px]">

        {/* SLIDER IMAGE */}
        <Image
          src={images[current]}
          alt="Banner"
          fill
          priority
          className="object-cover transition-all duration-500"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* TEXT */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-6">

          <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">
            TREASURE OF GLOW
          </h2>

          <h1 className="text-4xl md:text-8xl font-extrabold text-yellow-300 leading-tight">
            FREE DELIVERY
          </h1>

          <p className="text-lg md:text-2xl mt-3 md:mt-4">
            ON ORDERS OF 1999+
          </p>

          <p className="text-2xl md:text-3xl font-bold mt-2">
            UP TO 35% OFF
          </p>

          <button className="mt-5 md:mt-6 bg-red-500 hover:bg-orange-600 px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transition">
            Shop Now
          </button>

        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 py-5">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition ${
              current === index
                ? "bg-red-500"
                : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

    </div>
  );
};

export default Banner;
