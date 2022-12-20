import Link
 from "next/link"
function Navbar() {
  return (
    <nav className="w-full flex justify-between md:px-4 items-center bg-white border-indigo-400 shadow-sm shadow-indigo-300 h-16 border-b-2">
        <span className="md:hidden">
            Menu Icon placeholder
        </span>
        <span>
            <Link href='/' className="text-indigo-500 font-extrabold">Logo here</Link>
        </span>
        <span className="text-indigo-400 hidden md:flex gap-8 font-semibold">
            <Link href='/cart'>Cart</Link>
            {/* <Link href='/seller-register'>Become a Seller</Link> */}
            <Link href='/signup'>Sign-Up</Link>
            <Link href='/login'>Login</Link>
        </span>
    </nav>
  )
}


export default Navbar