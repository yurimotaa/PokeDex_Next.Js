import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function MainContainer({ children }: any) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/pokeball.png" type="image/x-icon" />
        <title>PokeDex by Yuri</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
