


// "use client";

// import { useState } from "react";
// import Swal from "sweetalert2";

// export default function AddProduct() {
//   const [form, setForm] = useState({
//     title: "",
//     price: "",
//     description: "",
//     img: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("/api/products", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     if (data.success) {
//       Swal.fire(
//         "Success",
//         "Product added",
//         "success"
//       );

//       setForm({
//         title: "",
//         price: "",
//         description: "",
//         img: "",
//       });
//     }
//   };

//   return (
//     <div className="p-5 max-w-md">
//       <h1 className="text-2xl font-bold mb-5">
//         Add Product
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="space-y-3"
//       >
//         <input
//           type="text"
//           placeholder="Title"
//           className="input input-bordered w-full"
//           value={form.title}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               title: e.target.value,
//             })
//           }
//         />

//         <input
//           type="number"
//           placeholder="Price"
//           className="input input-bordered w-full"
//           value={form.price}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               price: e.target.value,
//             })
//           }
//         />

//         <textarea
//           placeholder="Description"
//           className="textarea textarea-bordered w-full"
//           value={form.description}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               description: e.target.value,
//             })
//           }
//         />

//         <input
//           type="text"
//           placeholder="Image URL"
//           className="input input-bordered w-full"
//           value={form.img}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               img: e.target.value,
//             })
//           }
//         />

//         <button className="btn btn-primary w-full">
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Swal from "sweetalert2";

const CATEGORIES = ["Makeup", "Skin Care", "Hair Care", "Perfume", "Cleansing"];

export default function AddProduct() {
  const [form, setForm] = useState({
    title:       "",
    price:       "",
    description: "",
    img:         "",
    category:    "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      Swal.fire("Success", "Product added", "success");

      setForm({
        title:       "",
        price:       "",
        description: "",
        img:         "",
        category:    "",
      });
    } else {
      Swal.fire("Error", data.message || "Failed to add product", "error");
    }
  };

  return (
    <div className="p-5 max-w-md">
      <h1 className="text-2xl font-bold mb-5">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          name="title"
          type="text"
          placeholder="Title"
          className="input input-bordered w-full"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          className="input input-bordered w-full"
          value={form.price}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="img"
          type="text"
          placeholder="Image URL"
          className="input input-bordered w-full"
          value={form.img}
          onChange={handleChange}
          required
        />

        {/* CATEGORY SELECT */}
        <select
          name="category"
          className="select select-bordered w-full"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Category</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <button className="btn btn-primary w-full">
          Add Product
        </button>

      </form>
    </div>
  );
}
