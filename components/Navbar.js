import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-blue-500">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a className="text-white uppercase font-semibold tracking-tighter">
                {process.env.appName}
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/about">
              <a className="text-blue-200 hover:text-white py-5 px-3">About</a>
            </Link>
            <Link href="/login">
              <a className="text-blue-200 hover:text-white py-5 px-3">Login</a>
            </Link>
            <Link href="/register">
              <a className="text-blue-200 hover:text-white py-5 px-3">
                Register
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
