import Link from "next/link";
import Layout from "../components/Layout";

export default function About() {
  return (
    <div>
      <Layout title="About">
        <div className="container">
          <h1 className="font-bold text-5xl text-blue-600">About</h1>
          <p className="my-4">This is the about page</p>
          <p>
            <Link href="/">
              <button
                type="button"
                className="py-2 px-4 mr-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Go Home
              </button>
            </Link>
          </p>
        </div>
      </Layout>
    </div>
  );
}
