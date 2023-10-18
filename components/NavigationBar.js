import Link from "next/link";

export default function NavigationBar() {
    return (
        <div className="w-full bg-black text-white flex justify-between p-2 items-center">
            <Link className="text-white text-xl font-bold" href={"/"}>CRUD.</Link>
            <Link href={"/add"} className="bg-white px-4 text-black py-1 font-bold border rounded text-xl">+</Link>
        </div>
    )
}