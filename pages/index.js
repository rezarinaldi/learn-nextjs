import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Layout title={process.env.appName}>
        <div className="container">Welcome to the Next JS tutorial</div>
      </Layout>
    </div>
  );
}
