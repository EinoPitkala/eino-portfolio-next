import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-zinc-800 h-48 flex flex-col items-center justify-center text-stone-300">
      <h2 className="text-4xl font-bold gradient-text font-sans py-2">
        Eino Pitkälä
      </h2>
      <p className="text-xl">
        <Link href={"mailto:me@eino.bio"} className="link">
          me@eino.bio
        </Link>
      </p>
      <p>Made with Next.js, Typescript and Tailwind</p>
      <p className="text-lg mb-4">© 2023 Eino Pitkälä</p>
    </div>
  );
};
export default Footer;
