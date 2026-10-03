
// "use client";

// import { useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";

// export default function VerifyEmail() {
//   const params = useSearchParams();

//   useEffect(() => {
//     const token = params.get("token");

//     if (token) {
//       fetch("/api/verify-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ token }),
//       });
//     }
//   }, []);

//   return  <Link href="/login">
//       <button className="btn btn-primary mt-4">
//         Go to Login
//       </button>
//     </Link>;
// }