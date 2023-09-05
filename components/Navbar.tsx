import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center flex-col py-4 px-24 bg-zinc-900 sm:flex-row ">
      <Link href={"/"}>
        <Image
          src={"logo.svg"}
          alt="Eino Pitkälä Logo"
          width={70}
          height={70}
          className="transition ease-in-out duration-200 hover:rotate-122"
        />
      </Link>

      <div className="flex">
        <Link
          className="rounded  hover:text-blue-600 text-white py-2 px-4 transition ease-in-out duration-200"
          href="/contacts"
        >
          Links
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
