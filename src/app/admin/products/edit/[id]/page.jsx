"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    img: "",
    price: "",
    description: "",
  });

  // 🔥 LOAD PRODUCT DATA
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);

        const data = await res.json();

        if (data.success) {
          setForm({
            title: data.product.title || "",
            img: data.product.img || "",
            price: data.product.price || "",
            description:
              data.product.description || "",
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProduct();
    }
  }, [id]);

  // 🔥 INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 UPDATE PRODUCT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      Swal.fire(
        "Success",
        "Product updated successfully",
        "success"
      );

      router.push("/admin/products");
    } else {
      Swal.fire(
        "Error",
        data.message || "Failed",
        "error"
      );
    }
  };

  if (loading) {
    return (
      <div className="p-5">
        Loading Product...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-5">

      <h1 className="text-3xl font-bold mb-6">
        Edit Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="img"
          value={form.img}
          onChange={handleChange}
          placeholder="Image URL"
          className="input input-bordered w-full"
        />

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="input input-bordered w-full"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea textarea-bordered w-full h-32"
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
        >
          Update Product
        </button>

      </form>
    </div>
  );
}