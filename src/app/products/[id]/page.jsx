



import { getSingleProduct } from "@/actions/server/product";
import CartButton from "@/components/buttons/CartButton";
import AddReview from "@/components/review/AddReview";
import ReviewList from "@/components/review/ReviewList";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

// 🔥 Safe image helper
const safeImage = (url) => {
  if (!url) return "/no-image.png";
  if (url.includes("i.ibb.co.com")) return "/no-image.png";
  return url;
};

// 🔥 META DATA FIX
export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = await getSingleProduct(id);

  return {
    title: product?.title || "Product",
    description:
      product?.description?.slice(0, 160) ||
      "Educational toy designed to help kids learn through play.",

    openGraph: {
      title: product?.title,
      description: product?.description || "",
      images: [
        {
          url: safeImage(product?.img || product?.image),
          width: 1200,
          height: 630,
          alt: product?.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product?.title,
      description: product?.description || "",
      images: [safeImage(product?.img || product?.image)],
    },
  };
}

// 🔥 PAGE FIX
const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const product = await getSingleProduct(id);

  if (!product) {
    return (
      <div className="text-center py-20 text-xl">
        Product not found
      </div>
    );
  }

  const {
    title,
    img,
    image,
    price = 0,
    discount = 0,
    ratings = 0,
    reviews = 0,
    sold = 0,
    description,
  } = product;

  const discountedPrice =
    price - (price * (discount || 0)) / 100;

  const finalImage = img || image;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* IMAGE */}
      {/* <div className="rounded-xl overflow-hidden bg-gray-100">
        <Image
          width={600}
          height={420}
          src={safeImage(finalImage)}
          alt={title || "product image"}
          className="w-full h-[420px] object-cover"
        />
      </div> */}

      
<div className="rounded-xl overflow-hidden bg-gray-100">
  <img
    src={safeImage(finalImage)}
    alt={title || "product image"}
    className="w-full h-[420px] object-cover"
  />
</div>

      {/* INFO */}
      <div>
        <h1 className="text-3xl font-bold mb-3">
          {title}
        </h1>

        {/* RATINGS */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(ratings)
                    ? ""
                    : "opacity-30"
                }
              />
            ))}
          </div>

          <span className="text-sm text-gray-600">
            {ratings} ({reviews} reviews) • {sold} sold
          </span>
        </div>

        {/* PRICE */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-primary">
            Tk {discountedPrice || price}
          </span>

          {discount > 0 && (
            <span className="line-through text-gray-400 ml-3">
              Tk {price}
            </span>
          )}
        </div>

        <CartButton product={product} />
      </div>

      {/* DESCRIPTION */}
      <div className="col-span-full mt-6 text-gray-700 leading-relaxed">
        {description?.split("\n\n").map((para, idx) => (
          <p key={idx} className="mb-3">
            {para}
          </p>
        ))}
      </div>

      {/* ⭐ REVIEW SECTION */}
      <div className="col-span-full mt-10">

        <AddReview
          productId={product._id.toString()}
        />

        <ReviewList
          productId={product._id.toString()}
        />

      </div>

    </div>
  );
};

export default ProductDetails;