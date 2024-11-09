import Image from "next/image";
async function fetchItem(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch item");
  }
  return res.json();
}

export default async function ItemPage({ params }) {
  const item = await fetchItem(params.id);
  return (
    <>
      <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="w-full max-w-md mx-auto">
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={600}
            className="object-contain w-full h-auto rounded"
          />
        </div>

        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">{item.title}</h1>
          <p className="text-xl text-blue-600 mb-4">${item.price}</p>
          <p className="text-gray-700">{item.description}</p>
        </div>
      </div>
    </>
  );
}
