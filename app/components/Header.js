import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto text-center">
        <Link href="/" className="text-3xl lg:text-4xl font-bold">
          Fake Store
        </Link>
      </div>
    </header>
  );
}
