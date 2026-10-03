


// import React from 'react';
// import Logo from './Logo';

// const Footer = () => {
//     return (
//         <div className="w-full">
//             <div className="footer w-full max-w-none bg-base-300 text-base-content p-10 flex justify-between">
                
//                 <div>
//                     <Logo />
//                 </div>

//                 <nav>
//                     <h6 className="footer-title">Services</h6>
//                     <a className="link link-hover">Branding</a>
//                     <a className="link link-hover">Design</a>
//                     <a className="link link-hover">Marketing</a>
//                     <a className="link link-hover">Advertisement</a>
//                 </nav>

//                 <nav>
//                     <h6 className="footer-title">Company</h6>
//                     <a className="link link-hover">About us</a>
//                     <a className="link link-hover">Contact</a>
//                     <a className="link link-hover">Jobs</a>
//                     <a className="link link-hover">Press kit</a>
//                 </nav>

//                 <nav>
//                     <h6 className="footer-title">Legal</h6>
//                     <a className="link link-hover">Terms of use</a>
//                     <a className="link link-hover">Privacy policy</a>
//                     <a className="link link-hover">Cookie policy</a>
//                 </nav>

//             </div>
//         </div>
//     );
// };

// export default Footer;



// import React from 'react';
// import Logo from './Logo';

// const Footer = () => {
//     return (
//         <div className="w-full bg-base-300">

//             {/* MAIN FOOTER */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//                     {/* LOGO + DESC */}
//                     <div className="col-span-1 sm:col-span-2 lg:col-span-1">
//                         <Logo />
//                         <p className="text-sm text-gray-500 mt-3 leading-relaxed">
//                             Your one-stop beauty destination. Quality products for your everyday glow.
//                         </p>
//                     </div>

//                     {/* SERVICES */}
//                     <nav className="flex flex-col gap-2">
//                         <h6 className="footer-title">Services</h6>
//                         <a className="link link-hover text-sm">Branding</a>
//                         <a className="link link-hover text-sm">Design</a>
//                         <a className="link link-hover text-sm">Marketing</a>
//                         <a className="link link-hover text-sm">Advertisement</a>
//                     </nav>

//                     {/* COMPANY */}
//                     <nav className="flex flex-col gap-2">
//                         <h6 className="footer-title">Company</h6>
//                         <a className="link link-hover text-sm">About us</a>
//                         <a className="link link-hover text-sm">Contact</a>
//                         <a className="link link-hover text-sm">Jobs</a>
//                         <a className="link link-hover text-sm">Press kit</a>
//                     </nav>

//                     {/* LEGAL */}
//                     <nav className="flex flex-col gap-2">
//                         <h6 className="footer-title">Legal</h6>
//                         <a className="link link-hover text-sm">Terms of use</a>
//                         <a className="link link-hover text-sm">Privacy policy</a>
//                         <a className="link link-hover text-sm">Cookie policy</a>
//                     </nav>

//                 </div>
//             </div>

//             {/* BOTTOM BAR */}
//             <div className="border-t border-base-content/10">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
//                     <p className="text-xs text-gray-400">
//                         © {new Date().getFullYear()} BeautyMart. All rights reserved.
//                     </p>
//                     <p className="text-xs text-gray-400">
//                         Made with ❤️ for beauty lovers
//                     </p>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Footer;



import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-white border-t">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* LOGO + ABOUT */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Logo />

            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-primary transition">
                  Beauty Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary transition">
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary transition">
                  Authenticity
                </Link>
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="mt-5">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                Share Your Love
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition text-gray-600">
                  <FaFacebookF size={13} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition text-gray-600">
                  <FaTwitter size={13} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition text-gray-600">
                  <FaYoutube size={13} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition text-gray-600">
                  <FaInstagram size={13} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition text-gray-600">
                  <FaPinterestP size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* TOP CATEGORIES */}
          <nav className="flex flex-col gap-2">
            <h6 className="text-sm font-bold text-primary uppercase tracking-widest mb-1">
              Top Categories
            </h6>
            {["Makeup", "Skin Care", "Hair Care", "Personal Care", "Fragrance", "Mom & Baby"].map((item) => (
              <Link
                key={item}
                href="/products"
                className="text-sm text-gray-600 hover:text-primary transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* QUICK LINKS */}
          <nav className="flex flex-col gap-2">
            <h6 className="text-sm font-bold text-primary uppercase tracking-widest mb-1">
              Quick Links
            </h6>
            {["Offers", "New Arrivals", "Best Sellers", "Gift Sets", "Skin Concerns", "Men Products"].map((item) => (
              <Link
                key={item}
                href="/"
                className="text-sm text-gray-600 hover:text-primary transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* ALL ABOUT BEAUTY */}
          <nav className="flex flex-col gap-2">
            <h6 className="text-sm font-bold text-primary uppercase tracking-widest mb-1">
              All About Beauty
            </h6>
            {["Know Your Routine", "Hair Care 101", "Skin Care 101", "Makeup 101", "Beauty Tips", "Ingredients"].map((item) => (
              <Link
                key={item}
                href="/blog"
                className="text-sm text-gray-600 hover:text-primary transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* HELP */}
          <nav className="flex flex-col gap-2">
            <h6 className="text-sm font-bold text-primary uppercase tracking-widest mb-1">
              Help
            </h6>
            {[
              "Contact Us",
              "FAQs",
              "Shipping & Delivery",
              "Terms & Conditions",
              "Refund & Return",
              "Privacy Policy",
            ].map((item) => (
              <Link
                key={item}
                href="/contact"
                className="text-sm text-gray-600 hover:text-primary transition"
              >
                {item}
              </Link>
            ))}

            {/* PAYMENTS */}
            {/* <div className="mt-3">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                Payments Accepted
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="border rounded px-2 py-1 text-xs font-bold text-pink-600 border-pink-300">
                  bKash
                </span>
                <span className="border rounded px-2 py-1 text-xs font-bold text-blue-700 border-blue-300">
                  VISA
                </span>
                <span className="border rounded px-2 py-1 text-xs font-bold text-red-600 border-red-300">
                  MasterCard
                </span>
                <span className="border rounded px-2 py-1 text-xs font-bold text-orange-500 border-orange-300">
                  Nagad
                </span>
              </div>
            </div> */}
          </nav>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} BeautyMart. All rights reserved.
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            {["Authenticity", "Terms & Conditions", "Privacy Policy", "Refund & Return", "FAQs"].map((item) => (
              <Link
                key={item}
                href="/contact"
                className="text-xs text-gray-400 hover:text-primary transition"
              >
                {item}
              </Link>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Footer;
