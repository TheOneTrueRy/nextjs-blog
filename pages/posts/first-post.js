import Link from "next/link.js";
import React from "react";
import Head from "next/head.js";
import Layout from "../../components/layout.js";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>
        First Post
      </h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}