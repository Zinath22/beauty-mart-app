// "use client";

// import Link from "next/link";
// import { useAuth } from "@/provider/AuthProvider";

// export default function AdminLayout({ children }) {
//   const { user } = useAuth();

//   // 🔐 protect admin
//   if (user?.role !== "admin") {
//     return <p className="p-5 text-red-500">Access Denied</p>;
//   }

//   return (
//     <div className="flex min-h-screen">

//       {/* 🔥 SIDEBAR */}
//       <div className="w-64 bg-base-200 p-4">
//         <h2 className="text-xl font-bold mb-4">
//           ⚙️ Admin Panel
//         </h2>

//         <ul className="space-y-2">
//           <li>
//             <Link href="/admin/users" className="btn btn-sm w-full">
//               👤 All Users
//             </Link>
//           </li>

//           <li>
//             <Link href="/admin/products" className="btn btn-sm w-full">
//               📦 Manage Products
//             </Link>
//           </li>

//           <li>
//             <Link href="/admin/carts" className="btn btn-sm w-full">
//                       🛒 Manage Carts
//                     </Link>
//           </li>
//           <li>
//             <Link href="/admin/users" className="btn btn-sm w-full">
//           👤 Manage Users
//         </Link>
//           </li>

//           <li>
//              <Link href="/admin/coupons" className="btn btn-sm w-full">
//     🏷️ Manage Coupons
//   </Link>
//           </li>

   
//         </ul>
//       </div>

//       {/* MAIN */}
//       <div className="flex-1 p-5">
//         {children}
//       </div>
//     </div>
//   );
// }



"use client";

import Link from "next/link";
import { useAuth } from "@/provider/AuthProvider";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function AdminLayout({ children }) {
  const { user } = useAuth();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 🔐 protect admin
  if (user?.role !== "admin") {
    return <p className="p-5 text-red-500">Access Denied</p>;
  }

  const links = [
    { href: "/admin/users",    label: "👤 All Users"       },
    { href: "/admin/products", label: "📦 Manage Products"  },
    { href: "/admin/carts",    label: "🛒 Manage Carts"     },
    { href: "/admin/coupons",  label: "🏷️ Manage Coupons"  },
  ];

  const SidebarLinks = () => (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={() => setSidebarOpen(false)}
            className={`btn btn-sm w-full justify-start ${
              pathname === link.href
                ? "btn-primary"
                : "btn-ghost"
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="flex min-h-screen">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:flex w-64 bg-base-200 p-4 flex-col flex-shrink-0">
        <h2 className="text-xl font-bold mb-4">⚙️ Admin Panel</h2>
        <SidebarLinks />
      </div>

      {/* MOBILE SIDEBAR OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-base-200 p-4 z-50 transform transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">⚙️ Admin Panel</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="btn btn-ghost btn-sm"
          >
            <FiX size={20} />
          </button>
        </div>
        <SidebarLinks />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* MOBILE TOP BAR */}
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-base-200 border-b">
          <button
            onClick={() => setSidebarOpen(true)}
            className="btn btn-ghost btn-sm"
          >
            <FiMenu size={20} />
          </button>
          <span className="font-bold text-sm">⚙️ Admin Panel</span>
        </div>

        <div className="flex-1 p-4 sm:p-5">
          {children}
        </div>

      </div>
    </div>
  );
}
