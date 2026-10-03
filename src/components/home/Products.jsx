



// import React from "react";
// import ProductCard from "../cards/ProductCard";
// import { getProducts } from "@/actions/server/product";

// const Products = async () => {
//   const products = await getProducts();

//   return (
//     <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10">

//       {/* TITLE */}
//       <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12">
//         Our Products
//       </h2>

//       {/* GRID */}
//       <div className="
//         grid
//         grid-cols-1
//         sm:grid-cols-2
//         lg:grid-cols-3
//         xl:grid-cols-3
//         gap-4 sm:gap-6 lg:gap-8
//       ">

//         {products?.map((product) => (
//           <ProductCard
//             key={product._id}
//             product={product}
//           />
//         ))}

//       </div>

//     </div>
//   );
// };

// export default Products;

"use client";

import React, { useState } from "react";
import ProductCard from "../cards/ProductCard";

const ITEMS_PER_PAGE = 6;

const CATEGORIES = ["All", "Makeup", "Skin Care", "Cleansing", "Hair Care", "Perfume"];

const Products = ({ products = [] }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage]       = useState(1);
  const [priceRange, setPriceRange]         = useState("All");

  // Filter by category
  const categoryFiltered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Filter by price range
  const filtered = categoryFiltered.filter((p) => {
    const price = Number(p.price);
    if (priceRange === "All")        return true;
    if (priceRange === "under500")   return price < 500;
    if (priceRange === "500to1000")  return price >= 500 && price <= 1000;
    if (priceRange === "above1000")  return price > 1000;
    return true;
  });

  // Pagination
  const totalPages  = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex  = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated   = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handlePrice = (range) => {
    setPriceRange(range);
    setCurrentPage(1);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10">

      {/* TITLE */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
        Our Products
      </h2>

      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`btn btn-sm rounded-full ${
              activeCategory === cat
                ? "btn-primary"
                : "btn-outline btn-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRICE RANGE FILTER */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {[
          { label: "All Price",    value: "All"        },
          { label: "Under TK 500", value: "under500"   },
          { label: "TK 500-1000",  value: "500to1000"  },
          { label: "Above TK 1000",value: "above1000"  },
        ].map((item) => (
          <button
            key={item.value}
            onClick={() => handlePrice(item.value)}
            className={`btn btn-sm rounded-full ${
              priceRange === item.value
                ? "btn-secondary"
                : "btn-outline btn-secondary"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* RESULTS COUNT */}
      <p className="text-center text-sm text-gray-500 mb-6">
        Showing {paginated.length} of {filtered.length} products
      </p>

      {/* PRODUCTS GRID */}
      {paginated.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-gray-500 text-lg">No products found</p>
          <button
            onClick={() => { setActiveCategory("All"); setPriceRange("All"); setCurrentPage(1); }}
            className="btn btn-primary mt-4"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {paginated.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

          {/* PREV */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="btn btn-sm btn-outline btn-primary"
          >
            ← Prev
          </button>

          {/* PAGE NUMBERS */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`btn btn-sm ${
                currentPage === page
                  ? "btn-primary"
                  : "btn-outline btn-primary"
              }`}
            >
              {page}
            </button>
          ))}

          {/* NEXT */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="btn btn-sm btn-outline btn-primary"
          >
            Next →
          </button>

        </div>
      )}

    </div>
  );
};

export default Products;
