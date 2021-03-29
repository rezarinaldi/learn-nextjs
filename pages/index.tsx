import Link from "next/link";
import Layout from "../components/Layout";

const Home = () => (
  <div>
    <Layout title={process.env.appName}>
      <div className="container">
        <h1 className="font-bold text-5xl text-blue-600 mb-4">
          Welcome to the Next JS tutorial 👋
        </h1>
        <p>
          <Link href="/about">
            <button
              type="button"
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              About
            </button>
          </Link>
        </p>
      </div>
    </Layout>
  </div>
);

export default Home;
