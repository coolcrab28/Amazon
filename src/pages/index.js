import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Amazon</title>
        <link rel='manifest' href='/manifest.json'></link>
      </Head>
      <Header  />
      


      <main className="max-w-screen-xl mx-auto ">

        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
    const products = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    )
    return {props :{
      products,
    }}
}
