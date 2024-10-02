import Link from "next/link";
// import AuthProvider from "../../context/AuthContext";
import LoginBtn from "../Buttons/LoginBtn"; 

function Header() {
  return (
    <nav className="flex justify-between p-4 max-w-7xl mx-auto border-b-2 border-gray-600">
      <h2 className="text-2xl mt-2 font-bold text-gray-300">Mind Mosaic</h2>
      <ul className="hidden md:flex space-x-5 mt-3 text-gray-300">
        <Link href="/">
          <li className="text-md font-bold cursor-pointer hover:scale-105 transition-all ease-in-out">
            Home
          </li>
        </Link>
        <li className="text-md font-bold cursor-pointer hover:scale-105 transition-all ease-in-out">
          Blogs
        </li>
        <li className="text-md font-bold cursor-pointer hover:scale-105 transition-all ease-in-out">
          About
        </li>
      </ul>
      <div className='flex gap-3 mt-1'>
          <LoginBtn />
      </div>
    </nav>
  );
}

export default Header;
