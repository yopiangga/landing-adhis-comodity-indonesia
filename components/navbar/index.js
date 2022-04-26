import Image from "next/image";
import logo2 from "public/logo2.png";
import Link from "next/link";

export function NavbarDashboard({ title }) {
  return (
    <div className="navbar bg-transparent mb-0 rounded-box">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{title}</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end flex items-center">
          <h4 className="mr-2">Alfian Prisma Yopiangga</h4>
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function NavbarLanding() {
  return (
    <div>
      <div className="navbar bg-transparent absolute z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-lg font-medium"
            >
              <li>
                <Link href={"/"}>
                  <a>Home</a>
                </Link>
              </li>

              <li>
                <Link href={"/about"}>
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href={"/product"}>
                  <a>Product</a>
                </Link>
              </li>
              <li>
                <Link href={"/news"}>
                  <a>News</a>
                </Link>
              </li>
              <li>
                <Link href={"/team"}>
                  <a>Our Team</a>
                </Link>
              </li>
              <li>
                <Link href={"/faq"}>
                  <a>FAQ</a>
                </Link>
              </li>
              <li>
                <Link href={"/term"}>
                  <a>Term</a>
                </Link>
              </li>
              <li>
                <Link href={"/certificate"}>
                  <a>Certificate</a>
                </Link>
              </li>
            </ul>
          </div>
          <a className=" text-xl w-28 bg-black">
            <Image src={logo2} layout="responsive" objectFit="cover" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex text-white text-lg font-medium">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href={"/"}>
                <a className="active:bg-green-500">Home</a>
              </Link>
            </li>

            <li>
              <Link href={"/about"}>
                <a className="active:bg-green-500">About Us</a>
              </Link>
            </li>
            <li>
              <Link href={"/product"}>
                <a className="active:bg-green-500">Product</a>
              </Link>
            </li>
            <li>
              <Link href={"/news"}>
                <a className="active:bg-green-500">News</a>
              </Link>
            </li>
            <li>
              <Link href={"/team"}>
                <a className="active:bg-green-500">Our Team</a>
              </Link>
            </li>
            <li>
              <Link href={"/faq"}>
                <a className="active:bg-green-500">FAQ</a>
              </Link>
            </li>
            <li>
              <Link href={"/term"}>
                <a className="active:bg-green-500">Term</a>
              </Link>
            </li>
            <li>
              <Link href={"/certificate"}>
                <a className="active:bg-green-500">Certificate</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
