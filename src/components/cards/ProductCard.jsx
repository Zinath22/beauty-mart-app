

// import React from "react";
// import Link from "next/link";
// import CartButton from "@/components/buttons/CartButton";

// export default function ProductCard({ product }) {
//   if (!product) return null;

//   return (
//     <div className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:-translate-y-2">

//       {/* IMAGE */}
//       <div className="relative overflow-hidden w-full">
//         <img
//           src={product.img || "/no-image.png"}
//           alt={product.title}
          
//           className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
//         />

//         {/* BADGE */}
//         <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
//           {product.discount || 10}% OFF
//         </span>
//       </div>

//       {/* CONTENT */}
//       <div className="p-5">

//         <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
//           {product.title}
//         </h2>

//         <p className="text-gray-500 text-sm mb-4 line-clamp-2">
//           {product.description}
//         </p>

//         <div className="flex items-center justify-between mb-4">
//           <span className="text-2xl font-extrabold text-primary">
//             Tk {product.price}
//           </span>

//           {/* <span className="bg-pink-100 text-primary px-3 py-1 rounded-full text-sm">
//             ⭐ {product.rating || 4.5}
//           </span> */}

//           <div className="flex items-center gap-1 bg-pink-100 px-3 py-1 rounded-full">
//   <span className="text-yellow-500">
//     ⭐
//   </span>

//   <span className="font-medium">
//     {product.rating || 0}
//   </span>

//   <span className="text-xs text-gray-500">
//     ({product.reviews || 0})
//   </span>
// </div>
//         </div>
        

//        <div className="flex gap-3 mt-4">

//   {/* CART */}
//   <div className="flex-1">
//     <CartButton product={product} />
//   </div>

//   {/* VIEW */}
//   <Link
//     href={`/products/${product._id}`}
//     className="flex-1"
//   >
//     <button className="w-full h-full px-4 py-2.5 rounded-xl border border-rose-300 text-rose-600 font-semibold text-sm sm:text-base
//     hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 hover:text-white
//     transition-all duration-300 shadow-sm hover:shadow-md">
//       View
//     </button>
//   </Link>

// </div>

//       </div>
//     </div>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import CartButton from "@/components/buttons/CartButton";
import { useWishlist } from "@/context/WishlistContext";
import { FaHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  if (!product) return null;

  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product._id);

  return (
    <div className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:-translate-y-2">

      {/* IMAGE */}
      <div className="relative overflow-hidden w-full">
        <img
          src={product.img || "/no-image.png"}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* DISCOUNT BADGE */}
        <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {product.discount || 10}% OFF
        </span>

        {/* WISHLIST BUTTON */}
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition hover:scale-110"
        >
          <FaHeart
            size={18}
            className={inWishlist ? "text-red-500" : "text-gray-300"}
          />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-extrabold text-primary">
            Tk {product.price}
          </span>

          <div className="flex items-center gap-1 bg-pink-100 px-3 py-1 rounded-full">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium">{product.rating || 0}</span>
            <span className="text-xs text-gray-500">({product.reviews || 0})</span>
          </div>
        </div>

        <div className="flex gap-3 mt-4">

          {/* CART */}
          <div className="flex-1">
            <CartButton product={product} />
          </div>

          {/* VIEW */}
          <Link href={`/products/${product._id}`} className="flex-1">
            <button className="w-full h-full px-4 py-2.5 rounded-xl border border-rose-300 text-rose-600 font-semibold text-sm sm:text-base hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
              View
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}
