


// import Banner from "@/components/home/Banner";
// import Products from "@/components/home/Products";
// import { getProducts } from "@/actions/server/product";

// const Home = async () => {
//   // 🔥 LOAD PRODUCTS
//   const products = await getProducts();

//   // 🔥 LOAD ACTIVE COUPON for banner
//   let activeCoupon = null;
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/coupons`,
//       { cache: "no-store" }
//     );
//     const data = await res.json();

//     if (data.success && data.coupons.length > 0) {
//       activeCoupon =
//         data.coupons.find(
//           (c) =>
//             c.isActive &&
//             new Date() < new Date(c.expiryDate) &&
//             (c.usageLimit === 0 || c.usedCount < c.usageLimit)
//         ) || null;
//     }
//   } catch (error) {
//     console.log("COUPON FETCH ERROR:", error.message);
//   }

//   return (
//     <div className="space-y-20">

//       {/* BANNER */}
//       <section>
//         <Banner products={products} activeCoupon={activeCoupon} />
//       </section>

//       {/* PRODUCTS */}
//       <section>
//         <Products products={products} />
//       </section>

//     </div>
//   );
// };

// export default Home;



import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import { getProducts } from "@/actions/server/product";

const Home = async () => {
  // 🔥 LOAD PRODUCTS
  const products = await getProducts();

  // 🔥 LOAD ACTIVE COUPON for banner
  let activeCoupon = null;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/coupons`,
      { cache: "no-store" }
    );
    const data = await res.json();

    if (data.success && data.coupons.length > 0) {
      activeCoupon =
        data.coupons.find(
          (c) =>
            c.isActive &&
            new Date() < new Date(c.expiryDate) &&
            (c.usageLimit === 0 || c.usedCount < c.usageLimit)
        ) || null;
    }
  } catch (error) {
    console.log("COUPON FETCH ERROR:", error.message);
  }

  return (
    <div className="space-y-20">

      {/* BANNER */}
      <section>
        <Banner products={products} activeCoupon={activeCoupon} />
      </section>

      {/* PRODUCTS — products prop দিয়ে পাঠাচ্ছি */}
      <section>
        <Products products={products} />
      </section>

    </div>
  );
};

export default Home;
