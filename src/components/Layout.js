import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen w-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="max-w-screen-xl mx-auto mb-auto px-4 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
