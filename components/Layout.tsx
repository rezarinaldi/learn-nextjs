import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link
          rel="shortcut icon"
          href="https://parsinta.com/favicons/apple-touch-icon.png?v=vMgGe8RqKr"
          type="image/x-icon"
        />
      </Head>
      <Navbar />
      <div className="mt-8">{props.children}</div>
    </div>
  );
}
