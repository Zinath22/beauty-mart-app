// import { dbConnect } from "@/lib/dbConnect";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { token } = await req.json();

//     // 🔒 token check
//     if (!token) {
//       return NextResponse.json(
//         { success: false, message: "Token is required" },
//         { status: 400 }
//       );
//     }

//     const db = await dbConnect();
//     const users = db.collection("users");

//     // 🔍 user find
//     const user = await users.findOne({ verifyToken: token });

//     if (!user) {
//       return NextResponse.json(
//         { success: false, message: "Invalid or expired token" },
//         { status: 400 }
//       );
//     }

//     // ✅ update user
//     await users.updateOne(
//       { _id: user._id },
//       {
//         $set: { verified: true },
//         $unset: { verifyToken: "" },
//       }
//     );

//     return NextResponse.json({
//       success: true,
//       message: "Email verified successfully",
//     });

//   } catch (error) {
//     console.log("VERIFY ERROR:", error);

//     return NextResponse.json(
//       { success: false, message: error.message },
//       { status: 500 }
//     );
//   }
// }