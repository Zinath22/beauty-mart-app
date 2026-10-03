




// "use client";

// import Link from "next/link";
// import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
// import NavLink from "../buttons/NavLinks";
// import Logo from "./Logo";
// import { useState } from "react";

// import { useAuth } from "@/provider/AuthProvider";
// import { useCart } from "@/context/CartContext";

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const { cart } = useCart();

//   const [menuOpen, setMenuOpen] = useState(false);

//   const cartCount = cart?.length || 0;

//   const navLinks = (
//     <>
//       <li><NavLink href="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
//       <li><NavLink href="/products" onClick={() => setMenuOpen(false)}>Products</NavLink></li>
//       <li><NavLink href="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
//       <li><NavLink href="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
//     </>
//   );

//   return (
//     // <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
//     <div className="sticky top-0 z-50 bg-base-100 shadow-md border-b-0">

//       {/* <div className="navbar flex items-center justify-between px-3 sm:px-6 py-2 max-w-7xl mx-auto"> */}
//       <div className="navbar flex items-center justify-between px-3 sm:px-6 py-2">

//         {/* LEFT — Logo */}
//         <div className="navbar-start">
//           <Logo />
//         </div>

//         {/* CENTER — Desktop nav */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 gap-1">
//             {navLinks}
//           </ul>
//         </div>

//         {/* RIGHT */}
//         <div className="navbar-end flex items-center gap-2">

//           {/* CART */}
//           <Link href="/cart" className="btn btn-primary btn-sm relative">
//             <FiShoppingCart size={18} />
//             {cartCount > 0 && (
//               <span className="badge badge-secondary badge-xs absolute -top-2 -right-2">
//                 {cartCount}
//               </span>
//             )}
//           </Link>

//           {/* AUTH — Desktop */}
//           {user ? (
//             <div className="hidden lg:flex items-center gap-2">

//               {/* AVATAR DROPDOWN */}
//               <div className="dropdown dropdown-end">
//                 <div
//                   tabIndex={0}
//                   role="button"
//                   className="btn btn-ghost btn-circle avatar placeholder"
//                 >
//                   {user.photoURL ? (
//                     <img
//                       src={user.photoURL}
//                       alt="avatar"
//                       className="w-9 h-9 rounded-full object-cover border-2 border-orange-400"
//                     />
//                   ) : (
//                     <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
//                       {user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "U"}
//                     </div>
//                   )}
//                 </div>

//                 <ul
//                   tabIndex={0}
//                   className="dropdown-content menu bg-base-100 rounded-xl shadow-lg border z-50 w-56 p-2 mt-2"
//                 >
//                   {/* USER INFO */}
//                   <li className="px-3 py-2 border-b mb-1">
//                     <div className="flex flex-col">
//                       <span className="font-semibold text-sm truncate">
//                         {user.name || "User"}
//                       </span>
//                       <span className="text-xs text-gray-400 truncate">
//                         {user.email}
//                       </span>
//                     </div>
//                   </li>

//                   <li>
//                     <Link href="/dashboard" className="flex items-center gap-2 text-sm py-2">
//                       📦 My Orders
//                     </Link>
//                   </li>

//                   {user.role === "admin" && (
//                     <li>
//                       <Link href="/admin" className="flex items-center gap-2 text-sm py-2">
//                         ⚙️ Admin Panel
//                       </Link>
//                     </li>
//                   )}

//                   <li className="border-t mt-1">
//                     <button
//                       onClick={logout}
//                       className="flex items-center gap-2 text-sm text-red-500 py-2 w-full"
//                     >
//                       🚪 Logout
//                     </button>
//                   </li>
//                 </ul>
//               </div>

//             </div>
//           ) : (
//             <Link href="/login" className="hidden lg:flex">
//               <button className="btn btn-primary btn-outline btn-sm">
//                 Login
//               </button>
//             </Link>
//           )}

//           {/* MOBILE MENU BUTTON */}
//           <button
//             className="btn btn-ghost btn-sm lg:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
//           </button>

//         </div>
//       </div>

//       {/* MOBILE DROPDOWN MENU */}
//       {menuOpen && (
//         <div className="lg:hidden bg-base-100 border-t shadow-md px-4 py-4">

//           {/* NAV LINKS */}
//           <ul className="menu w-full gap-1 mb-3">
//             {navLinks}
//           </ul>

//           <div className="border-t pt-3">
//             {user ? (
//               <div className="flex flex-col gap-2">

//                 {/* USER INFO */}
//                 <div className="flex items-center gap-3 px-2 py-2 bg-orange-50 rounded-xl">
//                   {user.photoURL ? (
//                     <img
//                       src={user.photoURL}
//                       alt="avatar"
//                       className="w-10 h-10 rounded-full object-cover border-2 border-orange-400"
//                     />
//                   ) : (
//                     <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
//                       {user.name?.[0]?.toUpperCase() || "U"}
//                     </div>
//                   )}
//                   <div>
//                     <p className="font-semibold text-sm">{user.name || "User"}</p>
//                     <p className="text-xs text-gray-400 truncate">{user.email}</p>
//                   </div>
//                 </div>

//                 <Link
//                   href="/dashboard"
//                   onClick={() => setMenuOpen(false)}
//                   className="btn btn-outline btn-sm w-full"
//                 >
//                   📦 My Orders
//                 </Link>

//                 {user.role === "admin" && (
//                   <Link
//                     href="/admin"
//                     onClick={() => setMenuOpen(false)}
//                     className="btn btn-outline btn-sm w-full"
//                   >
//                     ⚙️ Admin Panel
//                   </Link>
//                 )}

//                 <button
//                   onClick={() => { logout(); setMenuOpen(false); }}
//                   className="btn btn-error btn-sm w-full"
//                 >
//                   🚪 Logout
//                 </button>

//               </div>
//             ) : (
//               <Link
//                 href="/login"
//                 onClick={() => setMenuOpen(false)}
//                 className="btn btn-primary w-full"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Navbar;



"use client";

import Link from "next/link";
import { FiShoppingCart, FiMenu, FiX, FiHeart } from "react-icons/fi";
import NavLink from "../buttons/NavLinks";
import Logo from "./Logo";
import { useState } from "react";

import { useAuth } from "@/provider/AuthProvider";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount    = cart?.length    || 0;
  const wishlistCount = wishlist?.length || 0;

  const navLinks = (
    <>
      <li><NavLink href="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
      <li><NavLink href="/products" onClick={() => setMenuOpen(false)}>Products</NavLink></li>
      <li><NavLink href="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
      <li><NavLink href="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-md border-b-0">

      <div className="navbar flex items-center justify-between px-3 sm:px-6 py-2">

        {/* LEFT — Logo */}
        <div className="navbar-start">
          <Logo />
        </div>

        {/* CENTER — Desktop nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {navLinks}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex items-center gap-2">

          {/* WISHLIST */}
          <Link href="/wishlist" className="btn btn-outline btn-sm relative border-red-300 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500">
            <FiHeart size={18} />
            {wishlistCount > 0 && (
              <span className="badge badge-error badge-xs absolute -top-2 -right-2">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* CART */}
          <Link href="/cart" className="btn btn-primary btn-sm relative">
            <FiShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="badge badge-secondary badge-xs absolute -top-2 -right-2">
                {cartCount}
              </span>
            )}
          </Link>

          {/* AUTH — Desktop */}
          {user ? (
            <div className="hidden lg:flex items-center gap-2">

              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="avatar" className="w-9 h-9 rounded-full object-cover border-2 border-orange-400" />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
                      {user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "U"}
                    </div>
                  )}
                </div>

                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-xl shadow-lg border z-50 w-56 p-2 mt-2">
                  <li className="px-3 py-2 border-b mb-1">
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm truncate">{user.name || "User"}</span>
                      <span className="text-xs text-gray-400 truncate">{user.email}</span>
                    </div>
                  </li>

                  <li>
                    <Link href="/dashboard" className="flex items-center gap-2 text-sm py-2">
                      📦 My Orders
                    </Link>
                  </li>

                  <li>
                    <Link href="/wishlist" className="flex items-center gap-2 text-sm py-2">
                      ❤️ My Wishlist
                      {wishlistCount > 0 && (
                        <span className="badge badge-error badge-sm ml-auto">{wishlistCount}</span>
                      )}
                    </Link>
                  </li>

                  {user.role === "admin" && (
                    <li>
                      <Link href="/admin" className="flex items-center gap-2 text-sm py-2">
                        ⚙️ Admin Panel
                      </Link>
                    </li>
                  )}

                  <li className="border-t mt-1">
                    <button onClick={logout} className="flex items-center gap-2 text-sm text-red-500 py-2 w-full">
                      🚪 Logout
                    </button>
                  </li>
                </ul>
              </div>

            </div>
          ) : (
            <Link href="/login" className="hidden lg:flex">
              <button className="btn btn-primary btn-outline btn-sm">Login</button>
            </Link>
          )}

          {/* MOBILE MENU BUTTON */}
          <button className="btn btn-ghost btn-sm lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-base-100 border-t shadow-md px-4 py-4">

          <ul className="menu w-full gap-1 mb-3">
            {navLinks}
          </ul>

          <div className="border-t pt-3">
            {user ? (
              <div className="flex flex-col gap-2">

                <div className="flex items-center gap-3 px-2 py-2 bg-orange-50 rounded-xl">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="avatar" className="w-10 h-10 rounded-full object-cover border-2 border-orange-400" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
                      {user.name?.[0]?.toUpperCase() || "U"}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-sm">{user.name || "User"}</p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                </div>

                <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="btn btn-outline btn-sm w-full">
                  📦 My Orders
                </Link>

                <Link href="/wishlist" onClick={() => setMenuOpen(false)} className="btn btn-outline btn-sm w-full border-red-300 text-red-500">
                  ❤️ My Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
                </Link>

                {user.role === "admin" && (
                  <Link href="/admin" onClick={() => setMenuOpen(false)} className="btn btn-outline btn-sm w-full">
                    ⚙️ Admin Panel
                  </Link>
                )}

                <button onClick={() => { logout(); setMenuOpen(false); }} className="btn btn-error btn-sm w-full">
                  🚪 Logout
                </button>

              </div>
            ) : (
              <Link href="/login" onClick={() => setMenuOpen(false)} className="btn btn-primary w-full">
                Login
              </Link>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;

