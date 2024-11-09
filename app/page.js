import ProductList from "./components/ProductList";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const products = await res.json();
  return <ProductList products={products} />;
}
