import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between p-5">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#5B4BFF] text-sm text-white">
            ✂
          </div>
          <span className="text-md font-semibold">Barbershop</span>
        </div>

        {/* Right side */}
        <ul className="flex items-center gap-4 text-sm font-medium">
          <li>
            <Link
              href="#home"
              className="hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#our-barbers"
              className="hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
            >
              Our Barbers
            </Link>
          </li>
          <li>
            <Link
              href="#book-now"
              className="hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
            >
              Book Now
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
