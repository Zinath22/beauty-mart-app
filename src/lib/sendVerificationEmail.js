// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "beautymart@resend.dev";
// const BASE_URL = process.env.NEXTAUTH_URL || "http://localhost:3000";

// export const sendVerificationEmail = async (email, token) => {
//   if (!email || !token) {
//     throw new Error("Missing email or verification token");
//   }

//   const verifyUrl = `${BASE_URL}/verify-email?token=${token}`;

//   try {
//     return await resend.emails.send({
//       from: RESEND_FROM_EMAIL,
//       to: email,
//       subject: "Verify your email",
//       text: `Verify your email by clicking this link: ${verifyUrl}`,
//       html: `
//         <h2>Verify Your Email</h2>
//         <p>Click the link below to verify your account:</p>
//         <a href="${verifyUrl}">Verify Email</a>
//       `,
//     });
//   } catch (error) {
//     console.error("SEND VERIFICATION EMAIL ERROR:", error);
//     throw new Error(
//       error?.message || "Unable to send verification email. Check Resend configuration."
//     );
//   }
// };