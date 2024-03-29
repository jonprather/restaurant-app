import React from "react";
import Nav from "@/components/organisms/Nav";
import Footer from "@/components/organisms/Footer";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout({
  title = "Yannal",
  keywords = "food, online, kebabs",
  description = "Ecommerce Restaurant",
  children,
}) {
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
      </div>
    </>
  );
}
