import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-5 px-6 md:px-16 bg-black bg-opacity-40 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-800">
      <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition">
        ZA        </Link>

      <div className="space-x-6 text-gray-300">
        <Link href="/" className="hover:text-blue-400 transition">Home</Link>
        <Link href="/about" className="hover:text-blue-400 transition">About</Link>
        <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
      </div>
    </nav>
  );
}
