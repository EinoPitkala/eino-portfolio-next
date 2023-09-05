import Link from "next/link";
const Button = ({children}: any, href: string) => {
    return (
        <button className="bg-zinc-500 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition ease-in-out duration-200">
            <Link href={href}>
                {children}
            </Link>
        </button>
    );
}
export default Button;