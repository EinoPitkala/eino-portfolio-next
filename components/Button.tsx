import Link from "next/link";
const Button = (props: any) => {
    return (
        <a href={props.href} className="bg-zinc-500 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition ease-in-out duration-200">
            {props.text}
        </a>
    );
}
export default Button;