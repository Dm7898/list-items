"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProductList({ products }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter products based on search query
  useEffect(() => {
    const result = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(result);
  }, [searchQuery, products]);
  // Only show the first 8 filtered products
  const firstEightProducts = filteredProducts.slice(0, 8);

  return (
    <>
      {/* Search Bar */}
      <div className="my-6 text-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded-lg w-1/3"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
        {firstEightProducts.map((product) => (
          <div className="shadow-sm rounded-sm" key={product.id}>
            <Link href={`/products/${product.id}`} passHref>
              <div className="h-72 flex border border-stone-400 items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={160}
                  height={160}
                  className="object-contain rounded"
                />
              </div>
              <h2 className="px-2 py-2 font-semibold text-black">
                {product.title}
              </h2>
              <p className="px-2 pb-2">{product.description.slice(0, 40)}...</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
