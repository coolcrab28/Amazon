import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon</title>
        <script async src="https://arc.io/widget.min.js#XFKhhYJ8"></script>
      </Head>
      <Header  />

      <main className="max-w-screen-xl mx-auto ">
        <Banner />

      </main>
    </div>
  );
}
