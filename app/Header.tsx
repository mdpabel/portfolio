import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { ArrowUpRight } from "@/components/Icons";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between h-16 max-w-6xl px-8 mx-auto mt-10">
      <div className="text-2xl text-gray-600">
        <Link className="font-medium" href="/">
          {"<Pabel />"}
        </Link>
      </div>
      <nav className="flex justify-between items-center">
        <ul className="items-center hidden space-x-6 text-gray-600 md:flex">
          <li>
            <Link className="font-medium" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="font-medium" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center py-2 shadow-lg px-7 bg-slate-50 rounded-3xl "
              href="https://drive.google.com/file/d/1X3ryVIOw_UvzNRk-jNTRvDwkuQsoDDOU/view?usp=drive_link"
              target="_blank"
            >
              My CV <ArrowUpRight />
            </Link>
          </li>
        </ul>
        {/* MOBILE NAVBAR  */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
