import React from "react";
import Nav from "@/components/organisms/Nav";
import Footer from "@/components/organisms/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
// TODO fix nal not showing on mobile ie the hamburger
//TODO fix the header image jank also the layout of it
// all the data flow stuff loadign error states etc with RQ
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <div className='layout'>
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  );
}
